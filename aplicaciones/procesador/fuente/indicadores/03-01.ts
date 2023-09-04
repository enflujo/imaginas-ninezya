// Tasa de Cobertura Bruta

import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type { Departamento, Errata, Municipio, RespuestaPorcentaje } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesSaberPlano = {
  ano: number;
  codmpio: number;
  cobertura_bruta: number;
};

const errata: { fila: number; error: string }[] = [];

export default async () => {
  const datosMunicipios: RespuestaPorcentaje = {};
  const datosDepartamentos: RespuestaPorcentaje = {};
  await maquinaXlsx('3.1: Edu - Cobertura', 'YA3_3.1', 'Sheet 1', procesador);
  guardarJSON(datosMunicipios, 'ya3-1-mun');

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

  guardarJSON(datosDepartamentos, 'ya3-1-dep');
  guardarJSON(errata, 'Errata YA3.1');

  function procesador(fila: VariablesSaberPlano, numeroFila: number) {
    const datos = limpiarMunicipio(fila.codmpio);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.ano;

    if (!datosMunicipios[año]) {
      datosMunicipios[año] = [];
    }

    if (fila.cobertura_bruta) {
      datosMunicipios[año].push([(datos as Municipio)[0], fila.cobertura_bruta]);
    }
  }
};
