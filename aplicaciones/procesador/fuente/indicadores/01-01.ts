import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type { Departamento, Errata, Municipio, RespuestaPorcentaje } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_1 = {
  codmpio: number;
  ano: number;
  tacued: number;
};

const errata: { fila: number; error: string }[] = [];

export default async () => {
  const datosMunicipios: RespuestaPorcentaje = {};
  const datosDepartamentos: RespuestaPorcentaje = {};

  await maquinaXlsx('1.1: salud - seguridad alimentaria', 'YA1_1.1', 'Sheet1', procesador);
  guardarJSON(datosMunicipios, 'ya1-1-mun');

  for (const año in datosMunicipios) {
    const datosAño = datosMunicipios[año];
    const deps: { [codDep: string]: number[] } = {};

    datosAño.forEach((municipio) => {
      const codDepartamento = municipio[0].slice(0, 2);

      if (!deps[codDepartamento]) {
        deps[codDepartamento] = [];
      }

      deps[codDepartamento].push(municipio[1]);
    });

    for (const codDep in deps) {
      const departamento = limpiarDepartamento(+codDep);

      if (departamento.hasOwnProperty('error')) {
        errata.push({ fila: Infinity, error: (departamento as Errata).mensaje });
      } else {
        if (!datosDepartamentos[año]) {
          datosDepartamentos[año] = [];
        }
        const suma = deps[codDep].reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
        const porcentaje = suma / deps[codDep].length;
        datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
      }
    }
  }

  guardarJSON(datosDepartamentos, 'ya1-1-dep');

  guardarJSON(errata, 'Errata YA1.1_mun');

  function procesador(fila: VariablesYa1_1, numeroFila: number) {
    const municipio = limpiarMunicipio(fila.codmpio);

    if (municipio.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
      return;
    }

    /** Procesar Municipio */
    const año = fila.ano;

    if (!datosMunicipios[año]) {
      datosMunicipios[año] = [];
    }

    if (fila.tacued) {
      datosMunicipios[año].push([(municipio as Municipio)[3], fila.tacued]);
    }
  }
};
