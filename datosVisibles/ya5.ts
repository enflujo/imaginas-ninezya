import type { DatosYa } from '../tipos/compartidos';

export const ya5: DatosYa = {
  nombre: 'Juego',
  imagen: 'ya5',
  ruta: 'juego',
  definicion: `El juego es un derecho fundamental en el desarrollo humano. Posibilita a las personas adquirir y desarrollar las competencias que requieren para su vida y para convivir con los demás. Con el juego los seres humanos aprenden a ser solidarios, empáticos, a dar sus opiniones y escuchar las opiniones de los demás. Aprenden los pilares de la democracia, como lo han evidenciado diferentes investigaciones, entre ellas la investigación longitudinal realizada por la Universidad Nacional durante cinco años en diversos territorios del país (2019). Esta concluyó que los niños y las niñas que pueden participar de espacios de juego, como una acción libre, creativa y placentera, desarrollan en un mayor nivel habilidades socioemocionales como la empatía, la autorregulación y la expresión de emociones.

  Los niños y las niñas juegan independientemente de su condición social o económica y se les debe garantizar escenarios seguros y dignos para el ejercicio de este derecho. Las ludotecas, los parques y los ambientes lúdicos son escenarios significativos cuando están dispuestos con calidad y fácil acceso para las infancias en cada una de sus comunidades rurales, indígenas, afros, rom, con discapacidad, entre otras.

  El juego, comprendido como derecho, cobra un nuevo lugar en la sociedad en clave de desarrollo integral de las niñas y los niños, lo cual fue reconocido por primera vez en el Foro Mundial de los Pueblos: la Asamblea General de las Naciones Unidas, el 20 de noviembre de 1959, mediante Resolución N°1386 de ese año proclamó la Declaración de los Derechos del Niño.`,
  hay_datos: false,
  indicadores: [
    {
      nombre:
        'Niños y niñas menores de 5 años por sitio o persona con quien permanecen la mayor parte del tiempo entre semana (%)',
      ruta: 'tiempo-permanencia-semana',
      archivo: 'ya5-1',
      hay_datos: true,
      explicacion_umbral: 'No existe un umbral definidio.',
      explicacion: 'Indica como los niños y niñas menores de 5 años pasan su tiempo durante los días de semana.',
      definicion:
        'Este indicador mide el lugar o con quién permanece la mayor parte del tiempo los niños y niñas durante los días de semana.',
      metodologia:
        'Se calcula agrupando los datos por código de departamento (coddepto) y categoría de P51. Luego, se suma la frecuencia ponderada (FEX_C.x) para cada grupo. Posteriormente, se calcula el porcentaje dividiendo la frecuencia ponderada de cada categoría por la suma total de la frecuencia ponderada del municipio y multiplicando por 100. Finalmente, se asigna el año correspondiente (anno).',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Encuesta Nacional de Calidad de Vida - ENCV del Departamento Administrativo Nacional de Estadísticas - DANE',
      fuente_denominador:
        'Encuesta Nacional de Calidad de Vida - ENCV del Departamento Administrativo Nacional de Estadísticas - DANE',
      desagregacion: 'Departamental',
      contexto:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
      interpretacion:
        'Este indicador ayuda a identificar los principales entornos de los niños y niñas durante los días de semana, como el hogar, instituciones educativas, centros de cuidado infantil, entre otros. Un alto porcentaje de niños que permanecen en entornos educativos o de cuidado infantil puede indicar un buen acceso a servicios de apoyo, mientras que un alto porcentaje en el hogar puede resaltar la necesidad de fortalecer programas de apoyo familiar.',
      categorias: [
        ['Colegio', 'Asiste a un hogar comunitario, jardín, centro de desarrollo infantil o colegio'],
        ['Casa', 'Con su padre o madre en la casa'],
        ['Trabajo', 'Con su padre o madre en el trabajo'],
        ['Niñero/a', 'Con empleado/a o niñero/a en la casa'],
        ['Mayor de edad', 'Al cuidado de un/a pariente de 18 años o más'],
        ['Menor de edad', 'Al cuidado de un/a pariente menor de 18 años'],
        ['Solo', 'En casa solo'],
        ['Otro', 'Otro'],
      ],
    },
    {
      nombre: 'Número de ludotecas o bibliotecas por cada 1.000 niñas y niños ',
      ruta: 'asistencia-establecimiento-educativo-2-5',
      archivo: 'ya5-3',
      hay_datos: false,
      definicion:
        'Se refiere a la cantidad de centros de juego como ludotectas y otros espacios destinados al juego de niñas y niños de primera infancia, infancia y adolescencia de caracter público. El juego es un derecho  fundamental en el desarrollo integral de las niñas y los niños, que requiere de escenarios significativos de calidad y fácil acceso para todas las comunidades: rurales, indígenas, afros, rom, con discapacidad, entre otras.',
      metodologia: 'No. de espacios de juego / ludecas / No. y niños de 0 a 17 años * 1.000 niñas/os',
      unidad: 'Por cada 1.000 niñas y niñoos',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador cuantifica el número de ludotecas y escenarios destinados exclusivamente el juego espontáneo de niñas, niños y adolescentes.',
      responsable: 'Departamento Nacional de Planeación (DNP)',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Número de parques o espacios de juego por cada 1.000 niñas y niños',
      ruta: 'agresion-2-5',
      archivo: 'ya5-2',
      hay_datos: false,
      definicion:
        'Se refiere a espacios públicos destinados para destinados y usados para el juego espontáneo y libre como parques y escenarios deportivos públicos existentes en los municipios del país. El Plan Nacional de Desarrollo (PND) 2022-2026 contempla una línea de política pública que impulse el juego y la ampliación de espacios de recreación y juego; así como la construcción de nuevos parques públicos y entornos para el desarrollo de habilidades, vocaciones y talentos de niñas y niños, conforme a la solicitud que ellas y ellos hicieron en los Diálogos Regionales Vinculantes. ',
      metodologia:
        'No. total de parques o espacios de juego / No. total de población menor de 18 años durante el mismo período x 1.000',
      unidad: 'Por cada 1.000 niñas y niños',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador cuantifica el número de parques destinados y usados para el juego espontáneo y libre y escenarios públicos seguros  implementados en los diferentes mucipios de Colombia, destinados para que los habitantes puedan jugar en libertad, de acuerdo con el número de habitantes de cada municipio.',
      responsable: 'Ministerio de Educación  y Ministerio del Deporte.',
      compete_a: 'Ministerio de Educación, Ministerio del Deporte y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-12 años que con frecuencia leen u observan libros de cuentos e historias',
      ruta: 'lectura-2-5',
      archivo: 'ya5-3',
      hay_datos: false,
      definicion:
        'Este indicador puede ser utilizado para medir el acceso y la participación de los niños en experiencias de lectura, lo cual es crucial para el desarrollo del lenguaje, la cognición y la alfabetización. La exposición temprana a libros y la práctica de la lectura pueden tener impactos significativos en el desarrollo del vocabulario y la comprensión del lenguaje.',
      metodologia:
        'No. de niños y niñas de 2-12 años que con frecuencia cuentan en su hogar con adulto que lee junto a el libros de cuentos o historias / Número total de niños y niñas de 2-12 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE: <br/><br/>¿Con qué frecuencia realiza actividades de lectura con el menor de 5 años que reside en su hogar? <br/><br/>Opciones de respuesta: <br/>1. Todos los días. <br/>2. Al menos una vez a la semana pero no cada día. <br/>3. Al menos una vez al mes, pero no cada semana. <br/>4. Al menos una vez al mes, pero no todos los meses.',
      responsable: 'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-12 años que con frecuencia juegan con un adulto responsable',
      ruta: 'juego-adulto-2-5',
      archivo: 'ya5-6',
      hay_datos: false,
      definicion:
        'La importancia de este indicador radica en reconocer la influencia y el papel positivo que los adultos, especialmente los cuidadores y educadores, pueden tener en el desarrollo de habilidades sociales, emocionales y cognitivas de los niños. <br/><br/>Jugar con adultos responsables no solo proporciona oportunidades para la diversión y la recreación, sino que también puede contribuir al aprendizaje, la comunicación y la formación de vínculos afectivos.',
      metodologia:
        'Número de niños y niñas de 2-12 años que con frecuencia juegan con un adulto responsable / Número total de niños y niñas de 2-12 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE: <br/><br/>¿Con qué frecuencia juega con el menor de 5 años que reside en su hogar? <br/><br/>Opciones de respuesta:<br/>1. Todos los días. <br/>2. Al menos una vez a la semana pero no cada día. <br/>3. Al menos una vez al mes, pero no cada semana. <br/>4. Al menos una vez al mes, pero no todos los meses.',
      responsable:
        'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
  ],
};
