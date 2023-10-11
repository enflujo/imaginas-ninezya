const datos = {
  yas: [
    {
      nombre: 'Salud y nutrición',
      imagen: 'ya1',
      indicadores: [
        { nombre: 'Cobertura de acueducto', archivo: 'ya1-1', mun: true, dep: false },
        { nombre: 'Cobertura alcantarillado', archivo: 'ya1-2', mun: false, dep: false },
        { nombre: 'Mortalidad menores de 5 años (Cualquier condición)', archivo: 'ya1-3', mun: false, dep: false },
        { nombre: 'Control prenatal', archivo: 'ya1-4', mun: false, dep: false },
        { nombre: 'Desnutrición aguda y crónica', archivo: 'ya1-5', mun: false, dep: true },
        { nombre: 'Por definir', archivo: 'ya1-6', mun: false, dep: false },
        { nombre: 'Bajo peso al nacer', archivo: 'ya1-7', mun: false, dep: false },
      ],
    },
    {
      nombre: 'Educación inicial',
      imagen: 'ya2',
      indicadores: [
        { nombre: 'Tasa de violencia en menores de 5 años', archivo: 'ya2-1', mun: false, dep: false },
        {
          nombre:
            'Niños y niñas menores de 5 años por sitio o persona con quien permanecen la mayor parte del tiempo entre semana',
          archivo: 'ya2-2',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten',
          archivo: 'ya2-3',
          mun: false,
          dep: false,
        },
        { nombre: 'Cobertura bruta Transición', archivo: 'ya2-4', mun: false, dep: true },
      ],
    },
    {
      nombre: 'Educación preescolar, básica y media',
      imagen: 'ya3',
      indicadores: [
        { nombre: 'Tasa de cobertura bruta media', archivo: 'ya3-1', mun: false, dep: false },
        { nombre: 'Resultados Pruebas Saber 11 matemáticas', archivo: 'ya3-2', mun: false, dep: false },
        { nombre: 'Resultados Pruebas Saber 11 español', archivo: 'ya3-3', mun: false, dep: false },
        { nombre: 'Tasa de deserción', archivo: 'ya3-4', mun: false, dep: false },
        { nombre: 'Tasa de repitencia', archivo: 'ya3-5', mun: false, dep: false },
        {
          nombre: 'Tasa de cobertura bruta Primaria',
          archivo: 'ya3-6',
          mun: false,
          dep: false,
        },
      ],
    },
    {
      nombre: 'Ambiente sano',
      imagen: 'ya4',
      indicadores: [
        { nombre: 'Tasa de mortalidad por Enfermedad Diarreica Aguda (EDA) en menores de 5 años', archivo: 'ya4-1', mun: false, dep: false },
        { nombre: 'Tasa de mortalidad por Infección Respiratoria Aguda (IRA) en menores de 5 años', archivo: 'ya4-2', mun: false, dep: false },
        { nombre: 'Porcentaje real de acceso a agua potable', archivo: 'ya4-3', mun: false, dep: false },
        { nombre: 'Calidad de aire', archivo: 'ya4-4', mun: false, dep: false },
        
      ],
    },
    {
      nombre: 'Juego',
      imagen: 'ya5',
      indicadores: [
        { nombre: 'Por definir 1', archivo: 'ya5-1', mun: false, dep: false },
        { nombre: 'Por definir 2', archivo: 'ya5-2', mun: false, dep: false },
        { nombre: 'Por definir 3', archivo: 'ya5-3', mun: false, dep: false },
        { nombre: 'Por definir 4', archivo: 'ya5-4', mun: false, dep: false },
        { nombre: 'Por definir 5', archivo: 'ya5-5', mun: false, dep: false },
      ],
    },
    {
      nombre: 'Participación',
      imagen: 'ya6',
      indicadores: [
        { nombre: 'Por definir 1', archivo: 'ya6-1', mun: false, dep: false },
        { nombre: 'Por definir 2', archivo: 'ya6-2', mun: false, dep: false },
        { nombre: 'Por definir 3', archivo: 'ya6-3', mun: false, dep: false },
        { nombre: 'Por definir 4', archivo: 'ya6-4', mun: false, dep: false },
        { nombre: 'Por definir 5', archivo: 'ya6-5', mun: false, dep: false },
      ],
    },
    {
      nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
      imagen: 'ya7',
      indicadores: [
        { nombre: 'Por definir 1', archivo: 'ya7-1', mun: false, dep: false },
        { nombre: 'Por definir 2', archivo: 'ya7-2', mun: false, dep: false },
        { nombre: 'Por definir 3', archivo: 'ya7-3', mun: false, dep: false },
        { nombre: 'Por definir 4', archivo: 'ya7-4', mun: false, dep: false },
        { nombre: 'Por definir 5', archivo: 'ya7-5', mun: false, dep: false },
      ],
    },
    {
      nombre: 'Protección frente a cualquier tipo de violencia',
      imagen: 'ya8',
      indicadores: [
        {
          nombre: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses',
          archivo: 'ya8-1',
          mun: false,
          dep: false,
        },
        {
          nombre:
            'Número de procesos administrativos de reestablecimientos de derechos por el consumo de sustancias psicoactivas',
          archivo: 'ya8-2',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Número de menores de edad que participaron en la comisión de un delito',
          archivo: 'ya8-3',
          mun: false,
          dep: false,
        }
      ],
    },
    {
      nombre:
        'Adolescentes con justicia restaurativa y pedagógica (sistema de responsabilidad penal para adolescentes - SRPA)',
      imagen: 'ya9',
      indicadores: [
        {
          nombre: 'Porcentaje de adolescentes que ingresan más de una vez al SRPA por presunta comisión de un delito',
          archivo: 'ya9-1',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Tiempo promedio que dura un adolescente o jóven en medida de internamiento preventivo',
          archivo: 'ya9-2',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Número de casos abordados/finalizados en los Programas de Justicia Restaurativa del país',
          archivo: 'ya9-3',
          mun: false,
          dep: false,
        },
        {
          nombre:
            'Porcentaje de adolescentes y/o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo con acceso al sistema educativo',
          archivo: 'ya9-4',
          mun: false,
          dep: false,
        },
        {
          nombre:
            'Porcentaje de jóvenes del SRPA que participan en algún programa para la vinculación laboral (por ejemplo: Número de jóvenes con vinculación laboral por medio del proyecto sueños)',
          archivo: 'ya9-5',
          mun: false,
          dep: false,
        },
      ],
    },
    {
      nombre: 'Cultura de paz, reconciliación y convivencia',
      imagen: 'ya10',
      indicadores: [
        {
          nombre: 'Vinculación de Niños, Niñas y Adolescentes a actividades relacionadas con grupos',
          archivo: 'ya10-1',
          mun: false,
          dep: false,
        },
        { nombre: 'Ataque a escuelas por grupos al margen de la ley', archivo: 'ya10-2', mun: false, dep: false },
        {
          nombre: 'Delitos contra la libertad y la integridad sexual en el desarrollo del conflicto',
          archivo: 'ya10-3',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Bajo logro educativo (porcentaje de niños que se encuentran cursando en extra edad)',
          archivo: 'ya10-4',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Maltrato Físico (número de ataques a menores de edad por parte de un cuidador, familiar o padre)',
          archivo: 'ya10-5',
          mun: false,
          dep: false,
        },
      ],
    },
  ],
};

datos.yas.sort();

export default datos;
