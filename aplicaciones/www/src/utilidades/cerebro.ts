import { atom, map } from 'nanostores';
import type { FeatureCollection } from 'geojson';
import type { DatosIndicador, DatosIndicadorNal, DatosPorAñoOrdenado, FuncionColor, LugarSeleccionado } from '@/tipos';
import { escalaColores, obtenerVariableCSS, pedirDatos } from './ayudas';
import { colorNegativo, colorNeutro, colorPositivo } from './constantes';

export const listaAños = atom<DatosPorAñoOrdenado>([]);
export const datosDep = map<DatosIndicador>(null);
export const datosMun = map<DatosIndicador>(null);
export const datosNal = map<DatosIndicadorNal>();
export const nivel = atom<string>(null);
export const añoSeleccionado = atom<string | null>(null);
export const datosColombia = map<{ dep?: FeatureCollection; mun?: FeatureCollection }>({});
export const lugaresSeleccionados = atom<LugarSeleccionado[]>([]);
export let color: FuncionColor;
export let valorMaxY = 0;
export let valorMaxColor = 0;
export let umbral = 0;

const cargador = document.getElementById('cargador');
let nombreArchivo = '';

export async function datosMapaMunicipio() {
  if (datosColombia.value.mun) return datosColombia.value.mun;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<FeatureCollection>('https://enflujo.com/bodega/colombia/municipios.json');
  respuesta.features.forEach((mun) => {
    const departamento = datosColombia.value.dep.features.find((dep) => dep.properties.nombre === mun.properties.dep);
    if (departamento) {
      mun.properties.color = departamento.properties.color;
    }
  });
  datosColombia.setKey('mun', respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return respuesta;
}

export async function datosIndicadorMunicipio(año?: string) {
  if (datosMun.value) return año ? datosMun.value[año] : datosMun.value;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<DatosIndicador>(`https://enflujo.com/bodega/ninezya/${nombreArchivo}-mun.json`);
  datosMun.set(respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return año ? respuesta[año] : respuesta;
}

export async function datosIndicadorDep(año?: string) {
  if (datosDep.value) return año ? datosDep.value[año] : datosDep.value;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<DatosIndicador>(`https://enflujo.com/bodega/ninezya/${nombreArchivo}-dep.json`);
  datosDep.set(respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return año ? respuesta[año] : respuesta;
}

export async function cargarDatos() {
  const datosArchivo = document.getElementById('visualizaciones').dataset;
  nombreArchivo = datosArchivo.archivo;
  umbral = datosArchivo.umbral ? +datosArchivo.umbral : umbral;

  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  // Cargar datos departamentos
  const deps = await pedirDatos<FeatureCollection>('https://enflujo.com/bodega/colombia/departamentos.json');
  deps.features.forEach((dep, i) => {
    dep.properties.color = obtenerVariableCSS(`--color${i}`);
  });
  datosColombia.setKey('dep', deps);

  try {
    // Cargar datos indicador nacionales para linea de tiempo
    const nal = await pedirDatos<DatosIndicadorNal>(`https://enflujo.com/bodega/ninezya/${nombreArchivo}-nal.json`);

    if (nal.unidadMedida > 100) {
      if (nombreArchivo === 'ya1-7') {
        valorMaxY = 15000;
        valorMaxColor = 15000;
      } else if (nombreArchivo === 'ya4-2') {
        valorMaxY = 200;
        valorMaxColor = 100;
      } else {
        valorMaxY = Math.min(Math.ceil(nal.max / 100) * 100, 10000);
        valorMaxColor = 10000;
      }
    } else {
      if (nombreArchivo === 'ya2-8') {
        valorMaxY = 50;
        valorMaxColor = 50;
      } else {
        valorMaxY = nal.max > nal.unidadMedida ? Math.ceil(nal.max / 100) * 100 : nal.unidadMedida;
        valorMaxColor = 100;
      }
    }

    color = definirColor(nal.ascendente);

    datosNal.set(nal);
  } catch (error) {
    cargando = false;
  }

  cargando = false;
  cargador.classList.remove('visible');
}

export function crearListaAños() {
  const { datos } = datosNal.value;
  if (!datos) return;

  const años = Object.keys(datos)
    .filter((año) => datos[año])
    .sort();
  const min = +años[0];
  const max = +años[años.length - 1];
  const lista: DatosPorAñoOrdenado = [];

  for (let año = min; año <= max; año++) {
    const valor = datos[año];
    lista.push({ año: `${año}`, valor: valor ? valor : null });
  }

  listaAños.set(lista);
}

export async function cargarIndicador() {
  await cargarDatos();
  revisarNivel();
  crearListaAños();
}

const definirColor = (ascendente: boolean) => {
  if (ascendente) {
    return escalaColores(0, valorMaxColor, umbral, colorNegativo, colorNeutro, colorPositivo);
  } else {
    return escalaColores(0, valorMaxColor, umbral, colorPositivo, colorNeutro, colorNegativo);
  }
};

export function actualizarUrl(valores: { nombre: string; valor: string }[]) {
  const parametros = new URLSearchParams(window.location.search);

  valores.forEach((obj) => {
    parametros.set(obj.nombre, obj.valor);
  });

  window.history.pushState({}, '', decodeURIComponent(`${window.location.pathname}?${parametros}`));
}

function revisarNivel(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const nivelDeseado = params.get('nivel');

  if (nivelDeseado) {
    if (nivel.value !== nivelDeseado) {
      nivel.set(nivelDeseado);
    }
  }
  // Si no hay valor, volver al estado inicial que es vista departamental.
  else if (nivel.value !== 'dep') {
    nivel.set('dep');
  }
}

export function revisarDepartamentos(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const deps = params.get('deps');

  if (deps) {
    const codigos = deps.split(',');
    const datosDeps = datosColombia.value.dep;

    if (datosDeps) {
      const lugares: LugarSeleccionado[] = [];

      codigos.forEach((codigo, i) => {
        const lugarI = datosDeps.features.findIndex((obj) => obj.properties.codigo === codigo);

        if (lugarI > 0) {
          const lugar = datosDeps.features[lugarI];
          lugares.push({ nombre: lugar.properties.nombre, codigoDep: codigo, codigoMun: null });
        }
      });

      lugaresSeleccionados.set(lugares);
    } else {
      console.error('no se han cargado los datos');
    }
  } else {
    lugaresSeleccionados.set([]);
  }
}

export function buscarColorDep(codigo: string) {
  const lugarI = datosColombia.value.dep.features.findIndex((obj) => obj.properties.codigo === codigo);
}

nivel.subscribe((nuevoNivel) => {
  if (!nuevoNivel) return;
  const parametros = new URLSearchParams(window.location.search);
  const nivelActual = parametros.get('nivel');
  if (nuevoNivel !== nivelActual) {
    actualizarUrl([{ nombre: 'nivel', valor: nuevoNivel }]);
  }
});

window.addEventListener('popstate', async () => {
  const parametros = new URLSearchParams(window.location.search);

  revisarNivel(parametros);
  revisarDepartamentos(parametros);
  console.log('pop', lugaresSeleccionados.value);
});
