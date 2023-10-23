export default class {
  constructor() {

  }

  procesarMunicipios(fila: VariablesYa1_1, numeroFila: number) {
    const municipio = limpiarMunicipio(+fila.codmpio);
  
    // Si no existe el municipio
    if (municipio.hasOwnProperty('error')) {
      // El código de datos nacionales es 1001 entonces lo podemos comparar directo.
      if (fila.codmpio == 1001) {
        datosNacionales[fila.anno] = fila.tacued;
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
          if (!datosDepartamentos[fila.anno]) {
            datosDepartamentos[fila.anno] = [];
          }
  
          datosDepartamentos[fila.anno].push([(dep as Departamento)[0], fila.tacued]);
          return;
        } else {
          errata.push({ fila: numeroFila, error: `No existe departamento con código: ${codigoDep}` });
        }
      }
  
      // No pasó ninguna prueba, registrar en errata para revisar el caso.
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
        const yaExiste = datosDepartamentos[año] && datosDepartamentos[año].find(([codigo]) => codigo === codDep);
  
        if (yaExiste) {
          // Ya existen datos departamentales, no hacer nada.
        } else {
          // No hay datos de este departamento en la tabla original, procesarlos con los datos que tenemos de los municipios.
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
  }
  
  function procesarNacional() {
    for (const año in datosDepartamentos) {
      if (datosNacionales[año]) {
        // Ya existen datos a nivel nacional para este año
      } else {
        // No hay datos nacionales, sacarlos a partir de los datos departamentales.
        const datosAño = datosDepartamentos[año];
        const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);
  
        datosNacionales[año] = redondearDecimal(suma[1] / datosAño.length, 1, 2);
      }
    }
  }
}