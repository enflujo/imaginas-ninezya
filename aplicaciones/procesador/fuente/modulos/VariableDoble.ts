import { limpiarDepartamento, limpiarMunicipio } from '../limpieza/lugar';
import type {
  Departamento,
  Errata,
  Municipio,
  RespuestaPorcentaje2,
  VariableDoble,
  VariableValorSingular,
} from '@/tipos';
import { esNumero, guardarJSON, redondearDecimal } from '../utilidades/ayudas';
import maquinaXlsx from '../utilidades/maquinaXlsx';
import { departamentos } from '../utilidades/lugaresColombia';
import { DatosIndicadorNal, TiposEstructura } from '../../../../tipos/compartidos';

export default class {
  datosNacionales: DatosIndicadorNal;
  datosDepartamentos: RespuestaPorcentaje2;
  datosMunicipios: RespuestaPorcentaje2;
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
    this.exportarMunicipios = true;
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.procesarMunicipios);
    this.procesarDepartamentos();
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

  procesarMunicipios = (fila: VariableDoble, numeroFila: number) => {
    const valor = fila['#_estudiantes'];
    const categoria = fila.sector;

    if (fila.hasOwnProperty('codmpio')) {
      const municipio = limpiarMunicipio(+fila.codmpio);
      const tieneValor = this.validarValor(valor, numeroFila);
      if (!tieneValor) return;

      // Si no existe el municipio
      if (municipio.hasOwnProperty('error') && valor) {
        // El código de datos nacionales es 1001 entonces lo podemos comparar directo.
        if (fila.codmpio == 1001) {
          this.datosNacionales.datos[fila.anno] = valor;
          return;
        }
        // Si termina en 00 y no lo encontró antes significa que es el dato del departamento.
        // else if (`${fila.codmpio}`.slice(-2) === '00') {
        //   // Poner ceros al principio y convertir a texto para que quede bien al comparar con código departamento.
        //   const codigoCompleto = `${fila.codmpio}`.padStart(5, '0');
        //   const codigoDep = codigoCompleto.slice(0, 2); // sacar los primeros dos números.
        //   const dep = departamentos.datos.find((obj) => obj[0] === codigoDep); // buscar el departamento.

        //   // agregar datos del departamento si existen.
        //   if (dep) {
        //     if (!this.datosDepartamentos[fila.anno]) {
        //       this.datosDepartamentos[fila.anno] = [];
        //     }

        //     this.datosDepartamentos[fila.anno].push([(dep as Departamento)[0], valor]);
        //     return;
        //   } else {
        //     this.errata.push({ fila: numeroFila, error: `No existe departamento con código: ${codigoDep}` });
        //   }
        // }

        // No pasó ninguna prueba, registrar en errata para revisar el caso.
        this.errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
        return;
      }

      this.registrarAño(numeroFila, fila.anno, { datos: municipio, valor, categoria });
    } else {
      // if (fila.hasOwnProperty('coddepto') && fila.coddepto) {
      //   const departamento = limpiarDepartamento(+fila.coddepto);
      //   const tieneValor = this.validarValor(valor, numeroFila);
      //   if (!tieneValor) return;
      //   this.revisarMinMax(valor, 'maxDep', 'minDep');
      //   this.exportarMunicipios = false;
      //   this.registrarAño(numeroFila, fila.anno, null, { datos: departamento, valor });
      // } else {
      //   this.errata.push({ fila: numeroFila, error: `No hay valor en coddepto` });
      // }
    }
  };

  procesarDepartamentos() {
    if (this.exportarMunicipios) {
      for (const año in this.datosMunicipios) {
        const datosAño = this.datosMunicipios[año];
        const deps: { [codDep: string]: [total: number, noOficial: number, oficial: number][] } = {};

        datosAño.forEach((municipio) => {
          const codDepartamento = municipio[0].slice(0, 2);
          if (!deps[codDepartamento]) {
            deps[codDepartamento] = [];
          }

          deps[codDepartamento].push([municipio[1], municipio[2], municipio[3]]);
        });

        for (const codDep in deps) {
          const yaExiste =
            this.datosDepartamentos[año] && this.datosDepartamentos[año].find(([codigo]) => codigo === codDep);

          if (yaExiste) {
            // Ya existen datos departamentales, no hacer nada.
          } else {
            // No hay datos de este departamento en la tabla original, procesarlos con los datos que tenemos de los municipios.
            const departamento = limpiarDepartamento(+codDep);

            if (departamento.hasOwnProperty('error')) {
              this.errata.push({ fila: Infinity, error: (departamento as Errata).mensaje });
            } else {
              if (!this.datosDepartamentos[año]) {
                this.datosDepartamentos[año] = [];
              }

              const suma = deps[codDep].reduce(
                (valorAnterior, valorActual) => [
                  valorAnterior[0] + valorActual[0],
                  valorAnterior[1] + valorActual[1],
                  valorAnterior[2] + valorActual[2],
                ],
                [0, 0, 0]
              );
              if (this.estructura === 'conteo') {
                this.revisarMinMax(suma[0], 'maxDep', 'minDep');
                this.datosDepartamentos[año].push([(departamento as Departamento)[0], suma[0], suma[1], suma[2]]);
              } else {
                // const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);
                // this.revisarMinMax(porcentaje, 'maxDep', 'minDep');
                // this.datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
              }
            }
          }
        }
      }
    }
  }

  procesarNacional() {
    for (const año in this.datosDepartamentos) {
      if (this.datosNacionales.datos[año]) {
        this.revisarMinMax(this.datosNacionales.datos[año] as number, 'maxNal', 'minNal');
        // Ya existen datos a nivel nacional para este año
      } else {
        // No hay datos nacionales, sacarlos a partir de los datos departamentales.
        const datosAño = this.datosDepartamentos[año];
        const suma = datosAño.reduce(
          (depAnterior, valorActual) => [
            '',
            depAnterior[1] + valorActual[1],
            depAnterior[2] + valorActual[2],
            depAnterior[3] + valorActual[3],
          ],
          ['', 0, 0, 0]
        );

        if (this.estructura === 'conteo') {
          this.revisarMinMax(suma[1], 'maxNal', 'minNal');
          this.datosNacionales.datos[año] = [suma[1], suma[2], suma[3]];
        } else {
          // const porcentaje = redondearDecimal(suma[1] / datosAño.length, 1, 2);
          // this.revisarMinMax(porcentaje, 'maxNal', 'minNal');
          // this.datosNacionales.datos[año] = porcentaje;
        }
      }
    }
  }

  registrarAño(
    numeroFila: number,
    año: number | string,
    municipio: { datos: Municipio | Errata; valor?: number; categoria?: string } | null,
    departamento?: { datos: Departamento | Errata; valor?: number; categoria?: string }
  ) {
    if (año) {
      if (esNumero(`${año}`)) {
        const indice = parseInt(`${año}`.replace(',', ''));

        if (!indice) {
          console.log(año, indice, parseInt(`${año}`), esNumero(`${año}`));
        }

        if (!this.datosMunicipios[indice]) {
          this.datosMunicipios[indice] = [];
        }

        if (!this.exportarMunicipios) {
          if (!this.datosDepartamentos[indice]) {
            this.datosDepartamentos[indice] = [];
          }
        }

        if (municipio && municipio.valor) {
          const codMunicipio = (municipio.datos as Municipio)[3];
          let existe = this.datosMunicipios[indice].find(([lugar]) => lugar === codMunicipio);

          if (!existe) {
            existe = [(municipio.datos as Municipio)[3], 0, 0, 0];

            if (municipio.categoria && municipio.categoria === 'NO_OFICIAL') {
              existe[3] = redondearDecimal(municipio.valor, 1, 2);
            } else if (municipio.categoria && municipio.categoria === 'OFICIAL') {
              existe[2] = redondearDecimal(municipio.valor, 1, 2);
            }

            existe[1] = existe[3] + existe[2];
            this.revisarMinMax(existe[1], 'maxMun', 'minMun');

            this.datosMunicipios[indice].push(existe);
          } else {
            if (municipio.categoria && municipio.categoria === 'NO_OFICIAL') {
              existe[3] = redondearDecimal(municipio.valor, 1, 2);
            } else if (municipio.categoria && municipio.categoria === 'OFICIAL') {
              existe[2] = redondearDecimal(municipio.valor, 1, 2);
            }

            existe[1] = existe[3] + existe[2];

            this.revisarMinMax(existe[1], 'maxMun', 'minMun');
          }
        }

        if (departamento && departamento.valor) {
          // this.datosDepartamentos[indice].push([
          //   (departamento.datos as Departamento)[0],
          //   redondearDecimal(departamento.valor, 1, 2),
          // ]);
        }
      } else {
        this.errata.push({ fila: numeroFila, error: `El año ${año} no es número.` });
      }
    } else {
      this.errata.push({ fila: numeroFila, error: `No hay año en esta fila, sino ${año}` });
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
