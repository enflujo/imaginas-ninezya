const datos = {
  yas: [
    {
      nombre: 'Salud y nutrición',
      imagen: 'ya1',
      indicadores: [
        { nombre: 'Seguridad alimentaria (Acceso real a agua potable)', archivo: 'ya1-1', mun: true, dep: false },
        { nombre: 'Lactancia', archivo: 'ya1-2', mun: false, dep: false },
        { nombre: 'Nacidos vivos', archivo: 'ya1-3', mun: false, dep: false },
        { nombre: 'Control prenatal', archivo: 'ya1-4', mun: false, dep: true },
        { nombre: 'Crecimiento y desarrollo', archivo: 'ya1-5', mun: false, dep: false },
        { nombre: 'Desnutrición aguda y crónica', archivo: 'ya1-6', mun: false, dep: true },
        { nombre: 'Bajo peso al nacer', archivo: 'ya1-7', mun: false, dep: false },
      ],
    },
    {
      nombre: 'Educación inicial',
      imagen: 'ya2',
      indicadores: [
        { nombre: 'Tasa de violencia en menores de 5 años', archivo: 'ya2-1', mun: false, dep: false },
        {
          nombre: 'Número de niños y niñas menores de 1 año con registro civil',
          archivo: 'ya2-2',
          mun: false,
          dep: false,
        },
        {
          nombre:
            'Niños y niñas menores de 5 años por sitio o persona con quien permanecen la mayor parte del tiempo entre semana',
          archivo: 'ya2-3',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten',
          archivo: 'ya2-4',
          mun: false,
          dep: false,
        },
        { nombre: 'Cobertura bruta Transición', archivo: 'ya2-5', mun: false, dep: true },
      ],
    },
    {
      nombre: 'Educación preescolar, básica y media',
      imagen: 'ya3',
      indicadores: [
        { nombre: 'Tasa de cobertura Bruta', archivo: 'ya3-1', mun: false, dep: false },
        { nombre: 'Resultados Pruebas Saber 11 matemáticas', archivo: 'ya3-2', mun: false, dep: false },
        { nombre: 'Tasa de deserción Intra-anual sector oficial total', archivo: 'ya3-3', mun: false, dep: false },
        {
          nombre: 'Porcentaje de estudiantes estudiando en condición de extra-edad',
          archivo: 'ya3-4',
          mun: false,
          dep: false,
        },
      ],
    },
    {
      nombre: 'Ambiente sano',
      imagen: 'ya4',
      indicadores: [],
    },
    {
      nombre: 'Juego',
      imagen: 'ya5',
      indicadores: [],
    },
    {
      nombre: 'Participación',
      imagen: 'ya6',
      indicadores: [],
    },
    {
      nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
      imagen: 'ya7',
      indicadores: [],
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
        },
        {
          nombre:
            'Porcentaje de niños entre 0 y 59 meses de edad cuya talla al nacer es 2 desviaciones por debajo de su talla ideal',
          archivo: 'ya8-4',
          mun: false,
          dep: false,
        },
        {
          nombre: 'Proporción de niños alimentado exclusivamente con leche materna hasta los seis meses',
          archivo: 'ya8-5',
          mun: false,
          dep: false,
        },
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
          nombre: 'Porcentaje de Niños y niñas que fueron reclutados por algún grupo al margen de la ley',
          archivo: 'ya10-1',
          mun: false,
          dep: false,
        },
        { nombre: 'Ataque a escuelas por grupos al margen de la ley', archivo: 'ya10-2', mun: false, dep: false },
        {
          nombre: 'Número de delitos contra la libertad y la integridad sexual en desarrollo del conflicto armado',
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
