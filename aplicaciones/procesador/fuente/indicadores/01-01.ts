import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type { Departamento, Errata, Municipio, RespuestaNacional, RespuestaPorcentaje } from '@/tipos';
import { guardarJSON, redondearDecimal } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesYa1_1 = {
  codmpio: number;
  anno: number;
  tacued: number;
};

const errata: { fila: number; error: string }[] = [];
const datosMunicipios: RespuestaPorcentaje = {};
const datosDepartamentos: RespuestaPorcentaje = {};
const datosNacionales: RespuestaNacional = {};

export default async () => {
  await maquinaXlsx('1.1: salud - seguridad alimentaria', 'YA1_1.1', 'Sheet1', procesarMunicipios);
  procesarDepartamentos();
  procesarNacional();
  guardarJSON(datosMunicipios, 'ya1-1-mun');
  guardarJSON(datosDepartamentos, 'ya1-1-dep');
  guardarJSON(datosNacionales, 'ya1-1-nal');
  guardarJSON(errata, 'Errata YA1.1_mun');
};

function procesarMunicipios(fila: VariablesYa1_1, numeroFila: number) {
  const municipio = limpiarMunicipio(fila.codmpio);

  if (municipio.hasOwnProperty('error')) {
    errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
    return;
  }

  const año = fila.anno;

  if (!datosMunicipios[año]) {
    datosMunicipios[año] = [];
  }

  if (fila.tacued) {
    datosMunicipios[año].push([(municipio as Municipio)[3], fila.tacued]);
  }
}

function procesarDepartamentos() {
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
        const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);

        datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
      }
    }
  }
}

function procesarNacional() {
  for (const año in datosDepartamentos) {
    const datosAño = datosDepartamentos[año];
    const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);

    datosNacionales[año] = redondearDecimal(suma[1] / datosAño.length, 1, 2);
  }
}
