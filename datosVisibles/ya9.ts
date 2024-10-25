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
      nombre: 'Número de casos abordados o finalizados en los Programas de Justicia Restaurativa del País',
      ruta: 'justicia-restaurativa',
      archivo: 'ya9-3',
      hay_datos: true,
      definicion:
        'Se refiere a la cantidad total de casos que han sido tratados o concluidos dentro de los programas de justicia restaurativa a nivel nacional. La justicia restaurativa es un enfoque no convencional que busca resolver conflictos y delitos mediante la reconciliación y la reparación, priorizando la restauración de relaciones en las comunidades, a través de intervenciones directas. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia: 'Número total de casos abordados o finalizados en un mismo periodo y territorios específicos.',
      unidad: 'Conteo',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador cuantifica el número de casos de SRPA que han sido tratados o concluidos a través de los programas de justicia restaurativa a nivel nacional. Aquí hay algunas consideraciones para la interpretación: <br/><br/>Alto Número: Un alto número de casos abordados o finalizados podría interpretarse como una mayor utilización y eficacia de los programas de justicia restaurativa en el país. Indicaría que un gran número de casos ha pasado por estos programas y ha llegado a una resolución mediante enfoques restaurativos. <br/><br/>Bajo Número: Un bajo número podría sugerir una menor participación o implementación limitada de programas de justicia restaurativa. Podría indicar la necesidad de aumentar la conciencia sobre estos programas o mejorar su accesibilidad y aceptación. <br/><br/>Tendencia a lo largo del tiempo: Observar cómo cambia el número de casos abordados o finalizados a lo largo del tiempo proporcionará información sobre la evolución y efectividad de los programas de justicia restaurativa en el país. La interpretación depende de la comparación con otros periodos de tiempo, las metas establecidas, y el contexto del sistema de justicia restaurativa en el país.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
    {
      nombre:
        'Porcentaje de adolescentes o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo con acceso al sistema educativo.',
      ruta: 'cae-acceso-educativo',
      archivo: 'ya9-4',
      hay_datos: true,
      definicion:
        'Se refiere a la proporción de adolescentes y/o jóvenes que se encuentran en instalaciones como Centros de Atención Especializada y Centros de Internamiento Preventivo y que tienen acceso al sistema educativo. En otras palabras, mide la cantidad de jóvenes en centros especializados o de internamiento preventivo que participan en programas educativos en relación con el total de jóvenes en esas instalaciones. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'Número de Adolescentes o Jóvenes con Acceso Educativo / Número Total de Adolescentes o Jóvenes en Centros en un mismo periodo y territorio específicos * 100',
      unidad: 'Porcentaje',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe evaluar el porcentaje obtenido a partir de la fórmula proporcionada. <br/><br/>Alto Porcentaje: Un porcentaje elevado indica que una proporción significativa de los adolescentes o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo tiene acceso al sistema educativo. Esto sugiere que se están implementando medidas exitosas para proporcionar oportunidades educativas dentro de estas instalaciones. <br/><br/>Bajo Porcentaje: Un porcentaje más bajo indica que una proporción menor de los jóvenes en estas instalaciones tiene acceso al sistema educativo. Esto podría señalar la necesidad de mejorar y expandir programas educativos dentro de los centros para brindar más oportunidades de aprendizaje a los jóvenes. <br/><br/>La interpretación precisa también debe considerar el contexto, los objetivos y las metas específicas del sistema de justicia juvenil y educativo en el país o región. Además, el seguimiento del indicador a lo largo del tiempo puede proporcionar información sobre tendencias y cambios en el acceso a la educación para este grupo de población.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
    {
      nombre: 'Porcentaje de jóvenes del SRPA que participan en algún programa para la vinculación laboral',
      ruta: 'vinculacion-laboral',
      archivo: 'ya9-5',
      hay_datos: false,
      definicion:
        'Se refiere a la proporción de jóvenes que están bajo la jurisdicción del Sistema de Responsabilidad Penal Adolescente (SRPA) y que están participando en algún programa diseñado para facilitar su inserción o vinculación al ámbito laboral. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'Número de Jóvenes del SRPA en Programas Laborales / Número Total de Jóvenes del SRPA en un mismo periodo y territorios específicos * 100',
      unidad: 'Porcentaje',
      desagregacion: 'Municipal',
      interpretacion:
        'Implica entender la proporción de jóvenes bajo el Sistema de Responsabilidad Penal Adolescente (SRPA) que están participando en programas específicos diseñados para facilitar su inserción en el ámbito laboral. <br/><br/>Alto Porcentaje: Un porcentaje elevado indica que una proporción significativa de jóvenes del SRPA está participando activamente en programas para la vinculación laboral. Esto podría interpretarse como una señal positiva de que el sistema está proporcionando oportunidades efectivas para preparar a estos jóvenes para el empleo. <br/><br/>Bajo Porcentaje: Un porcentaje más bajo sugiere que una proporción menor de jóvenes del SRPA está participando en programas de vinculación laboral. Esto podría indicar la necesidad de mejorar y expandir programas que faciliten la integración laboral para estos jóvenes. <br/><br/>La interpretación precisa también debe considerar el contexto y los objetivos específicos del sistema de justicia juvenil, así como las metas establecidas en términos de vinculación laboral. Además, monitorear este indicador a lo largo del tiempo puede proporcionar información sobre cambios en la participación y la efectividad de los programas de vinculación laboral para los jóvenes del SRPA.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
  ],
};
