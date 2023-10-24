import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type {
  Departamento,
  Errata,
  Municipio,
  RespuestaNacional,
  RespuestaPorcentaje,
  VariableValorSingular,
  VariablesSingulares,
} from '@/tipos';
import { guardarJSON, redondearDecimal } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';
import { departamentos } from '@/utilidades/lugaresColombia';

export default class {
  datosNacionales: RespuestaNacional;
  datosDepartamentos: RespuestaPorcentaje;
  datosMunicipios: RespuestaPorcentaje;
  errata: { fila: number; error: string }[];
  nombreVariableValor: VariableValorSingular;

  constructor(nombreVariable: VariableValorSingular, ascendente: boolean) {
    this.datosNacionales = { ascendente, datos: {} };
    this.errata = [];
    this.datosMunicipios = {};
    this.datosDepartamentos = {};
    this.nombreVariableValor = nombreVariable;
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.procesarMunicipios);
    this.procesarDepartamentos();
    this.procesarNacional();
    guardarJSON(this.datosMunicipios, `${nombreParaArchivo}-mun`);
    guardarJSON(this.datosDepartamentos, `${nombreParaArchivo}-dep`);
    guardarJSON(this.datosNacionales, `${nombreParaArchivo}-nal`);
    guardarJSON(this.errata, `Errata ${nombreParaArchivo}`);
  }

  procesarMunicipios = (fila: VariablesSingulares, numeroFila: number) => {
    const municipio = limpiarMunicipio(+fila.codmpio);
    const valor = fila[this.nombreVariableValor];

    if (valor && isNaN(valor)) {
      this.errata.push({ fila: numeroFila, error: `el valor no es un número: ${valor}` });
      return;
    }
    // Si no existe el municipio
    if (municipio.hasOwnProperty('error') && valor) {
      // El código de datos nacionales es 1001 entonces lo podemos comparar directo.
      if (fila.codmpio == 1001) {
        this.datosNacionales.datos[fila.anno] = valor;
        return;
      }
      // Si termina en 00 y no lo encontró antes significa que es el dato del departamento.
      else if (`${fila.codmpio}`.slice(-2) === '00') {
        // Poner ceros al principio y convertir a texto para que quede bien al comparar con codigo departamento.
        const codigoCompleto = `${fila.codmpio}`.padStart(5, '0');
        const codigoDep = codigoCompleto.slice(0, 2); // sacar los primeros dos números.
        const dep = departamentos.datos.find((obj) => obj[0] === codigoDep); // buscar el departamento.

        // agregar datos del departamento si existen.
        if (dep) {
          if (!this.datosDepartamentos[fila.anno]) {
            this.datosDepartamentos[fila.anno] = [];
          }

          this.datosDepartamentos[fila.anno].push([(dep as Departamento)[0], valor]);
          return;
        } else {
          this.errata.push({ fila: numeroFila, error: `No existe departamento con código: ${codigoDep}` });
        }
      }

      // No pasó ninguna prueba, registrar en errata para revisar el caso.
      this.errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
      return;
    }

    const año = fila.anno;

    if (!this.datosMunicipios[año]) {
      this.datosMunicipios[año] = [];
    }

    if (valor) {
      this.datosMunicipios[año].push([(municipio as Municipio)[3], valor]);
    }
  };

  procesarDepartamentos() {
    for (const año in this.datosMunicipios) {
      const datosAño = this.datosMunicipios[año];
      const deps: { [codDep: string]: number[] } = {};
      datosAño.forEach((municipio) => {
        const codDepartamento = municipio[0].slice(0, 2);
        if (!deps[codDepartamento]) {
          deps[codDepartamento] = [];
        }
        deps[codDepartamento].push(municipio[1]);
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
            const suma = deps[codDep].reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
            const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);

            this.datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
          }
        }
      }
    }
  }

  procesarNacional() {
    for (const año in this.datosDepartamentos) {
      if (this.datosNacionales.datos[año]) {
        // Ya existen datos a nivel nacional para este año
      } else {
        // No hay datos nacionales, sacarlos a partir de los datos departamentales.
        const datosAño = this.datosDepartamentos[año];
        const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);

        this.datosNacionales.datos[año] = redondearDecimal(suma[1] / datosAño.length, 1, 2);
      }
    }
  }
}
