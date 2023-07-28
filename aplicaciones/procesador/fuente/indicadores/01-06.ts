import { limpiarMunicipio } from '@/limpieza/lugar';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_1 = {
  codmpio: number;
  ano: number;
  desnutricion: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};

export default async () => {
  maquinaXlsx('1.6: salud - desnutrición aguda', 'YA1_1.6', 'Sheet1', procesador, fin);
  const respuesta: Cobertura = {};

  function procesador(fila: VariablesYa1_1) {
    const datos = limpiarMunicipio(fila.codmpio);
    if (!datos) return;
    const año = fila.ano;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.desnutricion) {
      respuesta[año].push([datos[3], fila.desnutricion]);
    }

    // console.log(departamentoLimpio);
  }

  function fin() {
    guardarJSON(respuesta, 'salud-1-1-mun');
  }
};
