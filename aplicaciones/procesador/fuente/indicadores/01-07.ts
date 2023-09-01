import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type { Departamento, Errata, Municipio } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';
/**
 * Los datos no tienen denominador
 */
export type VariablesYa1_7 = {
  codmpio: number;
  ano: number;
  naci_bajopeso: number;
};

type Respuesta = {
  [año: string]: [lugar: string, porcentaje: number][];
};
const errata: { fila: number; error: string }[] = [];

export default async () => {
  const datosMunicipios: Respuesta = {};
  await maquinaXlsx('1.7: salud - bajo peso al nacer', 'YA1_1.7', 'Sheet1', procesador);
  guardarJSON(datosMunicipios, 'ya1-7-mun');
  guardarJSON(errata, 'Errata YA1.7_dep');

  function procesador(fila: VariablesYa1_7, numeroFila: number) {
    const datos = limpiarMunicipio(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!datosMunicipios[año]) {
      datosMunicipios[año] = [];
    }

    if (fila.naci_bajopeso) {
      datosMunicipios[año].push([(datos as Municipio)[0], fila.naci_bajopeso]);
    }
  }
};
