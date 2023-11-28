import type { DatosYa } from '@/tipos';

export const ya9: DatosYa = {
  nombre:
    'Adolescentes con justicia restaurativa y pedagógica (sistema de responsabilidad penal para adolescentes - SRPA)',
  imagen: 'ya9',
  ruta: 'adolescentes-srpa',
  definicion:
    'Es crucial adoptar un enfoque pedagógico y restaurativo en el Sistema de Responsabilidad Penal para Adolescentes (SRPA) en Colombia. Aunque establecido para responder a estándares internacionales y a la Convención sobre los Derechos del Niño, es necesario garantizar un sistema que promueva la verdad, la justicia y el restablecimiento efectivo de los derechos de los adolescentes. El SRPA debe evolucionar para alinearse con principios pedagógicos y restaurativos, cumpliendo con el Estado social de derecho establecido en la Constitución Política de 1991.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'Porcentaje de adolescentes que ingresan más de una vez al SRPA por presunta comisión de un delito',
      ruta: 'adolescentes-reincidencia',
      archivo: 'ya9-1',
      hay_datos: true,
      explicacion: 'Indica el número de adolescentes que ingresaron al SRPA más de una vez.',
      definicion:
        'Indica el número de adolescentes que ingresan más de una vez al SRPA por la presunta comisión de un delito.',
      metodologia:
        'Número total del adolescentes que ingresan más de una vez al SRPA / Total de adolescentes en el mismo periodo y territorio * 100,000 adolescentes.',
      unidad: 'Por 100.000 adolescentes',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion:
        'Una razón de 3 significa que hubo 3 adolescentes que ingresaron más de una vez  por cada 100.000 adolescentes en un momento y territorio determinados.',
    },
    {
      nombre: 'Tiempo promedio que dura un adolescente o jóven en medida de internamiento preventivo',
      ruta: 'tiempo-promedio',
      archivo: 'ya9-2',
      hay_datos: true,
      explicacion: 'Indica el tiempo promedio que pasa un adolescente con medida de internamiento preventivo.',
      definicion:
        'Indica el tiempo promedio que pasa un adolescente con medida de internamiento preventivo hasta que se resuelve su situación.',
      metodologia: 'Se desconoce.',
      unidad: 'Se desconoce',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion: 'Se desconoce.',
    },
    {
      nombre: 'Número de casos abordados/finalizados en los Programas de Justicia Restaurativa del país',
      ruta: 'casos-justicia',
      archivo: 'ya9-3',
      hay_datos: true,
      explicacion: 'Indica el número de adolescentes que ingresaron al SRPA.',
      definicion: 'Indica el número de adolescentes que terminaron en programas de Justicias Restaurativa del País.',
      metodologia:
        'Número de adolescentes que terminaron en  Programas de Justicia Restaurativa del país / Número total de  adolescentes en el mismo periodo y territorio * 100.000 adolescentes.',
      unidad: 'Por 100.000 adolescentes',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion:
        'Una razón de 5 significa que hubo 5 adolescentes que terminaron en un programa de SRPA por cada 100.000 adolescentes en un momento y territorio determinados.',
    },
    {
      nombre: 'Adolescentes que se encuentran en Centros de Internamiento Preventivo con acceso a programas educativos',
      ruta: 'adolescentes-cae-cip',
      archivo: 'ya9-4',
      hay_datos: true,
      explicacion:
        'Indica la proporción de adolescentes que cuentan con una medida de aseguramiento y tienen acceso al sistema educativo.',
      definicion:
        'Indica la proporción de adolescentes que se encuentran en Centros de Internamiento Preventivo y tienen acceso al sistema educativo.',
      metodologia:
        'Número de adolescentes que se encuentran en Centros de Internamiento Preventivo y tienen acceso al sistema educativo / Número total de adolescentes en Centros de Internamiento Preventivo en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion:
        'Un valor de 40% indica que 40 de cada 100 adolescentes con medida de reclusión tienen acceso al sistema educativo en un momento y territorio determinados.',
    },
    {
      nombre: 'Adolescentes que se encuentran en Centros de Internamiento Preventivo con acceso a programas laborales',
      ruta: 'vinculacion-laboral',
      archivo: 'ya9-5',
      hay_datos: true,
      explicacion:
        'Indica la proporción de adolescentes que cuentan con una medida de aseguramiento y tienen una vinculación laboral.',
      definicion:
        'Indica la proporción de adolescentes que se encuentran en Centros de Internamiento Preventivo y tienen acceso a programas de trabajo por medio del proyecto sueños.',
      metodologia:
        'Número de adolescentes que se encuentran en Centros de Internamiento Preventivo y tienen acceso al proyecto sueños / Número total de adolescentes en Centros de Internamiento Preventivo en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion:
        'Un valor de 50% indica que 50 de cada 100 adolescentes con medida de reclusión tienen acceso al programa sueños en un momento y territorio determinados.',
    },
  ],
};
