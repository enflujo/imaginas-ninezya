import { limpiarMunicipio } from '@/limpieza/lugar';
import type { Errata, Municipio } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_1 = {
  codmpio: number;
  ano: number;
  tacued: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  const respuesta: Cobertura = {};
  await maquinaXlsx('1.1: salud - seguridad alimentaria', 'YA1_1.1', 'Sheet1', procesador);
  guardarJSON(respuesta, 'ya1-1-mun');
  guardarJSON(errata, 'Errata YA1.1_mun');

  function procesador(fila: VariablesYa1_1, numeroFila: number) {
    const datos = limpiarMunicipio(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.tacued) {
      respuesta[año].push([(datos as Municipio)[3], fila.tacued]);
    }

    // console.log(departamentoLimpio);
  }
};
