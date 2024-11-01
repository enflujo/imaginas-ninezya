import type { DatosYa } from '../tipos/compartidos';

export const ya3: DatosYa = {
  nombre: 'Educación básica y media',
  imagen: 'ya3',
  ruta: 'educacion-basica-y-media',
  definicion:
    'La educación básica y media en Colombia enfrenta un desafío crucial: garantizar una educación de calidad que supere las barreras de inequidad que persisten en todos los niveles del sistema. A pesar de que la asistencia escolar ha mejorado en términos de cobertura, este aspecto no se traduce necesariamente en el pleno ejercicio del derecho a la educación, ya que siguen existiendo profundas desigualdades relacionadas con factores geográficos, socioeconómicos, étnicos y de género. La Organización para la Cooperación y el Desarrollo Económicos (OCDE) subraya que las disparidades en el rendimiento académico entre estudiantes de distintos contextos socioeconómicos son alarmantemente significativas, lo que pone de manifiesto la urgencia de actuar. Para abordar estas desigualdades estructurales, es indispensable implementar enfoques multidimensionales que reflejen la diversidad de realidades enfrentadas por los estudiantes colombianos. Esto incluye no solo la mejora de la infraestructura escolar, sino también el fortalecimiento de la formación docente, con el fin de establecer un sistema educativo que promueva la igualdad, la transformación y la inclusión en todas las etapas. Solo a través de estas iniciativas se podrá construir una educación accesible, equitativa y de alta calidad, capaz de transformar vidas y comunidades en todo el país, y así contribuir al desarrollo sostenible y equitativo de la nación.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Puntaje Saber 11 - Matemáticas',
      ruta: 'saber11-matematicas',
      archivo: 'ya3-1',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No hay un umbral establecido para este indicador en el Plan Nacional de Desarrollo 2022-2026 o el Plan Sectorial de Educación 2022-2026.',
      explicacion: 'Mide el desempeño promedio de los estudiantes en la prueba de Matemáticas del examen Saber 11°.',
      definicion:
        'Promedio aritmético de los puntajes obtenidos en las cinco áreas evaluadas en el examen Saber 11° (Matemáticas, Ciencias Naturales, Sociales y Ciudadanas, Lectura Crítica e Inglés) para todos los participantes en un periodo específico, con una escala de medición que va de 0 a 100 puntos.',
      metodologia: 'Promedio simple del puntaje promedio por prueba de cada evaluado en una aplicación de Saber 11°',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'El indicador alcanza un máximo de 100 puntos; mientras más próximo sea el puntaje a 0, menor será el desempeño en esa prueba durante la aplicación del examen Saber 11°.',
    },
    {
      nombre: 'Puntaje Saber 11 - Lectura Crítica',
      ruta: 'saber11-lectura',
      archivo: 'ya3-2',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No hay un umbral establecido para este indicador en el Plan Nacional de Desarrollo 2022-2026 o el Plan Sectorial de Educación 2022-2026.',
      explicacion:
        'Mide el desempeño promedio de los estudiantes en la prueba de Lectura Crítica del examen Saber 11°.',
      definicion:
        'Promedio aritmético de los puntajes obtenidos en las cinco áreas evaluadas en el examen Saber 11° (Matemáticas, Ciencias Naturales, Sociales y Ciudadanas, Lectura Crítica e Inglés) para todos los participantes en un periodo específico, con una escala de medición que va de 0 a 100 puntos.',
      metodologia: 'Promedio simple del puntaje promedio por prueba de cada evaluado en una aplicación de Saber 11°',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'El indicador alcanza un máximo de 100 puntos; mientras más próximo sea el puntaje a 0, menor será el desempeño en esa prueba durante la aplicación del examen Saber 11°.',
    },
    {
      nombre: 'Puntaje Saber 11 - Ciencias Sociales',
      ruta: 'saber11-sociales',
      archivo: 'ya3-3',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No hay un umbral establecido para este indicador en el Plan Nacional de Desarrollo 2022-2026 o el Plan Sectorial de Educación 2022-2026.',
      explicacion:
        'Mide el desempeño promedio de los estudiantes en la prueba de Ciencias Sociales y Ciudadanas del examen Saber 11°.',
      definicion:
        'Promedio aritmético de los puntajes obtenidos en las cinco áreas evaluadas en el examen Saber 11° (Matemáticas, Ciencias Naturales, Sociales y Ciudadanas, Lectura Crítica e Inglés) para todos los participantes en un periodo específico, con una escala de medición que va de 0 a 100 puntos.',
      metodologia: 'Promedio simple del puntaje promedio por prueba de cada evaluado en una aplicación de Saber 11°',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'El indicador alcanza un máximo de 100 puntos; mientras más próximo sea el puntaje a 0, menor será el desempeño en esa prueba durante la aplicación del examen Saber 11°.',
    },
    {
      nombre: 'Puntaje Saber 11 - Global',
      ruta: 'saber11-global',
      archivo: 'ya3-4',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No hay un umbral establecido para este indicador en el Plan Nacional de Desarrollo 2022-2026 o el Plan Sectorial de Educación 2022-2026.',
      explicacion: 'Mide el desempeño general de los estudiantes en el examen Saber 11°.',
      definicion:
        'Promedio aritmético de los puntajes globales alcanzados por todos los estudiantes en un periodo específico de aplicación del examen. El puntaje global representa el resultado total del examen Saber 11° y se obtiene mediante un promedio ponderado de las cinco áreas evaluadas (Lectura Crítica, Matemáticas, Ciencias Naturales, Sociales y Ciudadanas, e Inglés), con una escala de medición que va de 0 a 500 puntos..',
      metodologia:
        '[(𝑃𝑢𝑛𝑡𝑎𝑗𝑒 𝑒𝑛 𝐿𝑒𝑐𝑡 𝐶𝑟í𝑡𝑖𝑐𝑎 ∗ 3) + (𝑃𝑢𝑛𝑡𝑎𝑗𝑒 𝑒𝑛 𝑀𝑎𝑡𝑒𝑚á𝑡𝑖𝑐𝑎𝑠 ∗ 3) + (𝑃𝑢𝑛𝑡𝑎𝑗𝑒 𝑒𝑛 𝑆𝑜𝑐 𝐶𝑖𝑢𝑑 ∗ 3) + (𝑃𝑢𝑛𝑡𝑎𝑗𝑒 𝑒𝑛 𝐶 𝑁𝑎𝑡 ∗ 3) + (𝑃𝑢𝑛𝑡𝑎𝑗𝑒 𝑒𝑛 𝐼𝑛𝑔𝑙é𝑠) ] /  13 *5',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'El indicador toma un valor máximo de 500 puntos, entre más cercano a 0 sea el puntaje, más bajo será el desempeño de esa aplicación del examen Saber 11°.',
    },
    {
      nombre: 'Cobertura neta primaria',
      ruta: 'cobertura-primaria',
      archivo: 'ya3-5',
      hay_datos: true,
      umbral: 100,
      explicacion_umbral:
        'El Objetivo de Desarrollo Sostenible (ODS) 4.1 establece "asegurar que todos los niños y niñas completen una educación primaria y secundaria gratuita, equitativa y de calidad que conduzca a resultados de aprendizaje relevantes y efectivos" para el año 2030.',
      explicacion: 'Indica la cobertura neta de estudiantes que cursan educación primaria.',
      definicion:
        'La tasa de cobertura neta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>*** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (6-10 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100%.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (6-10 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables. <br/><br/> Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 80% indica que 80 de cada 100 estudiantes en edad teórica para cursar primaria asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Cobertura neta media',
      ruta: 'cobertura-media',
      archivo: 'ya3-6',
      hay_datos: true,
      umbral: 100,
      explicacion_umbral:
        'El Objetivo de Desarrollo Sostenible (ODS) 4.1 establece "asegurar que todos los niños y niñas completen una educación primaria y secundaria gratuita, equitativa y de calidad que conduzca a resultados de aprendizaje relevantes y efectivos" para el año 2030.',
      explicacion: 'Indica la cobertura neta de estudiantes que cursan educación media.',
      definicion:
        'La tasa de cobertura neta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>*** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (15-16 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100%.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (15-16 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables. <br/><br/> Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 67% indica que 67 de cada 100 estudiantes en edad teórica para cursar educación media asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf ',
    },
    {
      nombre: 'Reprobación primaria',
      ruta: 'reprobacion-primaria',
      archivo: 'ya3-7',
      hay_datos: true,
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con la OCDE, aunque no se establece un valor objetivo específico para la tasa de reprobación, algunos países miembros han adoptado como meta reducir la repetición escolar a niveles por debajo del 5% o incluso al 2% anual en la educación primaria y secundaria. OECD (2023), Education at a Glance 2023: OECD Indicators, OECD Publishing, París.',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron educación primaria.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en primaria. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron primaria / Total de estudiantes que se encuentran matriculados en primaria en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de reprobación constituye un indicador que refleja el porcentaje de estudiantes inscritos que no lograron superar los requisitos académicos establecidos en los programas educativos de cierto nivel, debiendo repetir el curso. Esta situación conlleva implicaciones tanto emocionales como sociales para los alumnos, pudiendo incluso llevar, en situaciones extremas, a la deserción educativa, a pesar de la opción de repetir el nivel. Además, la reprobación evidencia un bajo rendimiento escolar y puede indicar desigualdades en el proceso de aprendizaje, siendo la principal causa del fracaso educativo y un posible indicativo de la baja calidad educativa.En respuesta a esto, numerosas estrategias de políticas educativas se enfocan en mejorar la calidad de la educación, reducir la tasa de reprobación y eliminar el fracaso escolar, lo que tiene un impacto significativo en la calidad de las instituciones educativas.<br/><br/>Más información:https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 3% indica que 3 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar primaria en un momento y territorio específicos. <br/><br/>Más información:https://www.javeriana.edu.co/-/noticia-643-mil-estudiantes-perdieron-el-a%C3%B1o-escolar <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Reprobación media',
      ruta: 'reprobacion-media',
      archivo: 'ya3-8',
      hay_datos: true,
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con la OCDE, aunque no se establece un valor objetivo específico para la tasa de reprobación, algunos países miembros han adoptado como meta reducir la repetición escolar a niveles por debajo del 5% o incluso al 2% anual en la educación primaria y secundaria. OECD (2023), Education at a Glance 2023: OECD Indicators, OECD Publishing, París.',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron educación media.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en educación. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo educación media / Total de estudiantes que se encuentran matriculados en educación media en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo.<br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar educación media  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf   <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Repitencia primaria',
      ruta: 'repitencia-primaria',
      archivo: 'ya3-9',
      hay_datos: true,
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con la OCDE, aunque no se establece un valor objetivo específico para la tasa de reprobación, algunos países miembros han adoptado como meta reducir la repetición escolar a niveles por debajo del 5% o incluso al 2% anual en la educación primaria y secundaria. OECD (2023), Education at a Glance 2023: OECD Indicators, OECD Publishing, París.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo alguno de los grados que corresponden a educación primaria.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en primaria que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo primaria / Total de estudiantes que se encuentran matriculados en primaria en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo. <br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar primaria se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Repitencia media',
      ruta: 'repitencia-media',
      archivo: 'ya3-10',
      hay_datos: true,
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con la OCDE, aunque no se establece un valor objetivo específico para la tasa de reprobación, algunos países miembros han adoptado como meta reducir la repetición escolar a niveles por debajo del 5% o incluso al 2% anual en la educación primaria y secundaria. OECD (2023), Education at a Glance 2023: OECD Indicators, OECD Publishing, París.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo alguno de los grados que corresponden a educación media.',
      definicion:
        'Tasa de repitencia del sector oficial en media. Corresponde al porcentaje de alumnos matriculados en media que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo educación media / Total de estudiantes que se encuentran matriculados en educación media en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo. <br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar educación media se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf  <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Deserción primaria intra-anual',
      ruta: 'desercion-primaria',
      archivo: 'ya3-11',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'Según lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior del 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando primaria y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de primaria.',
      metodologia:
        'Número total de estudiantes matriculados en primaria que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de deserción intra-anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar primaria desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/ <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Deserción media intra-anual',
      ruta: 'desercion-media',
      archivo: 'ya3-12',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'Según lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior del 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando educación media y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual en media. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de educación media.',
      metodologia:
        'Número total de estudiantes matriculados en educación media que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de deserción intra-anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar educación media desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/ <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
  ],
};
