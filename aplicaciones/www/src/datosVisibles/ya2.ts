import type { DatosYa } from '@/tipos';

export const ya2: DatosYa = {
  nombre: 'Educación inicial',
  imagen: 'ya2',
  ruta: 'educacion-inicial',
  definicion:
    'Es esencial garantizar el desarrollo integral de los niños en la primera infancia, con un enfoque destacado en la educación inicial según la Política de Estado de Cero a Siempre en Colombia. A pesar de avances legislativos, la disparidad persiste, ya que, de más de 4 millones de niños menores de 6 años, solo 1.2 millones tienen acceso a la educación inicial dentro de la atención integral. Obstáculos como la falta de instituciones cercanas, cupos limitados y requisitos de ingreso no cumplidos, especialmente en zonas rurales como la Orinoquía y la Amazonía, plantean desafíos. Superar estas barreras y aumentar la cobertura, especialmente en entornos rurales, es esencial para cumplir con la Política de Estado de Cero a Siempre, incluyendo la implementación efectiva de la ruta integral de atenciones.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten',
      ruta: 'menores-establecimiento',
      archivo: 'ya2-4',
      hay_datos: true,
      explicacion: 'Indica la proporción de estudiantes que asisten a instituciones públicas oficiales.',
      definicion:
        'Proporción de estudiantes en el sector oficial, con respecto al total de estudiantes en el mismo periodo y lugar.',
      metodologia:
        'Se desconoce, metodología propia del Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE).',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
      desagregacion: 'Municipal',
      contexto:
        'No hay un consenso sobre la proporción de estudiantes que deberían asistir a una institución educativa oficial o no oficial, ya que esto depende del contexto del sistema educativo y de la capacidad institucional de cada país.',
      interpretacion:
        'Un valor de 97% indica que 97 de cada 100 estudiantes asisten a un establecimiento educativo oficial en un momento y territorio específicos. Más Información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Cobertura bruta Transición',
      ruta: 'cobertura-transicion',
      archivo: 'ya2-5',
      hay_datos: true,
      umbral: 85.9,
      explicacion:
        'Indica la proporción de estudiantes que cursan preescolar y asisten a instituciones públicas oficiales.',
      definicion:
        ' La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados (independientemente de la edad que tengan) sobre el total de la población en edad teórica para cursar el nivel educativo, que para el caso de educación preescolar corresponde al rango entre 3 y 5 años de edad.',
      metodologia:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados (independientemente de la edad que tengan) sobre el total de la población en edad teórica para cursar el nivel educativo, que para el caso de educación preescolar corresponde al rango entre 3 y 5 años de edad.',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. No existe un consenso sobre la proporción de estudiantes que asistirn a una institución educativa en particular, ya que esto se acota al contexto en términos de infraestructura y capacidad institucional con la que cuenta cada país.',
      interpretacion:
        'Un valor de 97% indica que 97 de cada 100 estudiantes que cursan en preescolar asisten a un establecimiento educativo oficial en un momento y territorio específicos. Más Información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Estudiantes preescolar por tipo de establecimiento',
      ruta: 'preescolar',
      archivo: 'ya2-6',
      hay_datos: true,
      explicacion:
        'Indica la proporción de estudiantes que cursan preescolar y asisten a instituciones públicas oficiales.',
      definicion:
        ' La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados (independientemente de la edad que tengan) sobre el total de la población en edad teórica para cursar el nivel educativo, que para el caso de educación preescolar corresponde al rango entre 3 y 5 años de edad.',
      metodologia: 'Ministerio de Educación Nacional (MEN) - SIMAT.',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. No existe un consenso sobre la proporción de estudiantes que asistirn a una institución educativa en particular, ya que esto se acota al contexto en términos de infraestructura y capacidad institucional con la que cuenta cada país.',
      interpretacion:
        'Un valor de 97% indica que 97 de cada 100 estudiantes que cursan en preescolar asisten a un establecimiento educativo oficial en un momento y territorio específicos. Más Información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Estudiantes primaria por tipo de establecimiento',
      ruta: 'primaria',
      archivo: 'ya2-7',
      hay_datos: true,
      explicacion:
        'Indica la proporción de estudiantes que cursan primaria y asisten a instituciones públicas oficiales.',
      definicion:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados, sobre el total de la población en edad teórica para cursar el nivel educativo.',
      metodologia:
        'Número total de estudiantes matriculados que tienen entre 6 y 10 años de edad y asisten a instituciones oficiales / Total de la población entre 6 y 10 años de edad en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. No hay un consenso sobre la proporción de estudiantes que deberían asistir a una institución educativa oficial o no oficial, ya que esto depende del contexto del sistema educativo y de la capacidad institucional de cada país.',
      interpretacion:
        'Un valor de 65% indica que 65 de cada 100 estudiantes que cursan primaria asisten a un establecimiento educativo oficial en un momento y territorio específicos. Más Información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Hostigamiento a la población civil',
      ruta: 'hostigamiento',
      archivo: 'ya2-8',
      hay_datos: true,
      explicacion: 'Indica el número total de actos terroristas.',
      definicion:
        'Este indicar presenta un conteo del número de actos terroristas, hostigamientos, combates y enfrentamientos en un mismo periodo y territorio en particular.',
      metodologia:
        'Total = Suma(Número de Actos Terroristas, Atentados, Combates, Enfrentamientos, Declaraciones de Hostigamientos).',
      unidad: 'Conteo',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE)  con base en el Registro Único de Víctimas.',
      fuente_denominador: 'No aplica',
      desagregacion: 'Municipal',
      contexto:
        'Sánchez et al., (2005) han estudiando los efectos del conflicto armado en el desarrollo social colombiano, los autores muestran como los actos terroristas están relacionados con un bajo desempeño en el aula y por consiguiente en el constructo de herramientas que alimentan la formación de capital humano.',
      interpretacion:
        'Un valor de 20 índica que en un mismo periodo y territorio en particular se presentaron 20 ataques armados a la población civil* El indicador no pondera un peso en particular en función de la categoría que integran el agregado de "Ataques Armados".',
    },
    {
      nombre: 'Número de incidentes con artefactos explosivos',
      ruta: 'explosivos',
      archivo: 'ya2-9',
      hay_datos: true,
      explicacion: 'Indica el número total de ocurrencias con artefactos explosivos.',
      definicion:
        'Este indicar presenta un conteo del número de ocurrencias terroristas con artefactos explosivos en un mismo periodo y territorio en particular. * Contemplar Población Civil y personal de la Fuerza Pública',
      metodologia: 'Total = Suma(Artefactos Explosivos, Munición, Minas Antipersonales).',
      unidad: 'Conteo',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE)  con base en el Registro Único de Víctimas.',
      fuente_denominador: 'No aplica',
      desagregacion: 'Municipal',
      contexto:
        'Arias et al., (214) han estudiando los efectos del conflicto armado en el desarrollo económico y social en Colombia, de acuerdo con los autores el conflicto armad ha tenido efectos devastadores en el sistema educativo del país. Las instituciones educativas, tanto oficiales como no oficiales, han enfrentado numerosos desafíos debido a la violencia y la inestabilidad asociadas con el conflicto. Muchas escuelas han sido afectadas directamente, ya sea por actos de violencia que las han dejado inoperables o por la desaparición de recursos esenciales. Además, el desplazamiento forzado de comunidades enteras ha tenido un impacto directo en la tasa de matricula y la asistencia escolar, ya que muchos niños y jóvenes se han visto obligados a abandonar sus hogares y, en consecuencia, sus estudios. Este entorno de conflicto también ha llevado a la pérdida de maestros capacitados, ya sea porque han sido desplazados o han abandonado sus roles por motivos de seguridad.',
      interpretacion:
        'Un valor de 15 índica que en un mismo periodo y territorio en particular se presentaron 15 ocurrencias con artefactos explosivos* El no pondera un peso en particular en función de la categoría que integran el agregado de "Artefactos Explosivos".',
    },
  ],
};
