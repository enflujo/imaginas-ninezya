import { atom, map } from 'nanostores';

export const indicador = atom<string | null>(null);
export const listaAños = map<{ año: string; conDatos: boolean }[]>([]);
export const datosIndicador = map<{ [año: string]: any }>();

export async function cargarDatos(nombreArchivo: string) {
  const datos = await fetch(`${import.meta.env.BASE_URL}/datos/${nombreArchivo}-mun.json`).then((res) => res.json());
  const años = Object.keys(datos).sort();
  const min = +años[0];
  const max = +años[años.length - 1];
  const lista = [];

  for (let a = min; a < max; a++) {
    lista.push({ año: a, conDatos: !!datos[a].length });
  }

  datosIndicador.set(datos);
  listaAños.set(lista);
}
