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
      nombre: 'Jóvenes que declaran haber experimentado violencia física',
      ruta: 'violencia-fisica',
      archivo: 'ya8-1',
      hay_datos: true,
      explicacion_umbral: 'Por definir',
      explicacion:
        'Indica la proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      definicion: 'Indica el número de jóvenes que han declarado haber experimentado violencia física en un mismo momento y territorio dado por cada 100.000 menores.',
      metodologia:
        'Número de jóvenes que han declarado haber experimentado violencia física en un mismo momento y territorio dado / Número total de jóvenes en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 menores',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto:
        'Las diversas manifestaciones de violencia se erigen como una problemática de salud pública por múltiples razones: en primer lugar, a causa de las severas repercusiones en el bienestar físico y emocional de las víctimas, así como en sus familias y la sociedad en su conjunto, conllevando a la pérdida de años de vida saludable. En segundo término, su alcance se manifiesta en la extensa cantidad de población afectada, especialmente niñas, niños, adolescentes, jóvenes y mujeres. Esto pone de manifiesto que la violencia de género no es simplemente un tema psicológico confinado al ámbito privado, sino un problema social y de interés público que exige una acción coordinada por parte del Estado, respaldada por un marco normativo nacional integral. En tercer lugar, estas violencias son prevenibles, ya que sus raíces se hallan en aspectos culturales y sociales, no en factores biológicos o hereditarios. En consecuencia, abordar este fenómeno requiere un enfoque holístico que combine la sensibilización, la educación y la promoción de cambios estructurales para erradicar sus fundamentos culturales arraigados.',
      interpretacion:
        'Un valor de 19  indica que 19 de cada 100,000 menores de edad han experimentado violencia física en un momento y territorio específicos. Más información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf.',
    },
    {
      nombre: 'Comisión de delitos en los que participaron menores de edad',
      ruta: 'menores-delito',
      archivo: 'ya8-3',
      hay_datos: true,
      explicacion_umbral: 'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion: 'Indica la proporción de delitos en los que participaron menores de edad.',
      definicion: 'Indica la proporción de delitos en los que participaron menores de edad en un mismo momento y territorio por cada 100.000 menores.',
      metodologia:
        'Número de delitos en los que participaron menores de edad / Número total de delitos en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 menores',
      fuente_numerador: 'Policía Nacional',
      fuente_denominador: 'Policía Nacional',
      desagregacion: 'Municipal',
      contexto: 'Las diversas manifestaciones de violencia se erigen como una problemática de salud pública por múltiples razones: en primer lugar, a causa de las severas repercusiones en el bienestar físico y emocional de las víctimas, así como en sus familias y la sociedad en su conjunto, conllevando a la pérdida de años de vida saludable. En segundo término, su alcance se manifiesta en la extensa cantidad de población afectada, especialmente niñas, niños, adolescentes, jóvenes y mujeres. Esto pone de manifiesto que la violencia de género no es simplemente un tema psicológico confinado al ámbito privado, sino un problema social y de interés público que exige una acción coordinada por parte del Estado, respaldada por un marco normativo nacional integral. En tercer lugar, estas violencias son prevenibles, ya que sus raíces se hallan en aspectos culturales y sociales, no en factores biológicos o hereditarios. En consecuencia, abordar este fenómeno requiere un enfoque holístico que combine la sensibilización, la educación y la promoción de cambios estructurales para erradicar sus fundamentos culturales arraigados.',
      interpretacion:
        'Un valor de 10% indica que en 10 de cada 100 delitos participaron menores de edad. Más información: https://www.corteidh.or.cr/tablas/r25958.pdf.',
    },
    {
      nombre: 'Homicidios a menores',
      ruta: 'homicidios-menores',
      archivo: 'ya8-4',
      hay_datos: true,
      explicacion_umbral: 'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion: 'Indica el número de menores de edad que han sido asesinados.',
      definicion: 'Indica el número de jóvenes que han sido asesinados en un mismo momento y territorio dado por cada 100.000 menores.',
      metodologia: 'Número de menores de edad que han sido asesinados en un mismo momento y territorio dado / Número total de menores de edad en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 menores',
      fuente_numerador: 'Policía Nacional',
      fuente_denominador: 'Policía Nacional',
      desagregacion: 'Municipal',
      contexto: 'En niños, niñas y adolescentes, las causas del suicidio varían según la edad y se presentan principalmente en niños, representando el 58% de los casos, en comparación con las niñas, que constituyen el 42%, en un promedio de los últimos 8 años. Los factores que contribuyen al suicidio en la infancia están relacionados con presenciar eventos dolorosos (como el divorcio o la pérdida de un ser querido), problemas en las relaciones paterno-filiales, dificultades escolares, llamadas de atención de padres o maestros de carácter humillante, búsqueda de afecto y atención, deseos de reunirse con un ser querido fallecido, trastornos de personalidad y depresión (Cabra, O.I. et al., 2010). El suicidio en niños, niñas y adolescentes, considerado como una muerte violenta y un problema de salud pública, requiere una atención integral y acciones coordinadas desde diversos sectores estatales, sociales y familiares. En este contexto, es esencial implementar programas y estrategias orientadas a la prevención, basadas en el principio de corresponsabilidad.',
      interpretacion: 'Un valor de 5  indica que 5 de cada 100,000 menores de edad han sido asesinados  en un momento y territorio específicos.  Más Información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf.',
    },
  ],
};
