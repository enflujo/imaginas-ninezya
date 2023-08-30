const datos = {
  yas: [
    {
      nombre: 'Salud y nutrición',
      indicadores: [
        { nombre: 'Seguridad alimentaria (Acceso real a agua potable)' },
        { nombre: 'Lactancia' },
        { nombre: 'Nacidos vivos' },
        { nombre: 'Control prenatal' },
        { nombre: 'Crecimiento y desarrollo' },
        { nombre: 'Desnutrición aguda y crónica' },
        { nombre: 'Bajo peso al nacer' },
      ],
    },
    {
      nombre: 'Educación inicial',
      indicadores: [
        { nombre: 'Tasa de violencia en menores de 5 años' },
        { nombre: 'Número de niños y niñas menores de 1 año con registro civil' },
        {
          nombre:
            'Niños y niñas menores de 5 años por sitio o persona con quien permanecen la mayor parte del tiempo entre semana',
        },
        { nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten' },
        { nombre: 'Cobertura bruta Transición' },
      ],
    },
    {
      nombre: 'Educación preescolar, básica y media',
      indicadores: [
        { nombre: 'Tasa de cobertura Bruta' },
        { nombre: 'Resultados Pruebas Saber 11 matemáticas' },
        { nombre: 'Tasa de deserción Intra-anual sector oficial total' },
        { nombre: 'Porcentaje de estudiantes estudiando en condición de extra-edad' },
      ],
    },
    {
      nombre: 'Ambiente sano',
      indicadores: [{ nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }],
    },
    {
      nombre: 'Juego',
      indicadores: [{ nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }],
    },
    {
      nombre: 'Participación',
      indicadores: [{ nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }],
    },
    {
      nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
      indicadores: [{ nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }, { nombre: '' }],
    },
    {
      nombre: 'Protección frente a cualquier tipo de violencia',
      indicadores: [
        { nombre: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses' },
        {
          nombre:
            'Número de procesos administrativos de reestablecimientos de derechos por el consumo de sustancias psicoactivas',
        },
        { nombre: 'Número de menores de edad que participaron en la comisión de un delito' },
        {
          nombre:
            'Porcentaje de niños entre 0 y 59 meses de edad cuya talla al nacer es 2 desviaciones por debajo de su talla ideal',
        },
        { nombre: 'Proporción de niños alimentado exclusivamente con leche materna hasta los seis meses' },
      ],
    },
    {
      nombre:
        'Adolescentes con justicia restaurativa y pedagógica (sistema de responsabilidad penal para adolescentes - SRPA)        ',
      indicadores: [
        { nombre: 'Porcentaje de adolescentes que ingresan más de una vez al SRPA por presunta comisión de un delito' },
        {
          nombre: 'Tiempo promedio que dura un adolescente o jóven en medida de internamiento preventivo',
        },
        { nombre: 'Número de casos abordados/finalizados en los Programas de Justicia Restaurativa del país' },
        {
          nombre:
            'Porcentaje de adolescentes y/o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo con acceso al sistema educativo',
        },
        {
          nombre:
            'Porcentaje de jóvenes del SRPA que participan en algún programa para la vinculación laboral (por ejemplo: Número de jóvenes con vinculación laboral por medio del proyecto sueños)',
        },
      ],
    },
    {
      nombre: 'Cultura de paz, reconciliación y convivencia',
      indicadores: [
        { nombre: 'Porcentaje de Niños y niñas que fueron reclutados por algún grupo al margen de la ley' },
        {
          nombre: 'Ataque a escuelas por grupos al margen de la ley',
        },
        { nombre: 'Número de delitos contra la libertad y la integridad sexual en desarrollo del conflicto armado' },
        {
          nombre: 'Bajo logro educativo (porcentaje de niños que se encuentran cursando en extra edad)',
        },
        { nombre: 'Maltrato Físico (número de ataques a menores de edad por parte de un cuidador, familiar o padre)' },
      ],
    },
  ],
};

datos.yas.sort();

export default datos;
