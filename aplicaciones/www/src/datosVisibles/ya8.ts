import type { DatosYa } from '@/tipos';

export const ya8: DatosYa = {
  nombre: 'Protección frente a cualquier tipo de violencia',
  imagen: 'ya8',
  ruta: 'proteccion-violencia',
  definicion:
    'Es esencial erradicar la violencia contra la niñez para lograr la prosperidad universal, como lo establece la Agenda 2030 de Naciones Unidas. El Objetivo de Desarrollo Sostenible (ODS) 16 enfatiza la necesidad de sociedades pacíficas. La meta global 16.2 busca poner fin a diversas formas de violencia contra los niños. La Organización Mundial de la Salud define la violencia como el uso deliberado de la fuerza, con impactos significativos en el desarrollo infantil. En Colombia, la presencia alarmante de violencia destaca la urgencia de abordar este problema, ya que afecta el bienestar físico, emocional y psicológico de la niñez, con consecuencias a largo plazo.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses',
      ruta: 'violencia-fisica',
      archivo: 'ya8-1',
      hay_datos: true,
      explicacion:
        'Indica la proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      definicion: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      metodologia:
        'Número de jóvenes que han declarado haber experimentado violencia física / Número total de jóvenes en el mismo periodo y territorio *100.',
      unidad: 'Tasa x 100.000',
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
      explicacion:
        'Indica el número de procesos realizados de reestablecimientos de hechos por consumo de sustancias psicoactivas.',
      definicion:
        'Este indicador indica el número de reestablecimientos de derechos realizados por el ICBF relacionados con el consumo de sustancias psicoactivas.',
      metodologia:
        'Número de Procesos Administrativos de Reestablecimientos de Derechos por el Consumo de Sustancias Psicoactivas en el mismo periodo y territorio.',
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
      explicacion: 'Indica la proporción de delitos en los que participaron menores de edad.',
      definicion: 'Indica la proporción de delitos en los que participaron menores de edad.',
      metodologia:
        'Número de delitos en los que participaron menores de edad / Número total de delitos en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Policía Nacional',
      fuente_denominador: 'Policía Nacional',
      desagregacion: 'Municipal',
      contexto: 'No aplica.',
      interpretacion:
        'Un valor de 10 indica que el ICBF reestableció el derecho de 10 jóvenes por consumo de sustancias  Más Información: https://www.corteidh.or.cr/tablas/r25958.pdf',
    },
  ],
};
