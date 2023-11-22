interface DatosComunes {
  nombre: string;
  ruta: string;
  definicion: string;
}

interface DatosIndicador extends DatosComunes {
  archivo?: string;
  hay_datos: boolean;
  mun?: boolean;
  dep?: boolean;
  explicacion?: string;
  definicion: string;
  metodologia: string;
  unidad: string;
  fuente_numerador?: string;
  fuente_denominador?: string;
  desagregacion: string;
  contexto?: string;
  interpretacion: string;
  umbral?: number;
  responsable?: string;
  compete_a?: string;
}

interface DatosYa extends DatosComunes {
  imagen: string;
  indicadores: DatosIndicador[];
}

const datos: DatosYa[] = [
  {
    nombre: 'Salud y nutrición',
    ruta: 'salud-nutricion',
    imagen: 'ya1',
    definicion:
      'De acuerdo con la Organización Mundial de la Salud (OMS) en 2014, se define la salud como un estado de completo bienestar físico, mental y social, y no simplemente como la ausencia de afecciones o enfermedades. En este contexto, se destaca la importancia del desarrollo saludable de los niños, ya que la capacidad de vivir en armonía es fundamental para su desarrollo integral. Este enfoque integral reconoce la interconexión entre la salud física y mental, así como la importancia del entorno social en el bienestar general.',
    indicadores: [
      {
        nombre: 'Cobertura de acueducto',
        ruta: 'acueducto',
        archivo: 'ya1-1',
        hay_datos: true,
        umbral: 92.9,
        mun: true,
        dep: true,
        explicacion: 'Indica el acceso potencial a agua potable para el consumo humano.',
        definicion:
          'Conjunto de sistemas de irrigación que permite transportar agua en forma de flujo continuo desde un lugar en el que es accesible en la naturaleza hasta un punto de consumo. Esta variable no está directamente asociada a la provisión de agua potable.',
        metodologia: 'Se desconoce, metodología propia del SUI.',
        unidad: 'Tasa (Es un cálculo potencial)',
        fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
        fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
        desagregacion: 'Municipal',
        contexto:
          'La pandemia de la COVID-19 ha resaltado la importancia del saneamiento, la higiene y el acceso a agua potable para prevenir y controlar enfermedades. La Organización Mundial de la Salud destaca que el lavado de manos es una medida altamente efectiva para reducir la propagación de patógenos A pesar de esto, Colombia aún carece de una cobertura universal de agua potable y saneamiento.',
        interpretacion:
          'Un valor de 70% significa que existen 70 familias que cuentan con acceso real a agua potable por cada 100 familias en un territorio y momento específicos. Más información sobre la importancia del acceso a agua potable: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
      },
      {
        nombre: 'Cobertura de alcantarillado',
        ruta: 'alcantarillado',
        archivo: 'ya1-2',
        hay_datos: true,
        umbral: 57.4,
        mun: true,
        dep: true,
        explicacion: 'Indica el acceso potencial que tiene un hogar a una conexión de alcantarillado.',
        definicion:
          'Es el conjunto de conductos de subterráneos llamados alcantarillas, que transportan el agua residual o pluvial. Aguas residuales son las aguas gastas por la comunidad.',
        metodologia: 'Se desconoce, metodología propia del SUI.',
        unidad: 'Tasa (Es un cálculo potencial)',
        fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
        fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
        desagregacion: 'Municipal',
        contexto:
          'A pesar de los avances en la expansión del acceso a agua potable y saneamiento, aún hay cientos de colombianos que habitan principalmente en áreas rurales y carecen de estos servicios básicos. A nivel global, una de cada tres personas no tiene acceso a agua potable segura, dos de cada cinco no cuentan con instalaciones básicas para lavarse las manos, y más de 673 millones aún practican la defecación al aire libre.',
        interpretacion:
          'Un valor de 90% significa que existen 90 familias que cuentan con acceso real a alcantarillado por cada 100 familias en un territorio y momento específicos. Más información sobre alcantarillado y saneamiento: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
      },
      {
        nombre: 'Mortalidad menores de 5 años (cualquier condición)',
        ruta: 'mortalidad',
        archivo: 'ya1-3',
        hay_datos: true,
        umbral: 15,
        mun: true,
        dep: true,
        explicacion: 'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos.',
        definicion: 'Indica el número de muertes por cualquier tipo de causa en menores de 5 años.',
        metodologia:
          'Número de muertes de menores de 5 años  por cualquier tipo de causa / Número total de menores de 5 años.',
        unidad: 'Por 100.000 menores de 5 años.',
        fuente_numerador: 'CUBO INDICADORES EEVV',
        fuente_denominador: 'CUBO INDICADORES EEVV',
        desagregacion: 'Municipal',
        contexto:
          'La mortalidad en menores de 5 años es un reflejo directo de las desigualdades sociales y económicas de un país. Por ejemplo, en países como Honduras o Haití los niños del 20% de la población más pobre tienen al menos el doble de probabilidad de morir antes de los 5 años, en comparación con los niños cuyas familias tienen mayores niveles de ingresos. Esto tiene que ver con la calidad de vida y el acceso afectivos a servicios de salud de calidad, así como también los niveles educativos de las personas cuidadoras.',
        interpretacion:
          'Un valor de 80, indica que murieron 80 niños menores de 5 años por cada 1.000 nacidos vivos en un momento y territorio específico.',
      },
      {
        nombre: 'Control prenatal',
        ruta: 'control-prenatal',
        archivo: 'ya1-5',
        hay_datos: true,
        umbral: 95,
        mun: true,
        dep: true,
        explicacion: 'Indica el número promedio de controles prenatales a los que asistieron las gestantes.',
        definicion: 'Proporción de nacidos vivos con 4 o más controles prenatales.',
        metodologia:
          'Número de nacidos vivos cuyas gestantes asistieron a 4 o más controles prenatales / Total de nacidos vivos.',
        unidad: 'Porcentaje',
        fuente_numerador: 'CUBO INDICADORES EEVV',
        fuente_denominador: 'CUBO INDICADORES EEVV',
        desagregacion: 'Municipal',
        contexto:
          'La atención prenatal es fundamental para reducir el riesgo de muertes en los recién nacidos y en las gestantes. Es un indicador que expresa el acceso a los servicios de salud durante el embarazo, puesto que en la medida en que exista un mayor número de contactos de calidad entre las embarazadas y el personal de salud, se podrán reducir las complicaciones y riesgos durante esta etapa de la vida.',
        interpretacion:
          'Un valor de 7.4% indica que 7,4 de cada 100 nacidos vivos tuvieron 4 o más controles prenatales en un momento y territorio específicos.',
      },
      {
        nombre: 'Desnutrición aguda',
        ruta: 'desnutricion',
        archivo: 'ya1-7',
        hay_datos: true,
        umbral: 900,
        mun: true,
        dep: true,
        explicacion: 'Indica la proporción de niños menores de 5 años que padecen de desnutrición aguda.',
        definicion:
          'Proporción de niños menores de 5 años padecen de desnutrición aguda en un momento y territorio determinado.',
        metodologia:
          'Número de niños menores de 5 años que sufren de desnutrición aguda en un periodo y territorio específicos /  Número de nacidos vivos menores de 5 años en el mismo periodo y territorio.',
        unidad: 'Porcentaje',
        fuente_numerador: 'SIVIGILA',
        fuente_denominador: 'CUBO INDICADORES EEVV',
        desagregacion: 'Municipal',
        contexto:
          'El número de personas que sufren hambre en el mundo ha aumentado desde 2015, llegando a unos 690 millones, el 8,9% de la población global. Si las tendencias persisten, podría superar los 840 millones para 2030, alejándonos del objetivo de hambre cero. Factores como conflictos y la pandemia de COVID-19 han contribuido a que alrededor de 135 millones enfrenten hambre severa. Se necesitan acciones urgentes para proporcionar alimentos y ayuda humanitaria. Además, es crucial transformar el sistema agroalimentario global para alimentar a los afectados y a la creciente población mundial mediante prácticas sostenibles.',
        interpretacion:
          'Un valor de 15% indica que 15 de cada 100 nacidos vivos que son menores de 5 años sufren de desnutrición aguda en un momento y territorio específicos. https://www.un.org/sustainabledevelopment/es/hunger/',
      },
      {
        nombre: 'Bajo peso al nacer',
        ruta: 'bajo-peso',
        archivo: 'ya1-8',
        hay_datos: true,
        umbral: 2.6,
        mun: true,
        dep: true,
        explicacion: 'Indica la proporción de niños y niñas menores de 5 años que padecen de desnutrición aguda.',
        definicion:
          'Indica la proporción de nacidos vivos a término (37 semanas o más) que nacieron con peso inferior a 2.499 gramos en un momento y territorio específicos, con respecto al total de nacidos vivos en el mismo periodo y lugar.',
        metodologia:
          'Se desconoce, metodología propia del Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE).',
        unidad: 'Porcentaje',
        fuente_numerador:
          'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
        fuente_denominador:
          'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
        desagregacion: 'Municipal',
        contexto:
          'El bajo peso al nacer es un serio problema de salud pública ya que expresa las condiciones de salud durante la gestación. Se asocia a complicaciones durante los primeros meses de vida, por ejemplo, mortalidad, deficiencias en el desarrollo cognitivo, e incluso puede aumentar el riesgo de padecer enfermedades no transmisibles como la diabetes durante la adultez.',
        interpretacion:
          'Un valor de 2% indica que 2 de cada 100 nacidos vivos a término tienen bajo peso al nacer en un momento y territorio específicos. Más Información: hhttps://apps.who.int/iris/bitstream/handle/10665/255733/WHO_NMH_NHD_14.5_spa.pdf',
      },
    ],
  },
  {
    nombre: 'Educación inicial',
    imagen: 'ya2',
    ruta: 'educacion-inicial',
    definicion:
      'Es esencial garantizar el desarrollo integral de los niños en la primera infancia, con un enfoque destacado en la educación inicial según la Política de Estado de Cero a Siempre en Colombia. A pesar de avances legislativos, la disparidad persiste, ya que, de más de 4 millones de niños menores de 6 años, solo 1.2 millones tienen acceso a la educación inicial dentro de la atención integral. Obstáculos como la falta de instituciones cercanas, cupos limitados y requisitos de ingreso no cumplidos, especialmente en zonas rurales como la Orinoquía y la Amazonía, plantean desafíos. Superar estas barreras y aumentar la cobertura, especialmente en entornos rurales, es esencial para cumplir con la Política de Estado de Cero a Siempre, incluyendo la implementación efectiva de la ruta integral de atenciones.',
    indicadores: [
      {
        nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten',
        ruta: 'menores-establecimiento',
        archivo: 'ya2-4',
        hay_datos: true,
        mun: false,
        dep: false,
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
        mun: false,
        dep: true,
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
        mun: false,
        dep: true,
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
        mun: false,
        dep: false,
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
        mun: false,
        dep: false,
        explicacion: 'Indica el número total de actos terroristas.',
        definicion:
          'Este indicar presenta un conteo del número de actos terroristas, hostigamientos, combates y enfrentamientos en un mismo periodo y territorio en particular.',
        metodologia:
          'Total = Suma(Número de Actos Terroritas, Atentados, Combates, Enfretamientos, Declaraciones de Hostigamientos).',
        unidad: '',
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
        mun: false,
        dep: false,
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
          'Un valor de 15 índica que en un mismo periodo y territorio en particular se presentaron 15 ocurrencias con anterfactos explosivos* El no pondera un peso en particular en función de la categoría que integran el agregado de "Artefactos Explosivos".',
      },
    ],
  },
  {
    nombre: 'Educación preescolar, básica y media',
    imagen: 'ya3',
    ruta: 'educacion-preescolar-a-media',
    definicion:
      'Es crucial garantizar una educación de calidad en Colombia, superando barreras de inequidad desde el preescolar hasta la media. La presencia en la escuela no garantiza plenamente el derecho a la educación, y las inequidades arraigadas relacionadas con factores geográficos, socioeconómicos, étnicos y de género deben abordarse con enfoques multidimensionales. Atender a la infraestructura escolar y la formación docente es esencial para establecer un sistema educativo que promueva la igualdad, la transformación y la inclusión en todas las etapas.',
    indicadores: [
      {
        nombre: 'Tasa de cobertura bruta media',
        ruta: 'cobertura-media',
        archivo: 'ya3-1',
        hay_datos: true,
        umbral: 83.6,
        mun: false,
        dep: false,
        explicacion: 'Indica la cobertura bruta de estudiantes que cursan educación media.',
        definicion: 'Indica la cobertura bruta de estudiantes que cursan educación media.',
        metodologia:
          'Número total de estudiantes matriculados y tienen entre 15 y 16 años de edad / Total de la población que tiene entre 15 y 16 años de edad en el mismo periodo y territorio. * 100.',
        unidad: 'Tasa',
        fuente_numerador:
          'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
        fuente_denominador:
          'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE.',
        desagregacion: 'Municipal',
        contexto: 'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda.',
        interpretacion:
          'Un valor de 50 indica que en promedio  de cada 100 estudiantes en edad teórica para cursar educación media, asisten a un establecimiento educativo en un momento y territorio específicos. Más Información: https://ods.dnp.gov.co/es/objetivos/educacion-de-calidad',
      },
      {
        nombre: 'Resultados Pruebas Saber 11 matemáticas',
        ruta: 'saber11-matematicas',
        archivo: 'ya3-2',
        hay_datos: true,
        umbral: 71,
        mun: false,
        dep: false,
        explicacion:
          'Indica, en promedio, en qué categoría se encuentra el desempeño en matemáticas de los estudiantes que presentaron el Saber 11.',
        definicion: 'Mide el desempeño en promedio en el área de Matemáticas en las Prueba Saber 11.',
        metodologia:
          'Número Total de Evaluados en Cada Nivel de Desempeño en Matemáticas / Total de Evaludos en Matemáticas * 100 ***Los resultados individuales de la prueba Saber 11 (total y por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
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
        mun: false,
        dep: false,
        explicacion: '',
        definicion: 'Mide el desempeño en promedio en el área de Lectura en la Prueba Saber 11.',
        metodologia:
          'Número Total de Evaluados en Cada Nivel de Desempeño en Lectura / Total de Evaludos en Lectura * 100 ***Los resultados individuales de la prueba Saber 11 (total y por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
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
        mun: false,
        dep: false,
        explicacion: 'Indica, en promedio, el número de estudiantes que abandonan el sistema educativo.',
        definicion: 'Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo.',
        metodologia:
          'Número Total de estudiantes que abandoraron el sistema educativo antes de finalizar el año lectivo / Total de estudiantes en el mismo periodo y territorio. *** La tasa de deserción intraanual solo tiene en cuenta a los alumnos que abandonan la escuela durante el año escolar, ésta se complementa con la tasa de deserción interanual que calcula aquellos que desertan al terminar el año escolar. (MEN, 2013, p. 72).',
        unidad: 'Porcentaje',
        fuente_numerador: 'DataIcfes',
        fuente_denominador: 'DataIcfes',
        desagregacion: 'Municipal',
        contexto:
          'La deserción escolar tiene un gran impacto en el desarrollo integral, y la formación del capital humano, comunmente se asocia co factores clave como el género, las habilidades,  lascondiciones familiares, la calidad educativa y contexto. En respuesta, el Gobierno nacional, a través del Plan Nacional de Desarrollo 2018-2022, buscaba promover la permanencia en el sistema educativo mediante el fortalecimiento de trayectorias educativas completas, considerando aspectos como el bienestar, el reconocimiento de las características individuales, la alimentación escolar y  los ambientes de aprendizaje.',
        interpretacion:
          ' Un valor de 5% indica que 5 de cada 100 estudiantes abandonaron el sistema educativo antes de finalizar el año lectivo en un territorio y momentos específicos. Más Información: https://www.mineducacion.gov.co/1780/articles-363488_recurso_34.pdf',
      },
      {
        nombre: 'Tasa de repitencia',
        ruta: 'repitencia',
        archivo: 'ya3-5',
        hay_datos: true,
        umbral: 2.7,
        mun: false,
        dep: false,
        explicacion:
          'Indica, en promedio, el número de estudiantes que vuelven a cursar el mismo grado académico al no ser promovidos al siguiente.',
        definicion:
          'Porcentaje de estudiantes que vuelven a cursar el grado cuando no han sido promovidos al siguiente.',
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
        mun: false,
        dep: false,
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
    ],
  },
  {
    nombre: 'Ambiente sano',
    imagen: 'ya4',
    ruta: 'ambiente-sano',
    definicion:
      'Es crucial reconocer el derecho de la niñez a un entorno saludable y propicio para su desarrollo. La falta de integración entre desarrollo económico y protección ambiental ha provocado una crisis, según el Informe sobre el Desarrollo Humano 2021 de las Naciones Unidas. Save The Children advierte sobre el doble riesgo de cambio climático para los niños nacidos en Colombia en 2020. La concentración urbana presenta desafíos ambientales, según el Banco Interamericano de Desarrollo. La sostenibilidad de las ciudades colombianas implica abordar la pobreza, mejorar servicios básicos, resolver desempleo, reducir emisiones y fomentar áreas verdes para el bienestar de la población infantil y adolescente.',
    indicadores: [
      {
        nombre: 'Tasa de mortalidad por Enfermedad Diarreica Aguda (EDA) en menores de 5 años',
        ruta: 'mortalidad-eda',
        archivo: 'ya4-1',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: 'Indica el número de defunciones en menores de 5 años por endermedad diarreica aguda.',
        definicion:
          'Indica el número de defunciones en niños menores de 5 años por enfermedad diarreica aguda con respecto a la población de niños menores de 5 años.',
        metodologia: 'Número de muertes por EDA en menores de 5 años / Número total de menores de 5 años.',
        unidad: 'Por 100.000 menores de 5 años.',
        fuente_numerador: 'CUBO INDICADORES EEVV',
        fuente_denominador: 'CUBO INDICADORES EEVV',
        desagregacion: 'Municipal',
        contexto:
          '"La mortalidad por enfermedades diarreicas es la segunda causa de muerte a nivel mundial en los niños y niñas, y es una causa de mortalidad prevenible. Durante 2019 ocurrieron más de 319.000 defunciones en niños y niñas por esta causa en el mundo. Las condiciones de vida, saneamiento básico y el acceso al agua potable son claves para evitar la propagación de estas enfermedades muchas veces transmitidas por el agua o alimentos contaminados. La desnutrición y la inmunosupresión también aumentan el riesgo de padecer enfermedades diarreicas. La lactancia materna exclusiva, el acceso al agua potable, adecuado lavado de manos, vacunación contra rotavirus son algunas de las formas de prevención.',
        interpretacion:
          'Un valor de 11 indica que ocurrieron 11 muertes por diarrea por cada 100.000 niños menores de 5 años en un momento y territorio determinados. Más Información: https://www.who.int/es/news-room/fact-sheets/detail/diarrhoeal-disease',
      },
      {
        nombre: 'Tasa de mortalidad por Infección Respiratoria Aguda (IRA) en menores de 5 años',
        ruta: 'mortalidad-ira',
        archivo: 'ya4-2',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion:
          'Indica el número de defunciones en menores de 5 años por endermedad infección respiratoria aguda.',
        definicion:
          'Indica el número de defunciones en niños menores de 5 años por infecciones respiratorias agudas con respecto a la población de niños menores de 5 años en un momento y territorio determinado.',
        metodologia: 'Número de muertes por IRA en menores de 5 años / Número total de menores de 5 años.',
        unidad: 'Por 100.000 menores de 5 años.',
        fuente_numerador: 'CUBO INDICADORES EEVV',
        fuente_denominador: 'CUBO INDICADORES EEVV',
        desagregacion: 'Municipal',
        contexto:
          'Las infecciones respiratorias agudas son causa de muerte en niños y niñas menores de 5 años alrededor del mundo, especialmente en aquellas regiones apartadas y con limitado acceso a educación, saneamiento y servicios de salud de calidad. Las infecciones del tracto respiratorio (alto y bajo) son causadas por diferentes microorganismos, pudiendo causar desde resfriados comunes hasta neumonías que pueden comprometer la vida. Una adecuada nutrición, contar con el esquema de vacunación completo y conocer los signos de alarma de una infección respiratoria, son elementos básicos para evitar la mortalidad por esta causa, que en la mayoría de los casos es completamente prevenible.',
        interpretacion:
          'Un valor de 3 indica que murieron 3 niños por infección respiratoria aguda por cada 100.000 niños menores de 5 años en un momento y territorio dados. Más Información: https://www.minsalud.gov.co/CC/Campanas/plegable-ira.pdf',
      },
      {
        nombre: 'Porcentaje real de acceso a agua potable',
        ruta: 'agua-potable',
        archivo: 'ya4-3',
        hay_datos: true,
        mun: false,
        dep: false,
        umbral: 92.9,
        explicacion: 'Indica el acceso potencial a agua potable para el consumo humano.',
        definicion: 'Cobertura Total de Acueducto',
        metodologia: 'Se desconoce, metodología propia del SUI.',
        unidad: 'Tasa (Es un cálculo Potencial)',
        fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
        fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
        desagregacion: 'Municipal',
        contexto:
          'La pandemia de la COVID-19 ha resaltado la  importancia del saneamiento, la higiene y el acceso a agua potable para prevenir y controlar enfermedades. La Organización Mundial de la Salud destaca que el lavado de manos es una medida altamente efectiva para reducir la propagación de patógenos A pesar de esto, Colombia aún carece de una cobertura universal de agua potable y saneamiento.',
        interpretacion:
          'Un valor de 70% significa que existen 70 familias que cuentan con acceso real a agua potable por cada 100 familias en un territorio y momento específicos. Más información sobre la importancia del acceso a agua potable: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
      },
      {
        nombre: 'Calidad de aire',
        ruta: 'calidad-aire',
        archivo: 'ya4-4',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: 'Indica la calidad del aire a partir del nivel de concentraciones de material particulado.',
        metodologia: 'Se desconoce, metodología propia del IDEAM.',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
    ],
  },
  {
    nombre: 'Juego',
    imagen: 'ya5',
    ruta: 'juego',
    definicion:
      'Es esencial reconocer que la niñez tiene el derecho de jugar, un derecho consagrado en normativas internacionales y nacionales. El juego no solo es una actividad recreativa; es crucial para el desarrollo integral de los niños, contribuyendo a habilidades socioemocionales y competencias ciudadanas. Para garantizar este derecho, se deben proporcionar espacios seguros y accesibles, independientemente de la condición social o económica de los niños, incluyendo comunidades rurales, indígenas, afrodescendientes, rom y personas con discapacidad. Aunque el juego está respaldado por diversas políticas y leyes, el desafío radica en materializar este reconocimiento en la realidad cotidiana.',
    indicadores: [
      {
        nombre: 'Niños y niñas de 2-5 años con dificultad funcional en el juego',
        ruta: 'dificultad-funcional-2-5',
        archivo: 'ya5-1',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: 'Porcentaje de niños y niñas de 2-5 años con dificultad funcional en el dominio de juego.',
        metodologia:
          'Número de niños y niñas de 2-5 años con dificultad funcional en el dominio de juego / Número de niños y niñas de 2-5 años.',
        unidad: 'Porcentaje | Tasa',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion:
          'La dificultad funcional para niños de 2 a 5 años se establece a partir de una encuesta dirigida a padres y cuidadores, dentro de las opciones de respuesta a la pregunta podemos identificar dos "Mucha dificultad" o "No puede realizar la actividad" (UNICEF, Aargentina 2020).',
        responsable:
          'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
        compete_a:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
      {
        nombre:
          'Niños y niñas de 2-5 años que no asisten a un establecimiento educativo, guardería, jardín infantil o preescolar',
        ruta: 'asistencia-establecimiento-educativo-2-5',
        archivo: 'ya5-2',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion:
          'Porcentaje de niños y niñas de 2-5 años que no asisten a un establecimiento educativo, guardería, jardín infantil o preescolar.',
        metodologia:
          'Número de niños y niñas de 2-5 años que no asisten a un establecimiento educativo, jardin infantil o preescolar.',
        unidad: 'Porcentaje | Tasa',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion:
          'De acuerdo con el MEN, los objetivos explicitos en términos de asistencia escolar en el plan nacional de desarrollo es de tener una tasa de asistencia del 100%.',
        responsable:
          'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
        compete_a:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
      {
        nombre: 'Niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos.',
        ruta: 'agresion-2-5',
        archivo: 'ya5-3',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion:
          'Porcentaje de niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos.',
        metodologia:
          'Número de niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos / Número total de niños y niñas de 2-5 años.',
        unidad: 'Porcentaje | Tasa',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion:
          '"Se debe formular la siguiente pregunta dentro de la encuesta de la Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE. En comparación con los niños/as de la misma edad, ¿con qué frecuencia patea, muerde o golpea (nombre) a otros niños/as o adultos? | Opciones de Respuesta como más o mucho más son indicador de este tipo conducta.',
        responsable:
          'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
        compete_a:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
      {
        nombre: 'Niños y niñas de 2-5 años que con frecuencia cuentan en su hogar con adulto que lee junto a él',
        ruta: 'lectura-2-5',
        archivo: 'ya5-4',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion:
          'Número de niños y niñas de 2-5 años que con frecuencia cuentan en su hogar con adulto que lee junto a él o ella libros de cuentos o historias / Número total de niños y niñas de 2-5 años.',
        metodologia: '',
        unidad: 'Porcentaje | Tasa',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion:
          'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas – DANE. ¿Con qué frecuencia realiza actitividades de lectura con el menor de 5 años que reside en su hogar| Opciones de respuesta: 1 Todos los días. 2 Al menos una vez a la semana pero no cada día. 3 Al menos una vez al mes, pero no cada semana 4 Al menos una vez al mes, pero no todos los meses.',
        responsable:
          'Encuersta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE.',
        compete_a:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
      {
        nombre: 'Niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable',
        ruta: 'juego-adulto-2-5',
        archivo: 'ya5-5',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: 'Porcentaje de niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable.',
        metodologia: '',
        unidad: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion:
          'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ¿Con qué frecuencia juega con el menor de 5 años que reside en su hogar| Opciones de respuesta: 1 Todos los días. 2 Al menos una vez a la semana pero no cada día. 3 Al menos una vez al mes, pero no cada semana 4 Al menos una vez al mes, pero no todos los meses.',
        responsable:
          'Encuersta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ',
        compete_a:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
    ],
  },
  {
    nombre: 'Participación',
    imagen: 'ya6',
    ruta: 'participacion',
    definicion:
      'Es vital reconocer el derecho de la niñez a participar y ser escuchada en decisiones que les afectan, respaldado por normativas como la Declaración Universal de Derechos Humanos. Niñas, niños y adolescentes tienen igualdad de posibilidades y derechos que los adultos para participar y ser escuchados, según diversas normativas. Este derecho no es solo un gesto de buena voluntad, sino el reconocimiento de su capacidad de agencia y formación ciudadana. Sin embargo, la baja priorización y falta de recursos en algunas regiones obstaculizan la efectividad de este derecho, según el Plan Nacional de Desarrollo 2018-2022.',
    indicadores: [
      {
        nombre: 'Por definir 1',
        ruta: 'por-definir',
        archivo: 'ya6-1',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 2',
        ruta: 'por-definir',
        archivo: 'ya6-2',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 3',
        ruta: 'por-definir',
        archivo: 'ya6-3',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 4',
        ruta: 'por-definir',
        archivo: 'ya6-4',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 5',
        ruta: 'por-definir',
        archivo: 'ya6-5',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
    ],
  },
  {
    nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
    imagen: 'ya7',
    ruta: 'fortalecimiento-familiar',
    definicion:
      'Es crucial fortalecer a las familias para proteger y cuidar a la niñez, asegurando vínculos emocionales y cumpliendo normativas como la Declaración Universal de Derechos Humanos. La asistencia a las familias, respaldada por la Convención sobre los Derechos del Niño y la Constitución Nacional, es esencial para la crianza. El Plan Nacional de Desarrollo (2018-2022) destaca la importancia de las familias como garantes de la protección de los niños, requiriendo oportunidades y capacidades para enfrentar su entorno y asegurar el bienestar de todos sus miembros. La familia desempeña un papel crucial en la socialización y protección integral de la niñez.',
    indicadores: [
      {
        nombre: 'Por definir 1',
        ruta: 'por-definir',
        archivo: 'ya7-1',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 2',
        ruta: 'por-definir',
        archivo: 'ya7-2',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 3',
        ruta: 'por-definir',
        archivo: 'ya7-3',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 4',
        ruta: 'por-definir',
        archivo: 'ya7-4',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
      {
        nombre: 'Por definir 5',
        ruta: 'por-definir',
        archivo: 'ya7-5',
        hay_datos: false,
        mun: false,
        dep: false,
        explicacion: '',
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: 'Municipal',
        contexto: '',
        interpretacion: '',
      },
    ],
  },
  {
    nombre: 'Protección frente a cualquier tipo de violencia',
    imagen: 'ya8',
    ruta: 'proteccion-violencia',
    definicion:
      'Es esencial erradicar la violencia contra la niñez para lograr la prosperidad universal, como lo establece la Agenda 2030 de Naciones Unidas. El Objetivo de Desarrollo Sostenible (ODS) 16 enfatiza la necesidad de sociedades pacíficas. La meta global 16.2 busca poner fin a diversas formas de violencia contra los niños. La Organización Mundial de la Salud define la violencia como el uso deliberado de la fuerza, con impactos significativos en el desarrollo infantil. En Colombia, la presencia alarmante de violencia destaca la urgencia de abordar este problema, ya que afecta el bienestar físico, emocional y psicológico de la niñez, con consecuencias a largo plazo.',
    indicadores: [
      {
        nombre: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses',
        ruta: 'violencia-fisica',
        archivo: 'ya8-1',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion:
          'Indica la proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
        definicion: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
        metodologia:
          'Número de jóvenes que han declarado haber experimentado violencia física / Número total de jóvenes en el mismo periodo y territorio *100.',
        unidad: 'Tasa x 100,000',
        fuente_numerador: 'ICBF',
        fuente_denominador: 'ICBF',
        desagregacion: 'Municipal',
        contexto:
          'Las diversas manifestaciones de violencia se erigen como una problemática de salud pública por múltiples razones: en primer lugar, a causa de las severas repercusiones en el bienestar físico y emocional de las víctimas, así como en sus familias y la sociedad en su conjunto, conllevando a la pérdida de años de vida saludable. En segundo término, su alcance se manifiesta en la extensa cantidad de población afectada, especialmente niñas, niños, adolescentes, jóvenes y mujeres. Esto pone de manifiesto que la violencia de género no es simplemente un tema psicológico confinado al ámbito privado, sino un problema social y de interés público que exige una acción coordinada por parte del Estado, respaldada por un marco normativo nacional integral. En tercer lugar, estas violencias son prevenibles, ya que sus raíces se hallan en aspectos culturales y sociales, no en factores biológicos o hereditarios. En consecuencia, abordar este fenómeno requiere un enfoque holístico que combine la sensibilización, la educación y la promoción de cambios estructurales para erradicar sus fundamentos culturales arraigados.',
        interpretacion:
          'Un valor de 19% indica que 19 de cada 100 jóvenes han reportado el haber experimentado violencia física en un momento y territorio específicos.  Más Información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf',
      },
      {
        nombre:
          'Número de procesos administrativos de reestablecimientos de derechos por el consumo de sustancias psicoactivas',
        ruta: 'consumo-sustancias',
        archivo: 'ya8-2',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion:
          'Indica el número de procesos realizados de reestablecimientos de rechos por consumo de sustancias psicoactivas.',
        definicion:
          'Este indicador indica el número de reestablecimientos de derechos realizados por el ICBF relacionados con el consumo de sustancias psicoactivas.',
        metodologia:
          'Número de Procesos Administrativos de Reestablecimientos de Derechos por el Consumo de Sustancias Psicoactivas en el mismo periodo y terriorio.',
        unidad: 'Conteo',
        fuente_numerador: 'ICBF',
        fuente_denominador: 'ICBF',
        desagregacion: 'Municipal',
        contexto:
          'El uso de sustancias psicoactivas (SPA) se está distanciando de las metas de políticas antidrogas, según el Informe Mundial de Drogas de 2012 de la UNODC. Entre 2010 y 2019, el consumo de drogas aumentó en un 22%, alcanzando a aproximadamente 275 millones de personas en todo el mundo en el último año. Sin embargo, solo el 10% de estos usuarios experimentaron trastornos por consumo de drogas, lo que sugiere un distanciamiento de los objetivos prohibicionistas de un mundo libre de drogas.',
        interpretacion:
          'Un valor de 10 indica que el ICBF reestableció el derecho de 10 jóvenes por consumo de sustancias  Más Información: https://www.icbf.gov.co/programas-y-estrategias/proteccion/consumo-sustancias-psicoactivas',
      },
      {
        nombre: 'Número de menores de edad que participaron en la comisión de un delito',
        ruta: 'menores-delito',
        archivo: 'ya8-3',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: 'Indica la proporción de delitos en los que participaron menores de edad.',
        definicion: 'Indica la proporción de delitos en los que participaron menores de edad.',
        metodologia:
          'Número de delitos en los que participaron menores de edad / Número total de delitos en el mismo periodo y territorio.',
        unidad: 'Porcentaje',
        fuente_numerador: 'Policia Nacional',
        fuente_denominador: 'Policia Nacional',
        desagregacion: 'Municipal',
        contexto: 'No aplica.',
        interpretacion:
          'Un valor de 10 indica que el ICBF reestableció el derecho de 10 jóvenes por consumo de sustancias  Más Información: https://www.corteidh.or.cr/tablas/r25958.pdf',
      },
    ],
  },
  {
    nombre:
      'Adolescentes con justicia restaurativa y pedagógica (sistema de responsabilidad penal para adolescentes - SRPA)',
    imagen: 'ya9',
    ruta: 'adolescentes-srpa',
    definicion:
      'Es crucial adoptar un enfoque pedagógico y restaurativo en el Sistema de Responsabilidad Penal para Adolescentes (SRPA) en Colombia. Aunque establecido para responder a estándares internacionales y a la Convención sobre los Derechos del Niño, es necesario garantizar un sistema que promueva la verdad, la justicia y el restablecimiento efectivo de los derechos de los adolescentes. El SRPA debe evolucionar para alinearse con principios pedagógicos y restaurativos, cumpliendo con el Estado social de derecho establecido en la Constitución Política de 1991.',
    indicadores: [
      {
        nombre: 'Porcentaje de adolescentes que ingresan más de una vez al SRPA por presunta comisión de un delito',
        ruta: 'adolescentes-reincidencia',
        archivo: 'ya9-1',
        hay_datos: true,
        mun: false,
        dep: false,
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
        mun: false,
        dep: false,
        explicacion: 'Indica el tiempo promedio que pasa un adolescente con medida de internamiento preventivo.',
        definicion:
          'Indica el tiempo promedio que pasa un adolescente con medida de internamiento preventivo hasta que se resuelve su situación.',
        metodologia: 'Se desconoce.',
        unidad: 'Se desconoce.',
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
        mun: false,
        dep: false,
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
        nombre:
          'Adolescentes que se encuentran en Centros de Internamiento Preventivo con acceso a programas educativos',
        ruta: 'adolescentes-cae-cip',
        archivo: 'ya9-4',
        hay_datos: true,
        mun: false,
        dep: false,
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
        nombre:
          'Adolescentes que se encuentran en Centros de Internamiento Preventivo con acceso a programas laborales',
        ruta: 'vinculacion-laboral',
        archivo: 'ya9-5',
        hay_datos: true,
        mun: false,
        dep: false,
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
  },
  {
    nombre: 'Cultura de paz, reconciliación y convivencia',
    imagen: 'ya10',
    ruta: 'paz-reconciliacion',
    definicion:
      'Es crucial que los 15.4 millones de menores en Colombia participen en la construcción de una cultura de paz tras el conflicto armado. Reconociendo sus experiencias y dándoles voz activa en el diseño de acciones para la reconciliación, la niñez desempeña un papel esencial. Los gobiernos locales, especialmente en los 170 municipios afectados por el conflicto, deben proporcionarles espacio, priorizando la restitución de derechos y el interés superior de la niñez según normativas nacionales e internacionales.',
    indicadores: [
      {
        nombre: 'Delitos contra la libertad y la integridad sexual en el desarrollo del conflicto',
        ruta: 'delito-sexual-conflicto',
        archivo: 'ya10-1',
        hay_datos: true,
        mun: false,
        dep: false,
        umbral: 0,
        explicacion: 'Por definir',
        definicion:
          'Indica el número de menores de edad que fueron víctimas de un delito en contra de su libertad e integridad sexual.',
        metodologia: 'Número de menores de edad que fueron reclutados por una estructural criminal.',
        unidad: 'Conteo',
        fuente_numerador: 'Panel CEDE - Registro Único de Víctimas',
        fuente_denominador: 'Panel CEDE - Registro Único de Víctimas',
        desagregacion: 'Municipal',
        contexto: 'Por definir',
        interpretacion: 'Por definir',
      },
      {
        nombre: 'Vinculación de Menores de Edad a Estructuras Criminales',
        ruta: 'vinculacion-criminal',
        archivo: 'ya10-2',
        hay_datos: true,
        mun: false,
        dep: false,
        umbral: 0,
        explicacion: 'Indica el número de menores de edad que fueron reclutados por una estructura criminal.',
        definicion: 'Indica el número de menores de edad que fueron reclutados por una estrucutra criminal.',
        metodologia: 'Número de menores de edad que fueron reclutados por una estructural criminal.',
        unidad: 'Conteo',
        fuente_numerador: 'Panel CEDE - Registro Único de Víctimas',
        fuente_denominador: 'Panel CEDE - Registro Único de Víctimas',
        desagregacion: 'Municipal',
        contexto:
          'Arias et al., (214) han estudiando los efectos del conflicto armado en el desarrollo económico y social en Colombia, de acuerdo con los autores el conflicto armad ha tenido efectos devastadores en el sistema educativo del país. Las instituciones educativas, tanto oficiales como no oficiales, han enfrentado numerosos desafíos debido a la violencia y la inestabilidad asociadas con el conflicto. Muchas escuelas han sido afectadas directamente, ya sea por actos de violencia que las han dejado inoperables o por la desaparición de recursos esenciales. Además, el desplazamiento forzado de comunidades enteras ha tenido un impacto directo en la tasa de matricula y la asistencia escolar, ya que muchos niños y jóvenes se han visto obligados a abandonar sus hogares y, en consecuencia, sus estudios. Este entorno de conflicto también ha llevado a la pérdida de maestros capacitados, ya sea porque han sido desplazados o han abandonado sus roles por motivos de seguridad.',
        interpretacion:
          'Un valor de 10 indica que 10 menores fueron reclutados a una estructura criminal en un momento y territorio determinados.',
      },
      {
        nombre: 'Delitos contra la libertad y la integridad sexual en el desarrollo del conflicto',
        ruta: 'delitos-libertad-sexual',
        archivo: 'ya10-3',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: 'Por definirPor definir',
        definicion: 'Por definirPor definir',
        metodologia: 'Por definirPor definir',
        unidad: 'Por definirPor definir',
        fuente_numerador: 'Por definirPor definir',
        fuente_denominador: 'Por definirPor definir',
        desagregacion: 'Municipal',
        contexto: 'Por definirPor definir',
        interpretacion: 'Por definirPor definir',
      },
      {
        nombre: 'Bajo logro educativo (porcentaje de niños que se encuentran cursando en extra edad)',
        ruta: 'bajo-logro',
        archivo: 'ya10-4',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: 'Por definir',
        definicion: 'Por definir',
        metodologia: 'Por definir',
        unidad: 'Por definir',
        fuente_numerador: 'Por definir',
        fuente_denominador: 'Por definir',
        desagregacion: 'Municipal',
        contexto: 'Por definir',
        interpretacion: 'Por definir',
      },
      {
        nombre: 'Maltrato Físico (número de ataques a menores de edad por parte de un cuidador, familiar o padre)',
        ruta: 'maltrato-fisico',
        archivo: 'ya10-5',
        hay_datos: true,
        mun: false,
        dep: false,
        explicacion: 'Por definir',
        definicion: 'Por definir',
        metodologia: 'Por definir',
        unidad: 'Por definir',
        fuente_numerador: 'Por definir',
        fuente_denominador: 'Por definir',
        desagregacion: 'Municipal',
        contexto: 'Por definir',
        interpretacion: 'Por definir',
      },
    ],
  },
];

export default datos;
