import { copyFile, readdir, rm, stat } from 'fs/promises';
import { parse, resolve } from 'path';
import { guardarJSON } from './utilidades/ayudas';
import { cadena, logAviso, logCyan } from './utilidades/constantes';
const ruta = resolve(__dirname, './datos');
type PesosXLSX = {
  [nombre: string]: { peso: string; nombre: string };
};
const datos: PesosXLSX = {};

function pesoArchivo(peso: number) {
  const i = peso == 0 ? 0 : Math.floor(Math.log(peso) / Math.log(1024));
  const formato = ['B', 'kB', 'MB', 'GB', 'TB'][i];
  const calculo = Number((peso / Math.pow(1024, i)).toFixed(2));

  return `${calculo} ${formato}`;
}

async function calcularPesos() {
  const archivos = await readdir(ruta).then((nombres) =>
    nombres.filter((nombre) => nombre.endsWith('.xlsx') && nombre.includes('YA'))
  );

  archivos.sort();

  // Vaciar la carpeta de datos
  const rutaEstaticosDatos = resolve(__dirname, '../../www/estaticos/datos');
  const archivosXlsx = await readdir(rutaEstaticosDatos);

  for (const xlsx of archivosXlsx) {
    await rm(`${rutaEstaticosDatos}/${xlsx}`);
  }

  for (const nombre of archivos) {
    const { size } = await stat(resolve(ruta, nombre));
    const nombreArchivo = parse(nombre).name;
    const peso = pesoArchivo(size);
    const pos = nombreArchivo.indexOf('_') + 1;
    const nuevoArchivo = ('ya' + nombreArchivo.slice(pos, nombreArchivo.length)).replace('.', '-');

    datos[nuevoArchivo] = { peso, nombre: nombreArchivo };

    // Copiar .xlsx a la carpeta de estáticos en WWW
    await copyFile(resolve(__dirname, `./datos/${nombre}`), resolve(__dirname, `../../www/estaticos/datos/${nombre}`));
  }

  const nombreArchivoFinal = 'pesosArchivos';
  const rutaWWW = '../../../www/src/datosVisibles';
  guardarJSON(datos, nombreArchivoFinal, rutaWWW, 2);
  console.log(
    cadena,
    logAviso('Archivo de cuanto pesan los archivos: creado en:'),
    logCyan(resolve(__dirname, `${rutaWWW.replace('../', '')}/${nombreArchivoFinal}.json`))
  );
}

calcularPesos();
