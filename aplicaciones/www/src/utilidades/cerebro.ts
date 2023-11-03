import { atom, map } from 'nanostores';
import type { FeatureCollection } from 'geojson';
import type { DatosIndicador, DatosIndicadorNal, DatosPorAñoOrdenado } from '@/tipos';

export const listaAños = atom<DatosPorAñoOrdenado>([]);
export const datosDep = map<DatosIndicador>();
export const datosIndicadorMun = map<DatosIndicador>();
export const datosNal = map<DatosIndicadorNal>();
export const nivel = atom<string>('dep');
export const deptoSeleccionado = atom<string | null>(null);
export const añoSeleccionado = atom<string | null>(null);
export const lugares: string[] = [];
export const datosColombia = map<{ dep?: FeatureCollection; mun?: FeatureCollection }>({});
export const lugaresSeleccionados = atom<{ nombre: string; codigo: string }[]>([]);

const cargador = document.getElementById('cargador');
let cargando = true;

function pedirDatos<Respuesta>(url: string, config: RequestInit = {}): Promise<Respuesta> {
  return fetch(url, config)
    .then((res) => res.json())
    .then((datos) => datos as Respuesta);
}

// Darle un tiempo antes de mostrar cargador. De esta manera si carga rápido los datos no se ve un brinco.
function temporizadorCargador() {
  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);
}

export async function datosMapaMunicipio() {
  if (datosColombia.value.mun) return datosColombia.value.mun;
  temporizadorCargador();
  const respuesta = await pedirDatos<FeatureCollection>('https://enflujo.com/bodega/colombia/municipios.json');
  datosColombia.setKey('mun', respuesta);
  cargando = false;
  return respuesta;
}

export async function cargarDatos() {
  const archivoActual = document.getElementById('visualizaciones').dataset.archivo;

  // Cargar datos departamentos
  await fetch('https://enflujo.com/bodega/colombia/departamentos.json').then(async (res) => {
    datosColombia.setKey('dep', await res.json());
  });

  // Cargar datos indicador
  await fetch(`https://enflujo.com/bodega/ninezya/${archivoActual}-dep.json`).then(async (res) => {
    datosDep.set(await res.json());
  });

  await fetch(`https://enflujo.com/bodega/ninezya/${archivoActual}-mun.json`).then(async (res) => {
    datosIndicadorMun.set(await res.json());
  });

  // Cargar datos indicador nacionales para linea de tiempo
  await fetch(`https://enflujo.com/bodega/ninezya/${archivoActual}-nal.json`).then(async (res) => {
    datosNal.set(await res.json());
  });

  cargando = false;
  cargador.classList.remove('visible');
}

export function agregarLugar(codigo: string) {
  if (lugares.includes(codigo)) return;
  lugares.push(codigo);
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
  crearListaAños();
}
