import barraProceso from '@/modulos/barraProceso';
import { SingleBar } from 'cli-progress';
import path from 'path';
import { getXlsxStream } from 'xlstream';

export default async (
  nombre: string,
  nombreArchivo: string,
  hoja: string,
  procesador: (datos: any, numeroFila: number) => void,
  fin: () => void
) => {
  const ruta = path.resolve(__dirname, `../datos/${nombreArchivo}.xlsx`);
  let numeroFila = 0;
  let total = 0;
  let barraActual: SingleBar;

  const flujo = await getXlsxStream({
    filePath: ruta,
    sheet: hoja,
    withHeader: true,
    ignoreEmpty: true,
  });

  flujo.on('data', (fila) => {
    if (numeroFila === 0) {
      total = fila.totalSheetSize;
      barraActual = barraProceso();

      barraActual.start(total, 0, {
        tabla: nombre,
        terminado: false,
      });
    }

    // Contador para saber en que fila de Excel estamos, útil para buscar errores directo en el Excel.
    numeroFila++;
    procesador(fila.formatted.obj, numeroFila);

    barraActual.update(fila.processedSheetSize, { terminado: false });
  });

  flujo.on('close', () => {
    barraActual.update(total, { terminado: true });
    barraActual.stop();
    fin();
  });
};