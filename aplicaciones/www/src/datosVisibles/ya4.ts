import type { DatosYa } from '@/tipos';

export const ya4: DatosYa = {
  nombre: 'Ambiente sano',
  imagen: 'ya4',
  ruta: 'ambiente-sano',
  definicion:
    'Es crucial reconocer el derecho de la niñez a un entorno saludable y propicio para su desarrollo. La falta de integración entre desarrollo económico y protección ambiental ha provocado una crisis, según el Informe sobre el Desarrollo Humano 2021 de las Naciones Unidas. Save The Children advierte sobre el doble riesgo de cambio climático para los niños nacidos en Colombia en 2020. La concentración urbana presenta desafíos ambientales, según el Banco Interamericano de Desarrollo. La sostenibilidad de las ciudades colombianas implica abordar la pobreza, mejorar servicios básicos, resolver desempleo, reducir emisiones y fomentar áreas verdes para el bienestar de la población infantil y adolescente.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Tasa de mortalidad por Enfermedad Diarreica Aguda (EDA) en menores de 5 años',
      ruta: 'mortalidad-eda',
      archivo: 'ya4-1',
      hay_datos: true,
      explicacion: 'Indica el número de defunciones en menores de 5 años por enfermedad diarreica aguda.',
      definicion:
        'Indica el número de defunciones en niños menores de 5 años por enfermedad diarreica aguda con respecto a la población de niños menores de 5 años.',
      metodologia: 'Número de muertes por EDA en menores de 5 años / Número total de menores de 5 años.',
      unidad: 'Por 100.000 menores de 5 años',
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
      umbral: 8.9,
      hay_datos: true,
      explicacion: 'Indica el número de defunciones en menores de 5 años por enfermedad infección respiratoria aguda.',
      definicion:
        'Indica el número de defunciones en niños menores de 5 años por infecciones respiratorias agudas con respecto a la población de niños menores de 5 años en un momento y territorio determinado.',
      metodologia: 'Número de muertes por IRA en menores de 5 años / Número total de menores de 5 años.',
      unidad: 'Por 100.000 menores de 5 años',
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
      umbral: 92.9,
      explicacion: 'Indica el acceso potencial a agua potable para el consumo humano.',
      definicion: 'Cobertura Total de Acueducto',
      metodologia: 'Se desconoce, metodología propia del SUI.',
      unidad: 'Tasa (Es un cálculo potencial)',
      fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
      fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
      desagregacion: 'Municipal',
      contexto:
        'La pandemia de la COVID-19 ha resaltado la  importancia del saneamiento, la higiene y el acceso a agua potable para prevenir y controlar enfermedades. La Organización Mundial de la Salud destaca que el lavado de manos es una medida altamente efectiva para reducir la propagación de patógenos A pesar de esto, Colombia aún carece de una cobertura universal de agua potable y saneamiento.',
      interpretacion:
        'Un valor de 70% significa que existen 70 familias que cuentan con acceso real a agua potable por cada 100 familias en un territorio y momento específicos. Más información sobre la importancia del acceso a agua potable: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
    },
    {
      nombre: 'Calidad del aire',
      ruta: 'calidad-aire',
      archivo: 'ya4-4',
      hay_datos: true,
      umbral: 100,
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
