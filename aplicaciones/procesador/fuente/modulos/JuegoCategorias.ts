import { limpiarDepartamento, limpiarMunicipio } from '../limpieza/lugar';
import type {
  Departamento,
  Errata,
  RespuestaCategorias,
  RespuestaPorcentaje,
  VariableValorSingular,
  VariablesSingulares,
} from '@/tipos';
import { esNumero, guardarJSON, redondearDecimal } from '../utilidades/ayudas';
import maquinaXlsx from '../utilidades/maquinaXlsx';
import { DatosIndicadorNal, TiposEstructura } from '../../../../tipos/compartidos';

export default class {
  datosNacionales: DatosIndicadorNal;
  datosDepartamentos: RespuestaCategorias;
  datosMunicipios: RespuestaPorcentaje;
  errata: { fila: number; error: string }[];
  nombreVariableValor: VariableValorSingular;
  estructura: TiposEstructura;
  exportarMunicipios: boolean;

  constructor(
    nombreVariable: VariableValorSingular,
    ascendente: boolean,
    estructura: TiposEstructura,
    unidadMedida = 100
  ) {
    this.datosNacionales = {
      ascendente,
      estructura,
      unidadMedida,
      datos: {},
      categorias: {},
      datosMunicipio: true,
      maxNal: 0,
      minNal: Infinity,
      maxDep: 0,
      minDep: Infinity,
      maxMun: 0,
      minMun: Infinity,
    };
    this.errata = [];
    this.datosMunicipios = {};
    this.datosDepartamentos = {};
    this.nombreVariableValor = nombreVariable;
    this.estructura = estructura;
    this.exportarMunicipios = false;
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.procesarDepartamentos);
    this.procesarNacional();

    if (!this.exportarMunicipios) this.datosNacionales.datosMunicipio = false;
    guardarJSON(this.datosMunicipios, `${nombreParaArchivo}-mun`);
    guardarJSON(this.datosDepartamentos, `${nombreParaArchivo}-dep`);
    guardarJSON(this.datosNacionales, `${nombreParaArchivo}-nal`);

    if (this.errata.length) guardarJSON(this.errata, `Errata ${nombreParaArchivo}`);
  }

  validarValor(valor: number, numeroFila: number) {
    if (valor && isNaN(valor)) {
      this.errata.push({ fila: numeroFila, error: `el valor no es un número: ${valor}` });
      return false;
    }

    return true;
  }

  procesarDepartamentos = (fila: VariablesSingulares, numeroFila: number) => {
    const valor = fila[this.nombreVariableValor];
    const tieneValor = this.validarValor(valor, numeroFila);
    const departamento = limpiarDepartamento(+fila.coddepto);

    if (departamento.hasOwnProperty('error')) {
      this.errata.push({ fila: numeroFila, error: (departamento as Errata).mensaje });
      return;
    }

    if (!tieneValor) {
      this.errata.push({ fila: numeroFila, error: `La fila no tiene valor.` });
      return;
    }

    if (!fila.P51 || !esNumero(`${fila.P51}`)) {
      this.errata.push({
        fila: numeroFila,
        error: `No hay categoria P51 para el departamento ${fila.coddepto} en el año ${fila.anno}`,
      });
      return;
    }

    // Iniciar entradas para el año si aún no existe, empieza con una lista vacía.
    if (!this.datosDepartamentos[fila.anno]) {
      this.datosDepartamentos[fila.anno] = [];
    }

    const valorLimpio = redondearDecimal(valor, 1, 2);
    const codigoDep = (departamento as Departamento)[0];
    const existe = this.datosDepartamentos[fila.anno].find((lugar) => lugar[0] === codigoDep);
    const categoria = `c${fila.P51}`;
    const entrada: [lugar: string, { [categoria: string]: number }] = [codigoDep, {}];
    entrada[1][categoria] = valorLimpio;

    // Si no existe el lugar dentro de las entradas del año, crearlo.
    if (!existe) {
      this.datosDepartamentos[fila.anno].push(entrada);
    } else {
      existe[1][categoria] = valorLimpio;
    }
  };

  procesarNacional() {
    for (const año in this.datosDepartamentos) {
      const conteos: { [categoria: string]: number } = {};
      const datosAño = this.datosDepartamentos[año];
      const suma = datosAño.reduce(
        (acumulado, valorActual) => {
          for (const categoria in valorActual[1]) {
            if (!conteos[categoria]) {
              conteos[categoria] = 0;
            }

            if (!acumulado[1][categoria]) {
              acumulado[1][categoria] = 0;
            }

            acumulado[1][categoria] += valorActual[1][categoria];
            conteos[categoria]++;
          }

          return acumulado;
        },
        ['', {}]
      );

      const agregadoAño: { [categoria: string]: number } = {};

      for (const categoria in suma[1]) {
        agregadoAño[categoria] = redondearDecimal(suma[1][categoria] / conteos[categoria], 1, 2);
      }

      if (!this.datosNacionales.categorias) return;

      this.datosNacionales.categorias[año] = agregadoAño;

      // if (this.datosNacionales.datos[año]) {
      //   this.revisarMinMax(this.datosNacionales.datos[año] as number, 'maxNal', 'minNal');
      //   // Ya existen datos a nivel nacional para este año
      // } else {
      //   // No hay datos nacionales, sacarlos a partir de los datos departamentales.
      //   const datosAño = this.datosDepartamentos[año];
      //   const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);
      //   if (this.estructura === 'conteo') {
      //     this.revisarMinMax(suma[1], 'maxNal', 'minNal');
      //     this.datosNacionales.datos[año] = suma[1];
      //   } else {
      //     const porcentaje = redondearDecimal(suma[1] / datosAño.length, 1, 2);
      //     this.revisarMinMax(porcentaje, 'maxNal', 'minNal');
      //     this.datosNacionales.datos[año] = porcentaje;
      //   }
      // }
    }
  }

  revisarMinMax(valor: number, llaveMax: 'maxNal' | 'maxDep' | 'maxMun', llaveMin: 'minNal' | 'minDep' | 'minMun') {
    if (this.datosNacionales[llaveMax] < valor) {
      this.datosNacionales[llaveMax] = valor;
    }

    if (this.datosNacionales[llaveMin] > valor) {
      this.datosNacionales[llaveMin] = valor;
    }
  }
}
