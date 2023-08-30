import { limpiarDepartamento } from '@/limpieza/lugar';
import type { Departamento, Errata } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_4 = {
  dep: string;
  codmpio: number;
  ano: number;
  control_prenatal: number;
};

type Cobertura = {
  [año: string]: [departamento: string, total: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  const respuesta: Cobertura = {};
  await maquinaXlsx('1.4: salud - control prenatal', 'YA1_1.4', 'Sheet1', procesador);
  guardarJSON(respuesta, 'ya1-4-dep');
  guardarJSON(errata, 'Errata YA1.4_dep');

  function procesador(fila: VariablesYa1_4, numeroFila: number) {
    const datos = limpiarDepartamento(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.control_prenatal) {
      respuesta[año].push([(datos as Departamento)[0], fila.control_prenatal]);
    }
  }
};
