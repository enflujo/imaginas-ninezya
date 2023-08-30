import { limpiarDepartamento } from '@/limpieza/lugar';
import type { Departamento, Errata } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_6 = {
  departamento: string;
  codmpio: number;
  ano: number;
  desnutricion: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  const respuesta: Cobertura = {};
  await maquinaXlsx('1.6: salud - desnutrición aguda', 'YA1_1.6', 'Sheet1', procesador);
  guardarJSON(respuesta, 'ya1-6-dep');
  guardarJSON(errata, 'Errata YA1.6_dep');

  function procesador(fila: VariablesYa1_6, numeroFila: number) {
    const datos = limpiarDepartamento(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.desnutricion) {
      respuesta[año].push([(datos as Departamento)[0], fila.desnutricion]);
    }
  }
};
