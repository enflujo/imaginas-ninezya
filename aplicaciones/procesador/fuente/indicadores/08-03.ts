import barraProceso from '@/modulos/barraProceso';
import { guardarJSON, normalizar, redondearDecimal } from '@/utilidades/ayudas';
import { departamentos, municipios } from '@/utilidades/lugaresColombia';
import type { SingleBar } from 'cli-progress';
import { readFile } from 'fs/promises';
import path from 'path';
import { getXlsxStream } from 'xlstream';
import XLSX from 'xlsx';

const rutaNum = path.resolve(__dirname, './Numerador_YA8_8.3.xlsx');
const rutaDen = path.resolve(__dirname, './denominador_final.xlsx');
interface Num {
  codmpio: string;
  anno: number;
  valor: number;
}

interface DatoProcesado {
  codmpio: string;
  anno: number;
  delito: number;
}

const filasNum: Num[] = [];
const datosProcesados: DatoProcesado[] = [];

interface FilaNum {
  departamento_hecho: string;
  municipio_hecho: string;
  año_denuncia: number;
  total_indiciados: number;
}

interface FilaDen {
  codmpio: number;
  anno: number;
  menores: number;
}

async function procesar() {
  try {
    const datosNum = await readFile(path.resolve(__dirname, './ya8_3_num.json'), 'utf-8');
    procesarDen(JSON.parse(datosNum));
  } catch (error) {
    console.log('no hay datos de numerador, procesar...');
    await procesarNum();
  }
}

export default async () => {
  await procesar();
};

async function procesarDen(datosNum: Num[]) {
  let numeroFila = 1;
  let total = 0;
  let barraActual: SingleBar;

  const flujoDen = await getXlsxStream({
    filePath: rutaDen,
    sheet: 'Sheet1',
    withHeader: true,
    ignoreEmpty: true,
  });

  flujoDen.on('data', (fila) => {
    if (numeroFila === 1) {
      total = fila.totalSheetSize;
      barraActual = barraProceso();

      barraActual.start(total, 0, {
        tabla: '8.3: Procesando',
        terminado: false,
      });
    }

    numeroFila++;
    const datosFila = fila.formatted.obj as FilaDen;

    const num = datosNum.find((obj) => obj.codmpio === `${datosFila.codmpio}` && obj.anno === datosFila.anno);

    if (num) {
      const valor = (num.valor / datosFila.menores) * 100;
      datosProcesados.push({ codmpio: num.codmpio, anno: num.anno, delito: redondearDecimal(valor, 1, 2) });
    }

    barraActual.update(fila.processedSheetSize, { terminado: false });
  });

  flujoDen.on('close', () => {
    barraActual.update(total, { terminado: true });
    barraActual.stop();
    const tabla = XLSX.utils.json_to_sheet(datosProcesados);
    const archivo = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(archivo, tabla, 'Sheet1');
    XLSX.writeFile(archivo, path.resolve(__dirname, '../datos/YA8_8.3.xlsx'), { compression: true });
    console.log('Fin den');
  });
}

async function procesarNum() {
  let numeroFila = 1;
  let total = 0;
  let barraActual: SingleBar;

  const flujoNum = await getXlsxStream({
    filePath: rutaNum,
    sheet: 'Sheet1',
    withHeader: true,
    ignoreEmpty: true,
  });

  flujoNum.on('data', (fila) => {
    if (numeroFila === 1) {
      total = fila.totalSheetSize;
      barraActual = barraProceso();

      barraActual.start(total, 0, {
        tabla: '8.3: Pre-procesando Numerador',
        terminado: false,
      });
    }

    numeroFila++;
    const datosFila = fila.formatted.obj as FilaNum;
    if (datosFila.departamento_hecho === 'BOGOTÁ, D. C.') {
      datosFila.departamento_hecho = 'BOGOTÁ, D.C.';
    }

    if (datosFila.municipio_hecho === 'TUMACO' && datosFila.departamento_hecho === 'Nariño') {
      datosFila.municipio_hecho = 'San Andrés de Tumaco';
    } else if (datosFila.municipio_hecho === 'CARTAGENA' && datosFila.departamento_hecho === 'Bolívar') {
      datosFila.municipio_hecho = 'Cartagena de Indias';
    } else if (
      datosFila.municipio_hecho === 'SAN JUAN DE RÍO SECO' &&
      datosFila.departamento_hecho === 'Cundinamarca'
    ) {
      datosFila.municipio_hecho = 'San Juan de Rioseco';
    } else if (datosFila.municipio_hecho === 'MARIQUITA') {
      datosFila.municipio_hecho = 'San Sebastián de Mariquita';
    } else if (datosFila.municipio_hecho === 'SAN VICENTE' && datosFila.departamento_hecho === 'Antioquia') {
      datosFila.municipio_hecho = 'San Vicente Ferrer';
    } else if (datosFila.municipio_hecho === 'SANTAFÉ DE ANTIOQUIA') {
      datosFila.municipio_hecho = 'Santa Fé de Antioquia';
    } else if (datosFila.municipio_hecho === 'DON MATÍAS') {
      datosFila.municipio_hecho = 'Donmatías';
    } else if (datosFila.municipio_hecho === 'SAN PEDRO' && datosFila.departamento_hecho === 'Antioquia') {
      datosFila.municipio_hecho = 'San Pedro de Los Milagros';
    } else if (datosFila.municipio_hecho === 'PIENDAMÓ') {
      datosFila.municipio_hecho = 'Piendamó - Tunía';
    } else if (datosFila.municipio_hecho === 'MOMPÓS' && datosFila.departamento_hecho === 'Bolívar') {
      datosFila.municipio_hecho = 'Santa Cruz de Mompox';
    } else if (datosFila.municipio_hecho === 'CERRO SAN ANTONIO') {
      datosFila.municipio_hecho = 'Cerro de San Antonio';
    } else if (datosFila.municipio_hecho === 'TOLÚ VIEJO' && datosFila.departamento_hecho === 'Sucre') {
      datosFila.municipio_hecho = 'Santiago de Tolú';
    } else if (datosFila.municipio_hecho === 'SOTARA') {
      datosFila.municipio_hecho = 'Sotará Paispamba';
    } else if (datosFila.municipio_hecho === 'LEGUÍZAMO') {
      datosFila.municipio_hecho = 'Puerto Leguízamo';
    } else if (datosFila.municipio_hecho === 'LÓPEZ' && datosFila.departamento_hecho === 'Cauca') {
      datosFila.municipio_hecho = 'López de Micay';
    } else if (datosFila.municipio_hecho === 'PURÍSIMA' && datosFila.departamento_hecho === 'Córdoba') {
      datosFila.municipio_hecho = 'Purísima de la Concepción';
    } else if (datosFila.municipio_hecho === 'SAN ANDRÉS SOTAVENTO') {
      datosFila.municipio_hecho = 'San Andrés de Sotavento';
    } else if (datosFila.municipio_hecho === 'GÜICÁN') {
      datosFila.municipio_hecho = 'Güicán de la Sierra';
    } else if (datosFila.municipio_hecho === 'MANAURE' && datosFila.departamento_hecho === 'Cesar') {
      datosFila.municipio_hecho = 'Manaure Balcón del Cesar';
    } else if (datosFila.municipio_hecho === 'CUASPUD') {
      datosFila.municipio_hecho = 'Cuaspud Carlosama';
    } else if (datosFila.municipio_hecho === 'CHIBOLO') {
      datosFila.municipio_hecho = 'Chivolo';
    } else if (datosFila.municipio_hecho === 'BARRANCO MINAS') {
      datosFila.municipio_hecho = 'Barrancominas';
    }

    const municipio = municipios.datos.find(([codigo, nombre, codigoDep]) => {
      const dep = departamentos.datos.find((dep) => normalizar(dep[1]) === normalizar(datosFila.departamento_hecho));

      if (dep) {
        return normalizar(nombre) === normalizar(datosFila.municipio_hecho) && codigoDep === dep[0];
      } else {
        console.error('ERROR DEPARTAMENTO:', datosFila);
      }
    });

    if (municipio) {
      filasNum.push({ codmpio: municipio[3], anno: datosFila.año_denuncia, valor: datosFila.total_indiciados });
    } else {
      console.error(numeroFila, datosFila.municipio_hecho, datosFila.departamento_hecho);
    }

    barraActual.update(fila.processedSheetSize, { terminado: false });
  });

  flujoNum.on('close', () => {
    barraActual.update(total, { terminado: true });
    barraActual.stop();
    guardarJSON(filasNum, 'ya8_3_num', path.resolve(__dirname, './'));
    console.log('Fin num');
  });
}
