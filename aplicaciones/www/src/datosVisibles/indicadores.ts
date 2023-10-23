interface DatosComunes {
  nombre: string;
  ruta: string;
}

interface DatosIndicador extends DatosComunes {
  archivo: string;
  mun: boolean;
  dep: boolean;
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
    indicadores: [
      { nombre: 'Cobertura de acueducto', ruta: 'acueducto', archivo: 'ya1-1', mun: true, dep: false },
      { nombre: 'Cobertura alcantarillado', ruta: 'alcantarillado', archivo: 'ya1-2', mun: false, dep: false },
      {
        nombre: 'Mortalidad menores de 5 años (Cualquier condición)',
        ruta: 'mortalidad',
        archivo: 'ya1-3',
        mun: false,
        dep: false,
      },
      { nombre: 'Control prenatal', ruta: 'control-prenatal', archivo: 'ya1-4', mun: false, dep: false },
      { nombre: 'Desnutrición aguda y crónica', ruta: 'desnutricion', archivo: 'ya1-5', mun: false, dep: true },
      { nombre: 'Por definir', ruta: 'por-definir', archivo: 'ya1-6', mun: false, dep: false },
      { nombre: 'Bajo peso al nacer', ruta: 'bajo-peso', archivo: 'ya1-7', mun: false, dep: false },
    ],
  },
  {
    nombre: 'Educación inicial',
    imagen: 'ya2',
    ruta: 'educacion-inicial',
    indicadores: [
      {
        nombre: 'Tasa de violencia en menores de 5 años',
        ruta: 'acueducto',
        archivo: 'ya2-1',
        mun: false,
        dep: false,
      },
      {
        nombre:
          'Niños y niñas menores de 5 años por sitio o persona con quien permanecen la mayor parte del tiempo entre semana',
        ruta: 'acueducto',
        archivo: 'ya2-2',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Niños y niñas menores de 5 años por tipo de establecimiento al que asisten',
        ruta: 'acueducto',
        archivo: 'ya2-3',
        mun: false,
        dep: false,
      },
      { nombre: 'Cobertura bruta Transición', ruta: 'acueducto', archivo: 'ya2-4', mun: false, dep: true },
    ],
  },
  {
    nombre: 'Educación preescolar, básica y media',
    imagen: 'ya3',
    ruta: 'acueducto',
    indicadores: [
      { nombre: 'Tasa de cobertura bruta media', ruta: 'acueducto', archivo: 'ya3-1', mun: false, dep: false },
      {
        nombre: 'Resultados Pruebas Saber 11 matemáticas',
        ruta: 'acueducto',
        archivo: 'ya3-2',
        mun: false,
        dep: false,
      },
      { nombre: 'Resultados Pruebas Saber 11 español', ruta: 'acueducto', archivo: 'ya3-3', mun: false, dep: false },
      { nombre: 'Tasa de deserción', ruta: 'acueducto', archivo: 'ya3-4', mun: false, dep: false },
      { nombre: 'Tasa de repitencia', ruta: 'acueducto', archivo: 'ya3-5', mun: false, dep: false },
      {
        nombre: 'Tasa de cobertura bruta Primaria',
        ruta: 'acueducto',
        archivo: 'ya3-6',
        mun: false,
        dep: false,
      },
    ],
  },
  {
    nombre: 'Ambiente sano',
    imagen: 'ya4',
    ruta: 'acueducto',
    indicadores: [
      {
        nombre: 'Tasa de mortalidad por Enfermedad Diarreica Aguda (EDA) en menores de 5 años',
        ruta: 'acueducto',
        archivo: 'ya4-1',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Tasa de mortalidad por Infección Respiratoria Aguda (IRA) en menores de 5 años',
        ruta: 'acueducto',
        archivo: 'ya4-2',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Porcentaje real de acceso a agua potable',
        ruta: 'acueducto',
        archivo: 'ya4-3',
        mun: false,
        dep: false,
      },
      { nombre: 'Calidad de aire', ruta: 'acueducto', archivo: 'ya4-4', mun: false, dep: false },
    ],
  },
  {
    nombre: 'Juego',
    imagen: 'ya5',
    ruta: 'acueducto',
    indicadores: [
      { nombre: 'Por definir 1', ruta: 'acueducto', archivo: 'ya5-1', mun: false, dep: false },
      { nombre: 'Por definir 2', ruta: 'acueducto', archivo: 'ya5-2', mun: false, dep: false },
      { nombre: 'Por definir 3', ruta: 'acueducto', archivo: 'ya5-3', mun: false, dep: false },
      { nombre: 'Por definir 4', ruta: 'acueducto', archivo: 'ya5-4', mun: false, dep: false },
      { nombre: 'Por definir 5', ruta: 'acueducto', archivo: 'ya5-5', mun: false, dep: false },
    ],
  },
  {
    nombre: 'Participación',
    imagen: 'ya6',
    ruta: 'acueducto',
    indicadores: [
      { nombre: 'Por definir 1', ruta: 'acueducto', archivo: 'ya6-1', mun: false, dep: false },
      { nombre: 'Por definir 2', ruta: 'acueducto', archivo: 'ya6-2', mun: false, dep: false },
      { nombre: 'Por definir 3', ruta: 'acueducto', archivo: 'ya6-3', mun: false, dep: false },
      { nombre: 'Por definir 4', ruta: 'acueducto', archivo: 'ya6-4', mun: false, dep: false },
      { nombre: 'Por definir 5', ruta: 'acueducto', archivo: 'ya6-5', mun: false, dep: false },
    ],
  },
  {
    nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
    imagen: 'ya7',
    ruta: 'acueducto',
    indicadores: [
      { nombre: 'Por definir 1', ruta: 'acueducto', archivo: 'ya7-1', mun: false, dep: false },
      { nombre: 'Por definir 2', ruta: 'acueducto', archivo: 'ya7-2', mun: false, dep: false },
      { nombre: 'Por definir 3', ruta: 'acueducto', archivo: 'ya7-3', mun: false, dep: false },
      { nombre: 'Por definir 4', ruta: 'acueducto', archivo: 'ya7-4', mun: false, dep: false },
      { nombre: 'Por definir 5', ruta: 'acueducto', archivo: 'ya7-5', mun: false, dep: false },
    ],
  },
  {
    nombre: 'Protección frente a cualquier tipo de violencia',
    imagen: 'ya8',
    ruta: 'acueducto',
    indicadores: [
      {
        nombre: 'Proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses',
        ruta: 'acueducto',
        archivo: 'ya8-1',
        mun: false,
        dep: false,
      },
      {
        nombre:
          'Número de procesos administrativos de reestablecimientos de derechos por el consumo de sustancias psicoactivas',
        ruta: 'acueducto',
        archivo: 'ya8-2',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Número de menores de edad que participaron en la comisión de un delito',
        ruta: 'acueducto',
        archivo: 'ya8-3',
        mun: false,
        dep: false,
      },
    ],
  },
  {
    nombre:
      'Adolescentes con justicia restaurativa y pedagógica (sistema de responsabilidad penal para adolescentes - SRPA)',
    imagen: 'ya9',
    ruta: 'acueducto',
    indicadores: [
      {
        nombre: 'Porcentaje de adolescentes que ingresan más de una vez al SRPA por presunta comisión de un delito',
        ruta: 'acueducto',
        archivo: 'ya9-1',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Tiempo promedio que dura un adolescente o jóven en medida de internamiento preventivo',
        ruta: 'acueducto',
        archivo: 'ya9-2',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Número de casos abordados/finalizados en los Programas de Justicia Restaurativa del país',
        ruta: 'acueducto',
        archivo: 'ya9-3',
        mun: false,
        dep: false,
      },
      {
        nombre:
          'Porcentaje de adolescentes y/o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo con acceso al sistema educativo',
        ruta: 'acueducto',
        archivo: 'ya9-4',
        mun: false,
        dep: false,
      },
      {
        nombre:
          'Porcentaje de jóvenes del SRPA que participan en algún programa para la vinculación laboral (por ejemplo: Número de jóvenes con vinculación laboral por medio del proyecto sueños)',
        ruta: 'acueducto',
        archivo: 'ya9-5',
        mun: false,
        dep: false,
      },
    ],
  },
  {
    nombre: 'Cultura de paz, reconciliación y convivencia',
    imagen: 'ya10',
    ruta: 'acueducto',
    indicadores: [
      {
        nombre: 'Vinculación de Niños, Niñas y Adolescentes a actividades relacionadas con grupos',
        ruta: 'acueducto',
        archivo: 'ya10-1',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Ataque a escuelas por grupos al margen de la ley',
        ruta: 'acueducto',
        archivo: 'ya10-2',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Delitos contra la libertad y la integridad sexual en el desarrollo del conflicto',
        ruta: 'acueducto',
        archivo: 'ya10-3',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Bajo logro educativo (porcentaje de niños que se encuentran cursando en extra edad)',
        ruta: 'acueducto',
        archivo: 'ya10-4',
        mun: false,
        dep: false,
      },
      {
        nombre: 'Maltrato Físico (número de ataques a menores de edad por parte de un cuidador, familiar o padre)',
        ruta: 'acueducto',
        archivo: 'ya10-5',
        mun: false,
        dep: false,
      },
    ],
  },
];

export default datos;
