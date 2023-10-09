import { atom, map } from 'nanostores';
import type { FeatureCollection } from 'geojson';

export const indicador = atom<string | null>(null);
export const archivoActual = atom<string | null>(null);
export const listaAños = atom<{ año: string; conDatos: boolean }[]>([]);
export const datosIndicador = map<{ [año: string]: any }>();
export const datosIndicadorMun = map<{ [año: string]: any }>();
export const nivel = atom<string>('dep');
export const deptoSeleccionado = atom<string | null>(null);
export const añoSeleccionado = atom<string | null>(null);
export const lugares: string[] = [];
export const datosColombia = map<{ dep?: FeatureCollection; mun?: FeatureCollection }>({});
export const datosMunicipios = atom<FeatureCollection | null>(null);
export const lugaresSeleccionados = atom<{ nombre: string; codigo: string }[]>([]);

export async function cargarDatos() {
  const nivelActual = nivel.value;

  if (!datosColombia.value[nivelActual]) {
    if (nivelActual === 'dep') {
      const datos = await fetch('https://enflujo.com/bodega/colombia/departamentos.json').then((res) => res.json());
      datosColombia.setKey('dep', datos);
    } else if (nivelActual === 'mun') {
      const datos = await fetch('https://enflujo.com/bodega/colombia/municipios.json').then((res) => res.json());
      datosColombia.setKey('mun', datos);
    }
  }

  const datosMapaMun = await fetch('https://enflujo.com/bodega/colombia/municipios.json').then((res) => res.json());

  const datos = await fetch(`https://enflujo.com/bodega/ninezya/${archivoActual.value}-${nivel.value}.json`).then(
    (res) => res.json()
  );

  const datosIndicadorMunicipio = await fetch(
    `https://enflujo.com/bodega/ninezya/${archivoActual.value}-mun.json`
  ).then((res) => res.json());

  datosIndicadorMun.set(datosIndicadorMunicipio);
  datosIndicador.set(datos);
  datosMunicipios.set(datosMapaMun);
}

export function agregarLugar(codigo: string) {
  if (lugares.includes(codigo)) return;
  lugares.push(codigo);
}

export function crearListaAños() {
  const datos = datosIndicador.value;

  if (!datos) return;

  const años = Object.keys(datos)
    .filter((año) => datos[año].length)
    .sort();
  const min = +años[0];
  const max = +años[años.length - 1];
  const lista = [];

  for (let a = min; a <= max; a++) {
    const conDatos = datos[a] && datos[a].length;
    lista.push({ año: a, conDatos });
  }

  listaAños.set(lista);
}
