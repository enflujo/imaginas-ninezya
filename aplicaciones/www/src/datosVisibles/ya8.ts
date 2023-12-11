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
      explicacion:
        'Indica la proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      definicion: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      metodologia:
        'Número de jóvenes que han declarado haber experimentado violencia física / Número total de jóvenes en el mismo periodo y territorio * 100.',
      unidad: 'Tasa x 100.000',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto:
        'Las diversas manifestaciones de violencia se erigen como una problemática de salud pública por múltiples razones: en primer lugar, a causa de las severas repercusiones en el bienestar físico y emocional de las víctimas, así como en sus familias y la sociedad en su conjunto, conllevando a la pérdida de años de vida saludable. En segundo término, su alcance se manifiesta en la extensa cantidad de población afectada, especialmente niñas, niños, adolescentes, jóvenes y mujeres. Esto pone de manifiesto que la violencia de género no es simplemente un tema psicológico confinado al ámbito privado, sino un problema social y de interés público que exige una acción coordinada por parte del Estado, respaldada por un marco normativo nacional integral. En tercer lugar, estas violencias son prevenibles, ya que sus raíces se hallan en aspectos culturales y sociales, no en factores biológicos o hereditarios. En consecuencia, abordar este fenómeno requiere un enfoque holístico que combine la sensibilización, la educación y la promoción de cambios estructurales para erradicar sus fundamentos culturales arraigados.',
      interpretacion:
        'Un valor de 19% indica que 19 de cada 100 jóvenes han reportado el haber experimentado violencia física en un momento y territorio específicos.  Más Información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf.',
    },
    {
      nombre: 'Reestablecimiento de Derechos por Consumo de Sustancias',
      ruta: 'consumo-sustancias',
      archivo: 'ya8-2',
      hay_datos: true,
      explicacion:
        'Indica el número de procesos realizados de reestablecimientos de hechos por consumo de sustancias psicoactivas.',
      definicion:
        'Este indicador indica el número de reestablecimientos de derechos realizados por el ICBF relacionados con el consumo de sustancias psicoactivas.',
      metodologia:
        'Número de procesos administrativos de reestablecimientos de derechos por el consumo de sustancias psicoactivas en el mismo periodo y territorio.',
      unidad: 'Conteo',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto:
        'El uso de sustancias psicoactivas (SPA) se está distanciando de las metas de políticas antidrogas, según el Informe Mundial de Drogas de 2012 de la UNODC. Entre 2010 y 2019, el consumo de drogas aumentó en un 22%, alcanzando a aproximadamente 275 millones de personas en todo el mundo en el último año. Sin embargo, solo el 10% de estos usuarios experimentaron trastornos por consumo de drogas, lo que sugiere un distanciamiento de los objetivos prohibicionistas de un mundo libre de drogas.',
      interpretacion:
        'Un valor de 10 indica que el ICBF reestableció el derecho de 10 jóvenes por consumo de sustancias. Más información: https://www.icbf.gov.co/programas-y-estrategias/proteccion/consumo-sustancias-psicoactivas',
    },
    {
      nombre: 'Comisión de delitos en los que participaron menores de edad',
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
        'Un valor de 10% indica que en 10 de cada 100 delitos participaron menores de edad. Más información: https://www.corteidh.or.cr/tablas/r25958.pdf.',
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
