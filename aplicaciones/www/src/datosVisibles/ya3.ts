import type { DatosYa } from '@/tipos';

export const ya3: DatosYa = {
  nombre: 'Educación preescolar, básica y media',
  imagen: 'ya3',
  ruta: 'educacion-preescolar-a-media',
  definicion:
    'Es crucial garantizar una educación de calidad en Colombia, superando barreras de inequidad desde el preescolar hasta la media. La presencia en la escuela no garantiza plenamente el derecho a la educación, y las inequidades arraigadas relacionadas con factores geográficos, socioeconómicos, étnicos y de género deben abordarse con enfoques multidimensionales. Atender a la infraestructura escolar y la formación docente es esencial para establecer un sistema educativo que promueva la igualdad, la transformación y la inclusión en todas las etapas.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Cobertura bruta media',
      ruta: 'cobertura-media',
      archivo: 'ya3-1',
      hay_datos: true,
      umbral: 83.6,
      explicacion: 'Indica la cobertura bruta de estudiantes que cursan educación media.',
      definicion: 'Indica la cobertura bruta de estudiantes que cursan educación media.',
      metodologia:
        'Número total de estudiantes matriculados y tienen entre 15 y 16 años de edad / Total de la población que tiene entre 15 y 16 años de edad en el mismo periodo y territorio. * 100.',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      desagregacion: 'Municipal',
      contexto: 'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda.',
      interpretacion:
        'Un valor de 50 indica que en promedio de cada 100 estudiantes en edad teórica para cursar educación media, asisten a un establecimiento educativo en un momento y territorio específicos. Más Información: https://ods.dnp.gov.co/es/objetivos/educacion-de-calidad',
    },
    {
      nombre: 'Resultados Pruebas Saber 11 matemáticas',
      ruta: 'saber11-matematicas',
      archivo: 'ya3-2',
      hay_datos: true,
      umbral: 71,
      explicacion:
        'Indica, en promedio, en qué categoría se encuentra el desempeño en matemáticas de los estudiantes que presentaron el Saber 11.',
      definicion: 'Mide el desempeño en promedio en el área de Matemáticas en las Prueba Saber 11.',
      metodologia:
        'Número Total de Evaluados en Cada Nivel de Desempeño en Matemáticas / Total de Evaluados en Matemáticas * 100 ***Los resultados individuales de la prueba Saber 11 (total y por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
      unidad: 'Porcentaje',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia, la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. Este examen, obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido. El gobierno colombiano administra pruebas en áreas clave como Matemáticas, Lectura crítica, Ciencias naturales, Sociales y ciudadanas, e Inglés para evaluar el desempeño académico de los estudiantes.',
      interpretacion:
        ' Los resultados de las pruebas se expresan en una escala de 0 a 100 puntos. El ICFES ha definido cuatro niveles de desempeño para las pruebas de Matemáticas: 1,2,3, y 4. Donde 1: Se limita a identificar las tareas demandadas. 2: Está en capacidad de diferenciar los procedimientos posibles para realizar las tareas requeridas. 3: Analiza procedimientos para desarrollar de la mejor manera la tarea solicitadaMás Información. 4:Está preparado para deducir y combinar procedimientos para realizar las tareas solicitadas. Los Rangos son los siguientes 1 (0 - 35)  2 (36 – 50) 3 (51 -70) 4 (71 - 100) Más Información: https://www.r4v.info/sites/default/files/2022-06/An%C3%A1lisis%20de%20brechas%20resultados%20escolares%20Pruebas%20Saber%2011%20-2020_compressed.pdf',
    },
    {
      nombre: 'Resultados Pruebas Saber 11 español',
      ruta: 'saber11-espanol',
      archivo: 'ya3-3',
      hay_datos: true,
      umbral: 71,
      explicacion: '',
      definicion: 'Mide el desempeño en promedio en el área de Lectura en la Prueba Saber 11.',
      metodologia:
        'Número Total de Evaluados en Cada Nivel de Desempeño en Lectura / Total de Evaluados en Lectura * 100 ***Los resultados individuales de la prueba Saber 11 (total y por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
      unidad: 'Porcentaje',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia, la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. Este examen, obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido. El gobierno colombiano administra pruebas en áreas clave como Matemáticas, Lectura crítica, Ciencias naturales, Sociales y ciudadanas, e Inglés para evaluar el desempeño académico de los estudiantes.',
      interpretacion:
        ' Los resultados de las pruebas se expresan en una escala de 0 a 100 puntos. El ICFES ha definido cuatro niveles de desempeño para las pruebas de Español: 1,2,3, y 4. Donde 1: Se limita a identificar las tareas demandadas. 2: Está en capacidad de diferenciar los procedimientos posibles para realizar las tareas requeridas. 3: Analiza procedimientos para desarrollar de la mejor manera la tarea solicitadaMás Información. 4:Está preparado para deducir y combinar procedimientos para realizar las tareas solicitadas. Los Rangos son los siguientes 1 (0 - 35)  2 (36 – 50) 3 (51 -70) 4 (71 - 100) Más Información: https://www.r4v.info/sites/default/files/2022-06/An%C3%A1lisis%20de%20brechas%20resultados%20escolares%20Pruebas%20Saber%2011%20-2020_compressed.pdf',
    },
    {
      nombre: 'Tasa de deserción',
      ruta: 'desercion',
      archivo: 'ya3-4',
      hay_datos: true,
      explicacion: 'Indica, en promedio, el número de estudiantes que abandonan el sistema educativo.',
      definicion: 'Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo.',
      metodologia:
        'Número Total de estudiantes que abandonaron el sistema educativo antes de finalizar el año lectivo / Total de estudiantes en el mismo periodo y territorio. *** La tasa de deserción intraanual solo tiene en cuenta a los alumnos que abandonan la escuela durante el año escolar, ésta se complementa con la tasa de deserción interanual que calcula aquellos que desertan al terminar el año escolar. (MEN, 2013, p. 72).',
      unidad: 'Porcentaje',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'La deserción escolar tiene un gran impacto en el desarrollo integral, y la formación del capital humano, comúnmente se asocia co factores clave como el género, las habilidades,  lascondiciones familiares, la calidad educativa y contexto. En respuesta, el Gobierno nacional, a través del Plan Nacional de Desarrollo 2018-2022, buscaba promover la permanencia en el sistema educativo mediante el fortalecimiento de trayectorias educativas completas, considerando aspectos como el bienestar, el reconocimiento de las características individuales, la alimentación escolar y  los ambientes de aprendizaje.',
      interpretacion:
        ' Un valor de 5% indica que 5 de cada 100 estudiantes abandonaron el sistema educativo antes de finalizar el año lectivo en un territorio y momentos específicos. Más Información: https://www.mineducacion.gov.co/1780/articles-363488_recurso_34.pdf',
    },
    {
      nombre: 'Tasa de repitencia',
      ruta: 'repitencia',
      archivo: 'ya3-5',
      hay_datos: true,
      umbral: 2.7,
      explicacion:
        'Indica, en promedio, el número de estudiantes que vuelven a cursar el mismo grado académico al no ser promovidos al siguiente.',
      definicion: 'Porcentaje de estudiantes que vuelven a cursar el grado cuando no han sido promovidos al siguiente.',
      metodologia:
        'Número Total de estudiantes que vuelven a cursar el grado cuando no han sido promovidos al siguiente / Total de estudiantes en el mismo periodo y territorio. * 100.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Observatorio de Trayectorias Educativas| Ministerio de Educación.',
      fuente_denominador: 'Observatorio de Trayectorias Educativas| Ministerio de Educación.',
      desagregacion: 'Municipal',
      contexto:
        'La repitencia se da cuando el estudiante, que no es promovido al grado siguiente, hace nuevamente el grado que estaba cursando o cuando ha dejado de estudiar durante un tiempo y regresa a la institución educativa con el fin de ponerse al día y repasar áreas que no recuerda u obtuvieron una evaluación muy baja, y voluntariamente decide hacer nuevamente el último grado cursado.',
      interpretacion:
        ' Un valor de 3% indica que 3 de cada 100 estudiantes vuelven a cursar el grado cuando no han sido promovidos al siguiente antes de finalizar el año lectivo en un territorio y momentos específicos. Más Información: https://lee.javeriana.edu.co/documents/5581483/7093554/INFORME-5-LEE-JAVERIANA-REPITENCIA-ESCOLAR-ANTES-DE-PANDEMIA.pdf',
    },
    {
      nombre: 'Tasa de cobertura bruta Primaria',
      ruta: 'cobertura-primaria',
      archivo: 'ya3-6',
      hay_datos: true,
      umbral: 83.6,
      explicacion: 'Indica la cobertura bruta de estudiantes que cursan educación media',
      definicion: 'Indica la cobertura bruta de estudiantes que cursan educación primaria.',
      metodologia:
        'Número total de estudiantes matriculados y tienen entre 6 y 10 años de edad / Total de la población que tiene entre 6 y 10 años de edad en el mismo periodo y territorio. * 100.',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
      desagregacion: 'Municipal',
      contexto: 'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda.',
      interpretacion:
        'Un valor de 40 indica que en promedio 40 de cada 100 estudiantes en edad teórica para cursar educación primaria asisten a un establecimiento educativo en un momento y territorio específicos. Más Información: https://ods.dnp.gov.co/es/objetivos/educacion-de-calidad',
    },
    {
      nombre:
        'Proporción de estudiantes en el sector oficial, con respecto al total de estudiantes en el mismo periodo y lugar',
      ruta: 'oficial-privado',
      archivo: 'ya3-7',
      hay_datos: true,
      explicacion: '',
      definicion: '',
      metodologia: '',
      unidad: '',
      fuente_numerador: '',
      fuente_denominador: '',
      desagregacion: '',
      contexto: '',
      interpretacion: '',
    },
  ],
};
