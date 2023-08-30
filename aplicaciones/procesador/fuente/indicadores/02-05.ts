import { limpiarDepartamento } from '@/limpieza/lugar';
import type { Departamento, Errata } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa2_5 = {
  departamento: string;
  codmpio: number;
  ano: number;
  cobertura_bruta: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  const respuesta: Cobertura = {};
  await maquinaXlsx('2.5: educación inicial - desnutrición aguda', 'YA2_2.5', 'Sheet1', procesador);
  guardarJSON(respuesta, 'ya2-5-dep');
  guardarJSON(errata, 'Errata YA2.5_dep');

  function procesador(fila: VariablesYa2_5, numeroFila: number) {
    const datos = limpiarDepartamento(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.cobertura_bruta) {
      respuesta[año].push([(datos as Departamento)[0], fila.cobertura_bruta]);
    }
  }
};
