import path from 'path';
import { getXlsxStream } from 'xlstream';
import { SingleBar } from 'cli-progress';
import barraProceso from './modulos/barraProceso';

type VariablesSaberPlano = {
  AÑO: number;
  CÓDIGO_DEPARTAMENTO: number;
  DEPARTAMENTO: string;
  POBLACIÓN_5_16: number;
  TASA_MATRICULACIÓN_5_16: number;
  COBERTURA_NETA: number;
  COBERTURA_NETA_TRANSICIÓN: number;
  COBERTURA_NETA_PRIMARIA: number;
  COBERTURA_NETA_SECUNDARIA: number;
  COBERTURA_NETA_MEDIA: number;
  COBERTURA_BRUTA: number;
  COBERTURA_BRUTA_TRANSICIÓN: number;
  COBERTURA_BRUTA_PRIMARIA: number;
  COBERTURA_BRUTA_SECUNDARIA: number;
  COBERTURA_BRUTA_MEDIA: number;
  DESERCIÓN: number;
  DESERCIÓN_TRANSICIÓN: number;
  DESERCIÓN_PRIMARIA: number;
  DESERCIÓN_SECUNDARIA: number;
  DESERCIÓN_MEDIA: number;
  APROBACIÓN: number;
  APROBACIÓN_TRANSICIÓN: number;
  APROBACIÓN_PRIMARIA: number;
  APROBACIÓN_SECUNDARIA: number;
  APROBACIÓN_MEDIA: number;
  REPROBACIÓN: number;
  REPROBACIÓN_TRANSICIÓN: number;
  REPROBACIÓN_PRIMARIA: number;
  REPROBACIÓN_SECUNDARIA: number;
  REPROBACIÓN_MEDIA: number;
  REPITENCIA: number;
  REPITENCIA_TRANSICIÓN: number;
  REPITENCIA_PRIMARIA: number;
  REPITENCIA_SECUNDARIA: number;
  REPITENCIA_MEDIA: number;
};

async function inicio() {
  const nombreTabla = 'Estadisticas_Men';
  const ruta = path.resolve(__dirname, `../datos/fuentes/${nombreTabla}.xlsx`);
  let numeroFila = 0;
  let total = 0;
  let barraActual: SingleBar;

  const flujo = await getXlsxStream({
    filePath: ruta,
    sheet: 'Sheet 1',
    withHeader: true,
    ignoreEmpty: true,
  });

  flujo.on('data', (fila) => {
    if (numeroFila === 0) {
      total = fila.totalSheetSize;
      barraActual = barraProceso();

      barraActual.start(total, 0, {
        tabla: nombreTabla,
        terminado: false,
      });
    }

    // Contador para saber en que fila de Excel estamos, útil para buscar errores directo en el Excel.
    numeroFila++;

    console.log(fila.formatted.obj);
    barraActual.update(fila.processedSheetSize, { terminado: false });
  });

  flujo.on('close', () => {
    // agregarExtremos(agregadoNacional);

    // agregadoDepartamental.forEach((datosDep) => {
    //   agregarExtremos(datosDep);
    // });

    // agregadoMunicipal.forEach((datosMun) => {
    //   agregarExtremos(datosMun);
    // });

    // guardarJSON(agregadoNacional, `${nombreArchivo}-pais`);
    // guardarJSON(agregadoDepartamental, `${nombreArchivo}-departamentos`);
    // guardarJSON(agregadoMunicipal, `${nombreArchivo}-municipios`);

    // guardarJSON(errata, '_errata');
    // guardarJSON(agregador, '_agregados');

    barraActual.update(total, { terminado: true });
    barraActual.stop();

    // if (indice < archivos.length - 1) {
    //   procesarTabla(++indice);
    // } else {
    //   console.log('------------- FIN --------------');
    // }
  });
}

inicio();
