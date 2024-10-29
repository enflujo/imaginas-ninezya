import type { DatosYa } from '../tipos/compartidos';

export const ya9: DatosYa = {
  nombre:
    'Adolescentes con justicia restaurativa y pedagógica (Sistema de Responsabilidad Penal para Adolescentes - SRPA)',
  imagen: 'ya9',
  ruta: 'justicia-restaurativa',
  definicion:
    'Es crucial que los 15.4 millones de menores en Colombia participen en la construcción de una cultura de paz tras el conflicto armado. Reconociendo sus experiencias y dándoles voz activa en el diseño de acciones para la reconciliación, la niñez desempeña un papel esencial. Los gobiernos locales, especialmente en los 170 municipios afectados por el conflicto, deben proporcionarles espacio, priorizando la restitución de derechos y el interés superior de la niñez según normativas nacionales e internacionales. **Los indicadores de este YA nunca fueron proporcionados por el ICBF.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Porcentaje de Adolescentes entre 14 y 17 años en el Sistema de Responsabilidad Penal Adolescente que ingresan al ICBF para los cuales se determina una medida privativa de la libertad',
      ruta: 'detencion-privativa',
      archivo: 'ya9-1',
      hay_datos: true,
      umbral: ,
      explicacion_umbral: 'No se define un umbral fijo; la meta se orienta hacia la mejora continua en la reducción del uso de medidas privativas de la libertad, en línea con los principios de los Objetivos de Desarrollo Sostenible (ODS) 16, que busca "Paz, justicia e instituciones sólidas." Este objetivo promueve sociedades pacíficas e inclusivas, acceso a la justicia para todos y la construcción de instituciones eficaces y responsables.',
      explicacion: 'El indicador mide la proporción de adolescentes en el SRPA que son sometidos a medidas de privación de libertad, lo que refleja un enfoque más punitivo en el sistema penal juvenil.',
      definicion: 'La tasa se calcula como el número de adolescentes con medida privativa de libertad en el SRPA (numerador), dividido por el total de ingresos al sistema (denominador), multiplicado por 100.',
      metodologia: 'No. de adolescentes que ingresan al SRPA con una medida privativa de la libertad / No. total de adolescentes que han ingresado al sistema SRPA en el mismo periodo y territorio. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto: 'El uso de medidas privativas de la libertad en adolescentes dentro del Sistema de Responsabilidad Penal Adolescente (SRPA) puede reflejar un enfoque más restrictivo y punitivo. Este tipo de medidas suelen reservarse para casos graves, pero su uso generalizado podría indicar una falta de alternativas efectivas para la rehabilitación y la reintegración social de los jóvenes.',
      interpretacion: 'Un valor del 70% indica que 70 de cada 100 adolescentes ingresan al SRPA con una medida privativa de libertad.',
    },
    {
      nombre: 'Porcentaje de Adolescentes entre 14 y 17 años en el Sistema de Responsabilidad Penal Adolescente que ingresan al ICBF para los cuales se determina una medida no privativa de la libertad',
      ruta: 'detencion-no-privativa',
      archivo: 'ya9-2',
      hay_datos: true,
      umbral: ,
      explicacion_umbral: 'No se define un umbral fijo; la meta se orienta hacia la mejora continua en la adopción de medidas alternativas a la privación de libertad, en línea con los principios de los Objetivos de Desarrollo Sostenible (ODS) 16, que busca "Paz, justicia e instituciones sólidas." Este objetivo promueve sociedades pacíficas e inclusivas, acceso a la justicia para todos y la construcción de instituciones eficaces y responsables.',
      explicacion: 'El indicador mide la proporción de adolescentes en el SRPA que no son sometidos a medidas de privación de libertad, lo que refleja un enfoque orientado a la rehabilitación y reintegración social de los jóvenes.',
      definicion: 'La tasa se calcula como el número de adolescentes con medida no privativa de libertad en el SRPA (numerador), dividido por el total de ingresos al sistema (denominador), multiplicado por 100.',
      metodologia: 'No. de adolescentes que ingresan al SRPA con una medida no privativa de la libertad / No. total de adolescentes que han ingresado al sistema SRPA en el mismo periodo y territorio. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto: 'El uso de medidas no privativas de la libertad en adolescentes dentro del Sistema de Responsabilidad Penal Adolescente (SRPA) es una práctica clave que puede indicar un enfoque centrado en la rehabilitación, la educación y el desarrollo social de los jóvenes, en lugar de optar por la detención o el encarcelamiento. Esto fomenta la reintegración y previene la estigmatización asociada con la privación de libertad.',
      interpretacion: 'Un valor del 80% indica que 80 de cada 100 adolescentes ingresan al SRPA sin una medida privativa de libertad, lo que refleja un enfoque hacia alternativas rehabilitadoras.',
    },
    {
      nombre: 'Porcentaje de niñas, niños y adolescentes (5-17 años) que ingresaron a Proceso de Restablecimiento de Derechos por Trabajo Infantil',
      ruta: 'trabajo-infantil',
      archivo: 'ya9-3',
      hay_datos: true,
      umbral: ,
      definicion:
        'Este indicador se refiere al porcentaje de niñas, niños y adolescentes que han ingresado a procesos administrativos de restablecimiento de derechos debido a ser víctimas de trabajo infantil. Estos procesos buscan garantizar la protección y recuperación de las víctimas, proporcionándoles acceso a apoyo integral, rehabilitación y prevención de futuros riesgos. Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia: 'No. total de casos de niñas y adolescentes víctimas de trabajo infantil que ingresaron a proceso administrativo de restablecimiento de derechos / No. total de niñas, niños y adolescentes ingresaron a proceso administrativo de restablecimiento de derechos en un periodo y territorios específicos. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto: 'Este indicador refleja la atención institucional y la respuesta a casos de violencia y trabajo infantil contra niñas, niños y adolescentes en procesos de protección de derechos en el país.',
      interpretacion:
        'Un valor del 20% indica que 20 de cada 100 niñas, niños y adolescentes ingresan al PARD por motivos de trabajo infantil en un momento y territorios específicos.',
    },
    {
      nombre: 'Porcentaje de niñas, niños y adolescentes (5-17 años) que ingresaron a Proceso de Restablecimiento de Derechos por Explotación Sexual Comercial',
      ruta: 'violencia-sexual-explotacion-comercial',
      archivo: 'ya9-3',
      hay_datos: true,
      umbral: ,
      definicion:
        'Este indicador se refiere al porcentaje de niñas, niños y adolescentes que han ingresado a procesos administrativos de restablecimiento de derechos debido a ser víctimas de explotación secual comercial. Estos procesos buscan garantizar la protección y recuperación de las víctimas, proporcionándoles acceso a apoyo integral, rehabilitación y prevención de futuros riesgos. Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal'
      metodologia: 'No. total de casos de niñas y adolescentes víctimas de explotación sexual comercial que ingresaron a proceso administrativo de restablecimiento de derechos / No. total de niñas, niños y adolescentes ingresaron a proceso administrativo de restablecimiento de derechos en un periodo y territorios específicos. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto: 'Este indicador refleja la atención institucional y respuesta a casos de violencia y explotación sexual contra niñas y adolescentes en procesos de protección de derechos en el país.'
      interpretacion:
        'Un valor del 15% indica que 15 de cada 100 niñas, niños y adolescentes ingresaron al PARD por motivos de explotación sexual comercial en un momento y territorios específicos.',

    },
  ],
};
