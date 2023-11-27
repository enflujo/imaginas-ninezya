import { readdir, stat } from 'fs/promises';
import { parse, resolve } from 'path';
import { guardarJSON } from './utilidades/ayudas';
const ruta = resolve(__dirname, './datos');
type PesosXLSX = {
  [nombre: string]: {peso: string, nombre: string};
};
const datos: PesosXLSX = {};

function pesoArchivo(peso: number) {
  const i = peso == 0 ? 0 : Math.floor(Math.log(peso) / Math.log(1024));
  const formato = ['B', 'kB', 'MB', 'GB', 'TB'][i];
  const calculo = Number((peso / Math.pow(1024, i)).toFixed(2));

  return `${calculo} ${formato}`;
}

async function calcularPesos() {
  const archivos = await readdir(ruta).then((nombres) => nombres.filter((nombre) => nombre.endsWith('.xlsx') && nombre.includes('YA')));
  for (const nombre of archivos) {
    const { size } = await stat(resolve(ruta, nombre));
    const peso = pesoArchivo(size);
    const pos = parse(nombre).name.indexOf('_') + 1;
    const nombreArchivo = ('ya' + parse(nombre).name.slice(pos, parse(nombre).name.length)).replace('.', '-');

    datos[nombreArchivo] = {peso, nombre: parse(nombre).name};
  }

  guardarJSON(datos, 'pesosArchivos');
}

calcularPesos();