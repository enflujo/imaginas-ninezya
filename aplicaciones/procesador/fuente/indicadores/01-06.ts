import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type { Departamento, Errata } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_6 = {
  codmpio_num: string;
  num_2015: number;
  num_2017: number;
  num_2018: number;
  num_2019: number;
  num_2020: number;
  codmpio_den: string;
  den_2015: number;
  den_2017: number;
  den_2018: number;
  den_2019: number;
  den_2020: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  // const respuesta: Cobertura = {};
  // const numerador = [];
  // const denominador: [];
  // await maquinaXlsx('1.6: salud - desnutrición aguda', 'YA1_1.6', 'Sheet1', procesador);
  // guardarJSON(respuesta, 'ya1-6-dep');
  // guardarJSON(errata, 'Errata YA1.6_dep');
  // function procesador(fila: VariablesYa1_6, numeroFila: number) {
  //   const datosMunicipio = limpiarMunicipio(+fila.codmpio_den.split(' - ')[0]);
  //   const años = [2015, 2017, 2018, 2019, 2020];
  //   if (datosMunicipio.hasOwnProperty('error')) {
  //     errata.push({ fila: numeroFila, error: (datosMunicipio as Errata).mensaje });
  //     return;
  //   }
  //   años.forEach(año => {
  //     const variable = `den_${año}`
  //     const den = fila[variable as keyof VariablesYa1_6];
  //   })
  //   const año = fila.ano;
  //   if (!respuesta[año]) {
  //     respuesta[año] = [];
  //   }
  //   if (fila.desnutricion) {
  //     respuesta[año].push([(datos as Departamento)[0], fila.desnutricion]);
  //   }
  // }
};
