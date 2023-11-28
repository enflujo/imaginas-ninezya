import type { DatosYa } from '@/tipos';

export const ya1: DatosYa = {
  nombre: 'Salud y nutrición',
  ruta: 'salud-nutricion',
  imagen: 'ya1',
  definicion:
    'De acuerdo con la Organización Mundial de la Salud (OMS) en 2014, se define la salud como un estado de completo bienestar físico, mental y social, y no simplemente como la ausencia de afecciones o enfermedades. En este contexto, se destaca la importancia del desarrollo saludable de los niños, ya que la capacidad de vivir en armonía es fundamental para su desarrollo integral. Este enfoque integral reconoce la interconexión entre la salud física y mental, así como la importancia del entorno social en el bienestar general.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Cobertura de acueducto',
      ruta: 'acueducto',
      archivo: 'ya1-1',
      hay_datos: true,
      umbral: 92.9,
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
      explicacion: 'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos.',
      definicion: 'Indica el número de muertes por cualquier tipo de causa en menores de 5 años.',
      metodologia:
        'Número de muertes de menores de 5 años por cualquier tipo de causa / Número total de menores de 5 años.',
      unidad: 'Por 100.000 nacimientos',
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
};
