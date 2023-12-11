import type { DatosYa } from '@/tipos';

export const ya5: DatosYa = {
  nombre: 'Juego',
  imagen: 'ya5',
  ruta: 'juego',
  definicion:
    'Es esencial reconocer que la niñez tiene el derecho de jugar, un derecho consagrado en normativas internacionales y nacionales. El juego no solo es una actividad recreativa; es crucial para el desarrollo integral de los niños, contribuyendo a habilidades socioemocionales y competencias ciudadanas. Para garantizar este derecho, se deben proporcionar espacios seguros y accesibles, independientemente de la condición social o económica de los niños, incluyendo comunidades rurales, indígenas, afrodescendientes, rom y personas con discapacidad. Aunque el juego está respaldado por diversas políticas y leyes, el desafío radica en materializar este reconocimiento en la realidad cotidiana.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'Niños y niñas de 2-5 años con dificultad funcional en el juego',
      ruta: 'dificultad-funcional-2-5',
      archivo: 'ya5-1',
      hay_datos: false,
      explicacion: '',
      definicion: 'Porcentaje de niños y niñas de 2-5 años con dificultad funcional en el dominio de juego.',
      metodologia:
        'Número de niños y niñas de 2-5 años con dificultad funcional en el dominio de juego / Número de niños y niñas de 2-5 años.',
      unidad: 'Porcentaje | Tasa',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion:
        'La dificultad funcional para niños de 2 a 5 años se establece a partir de una encuesta dirigida a padres y cuidadores, dentro de las opciones de respuesta a la pregunta podemos identificar dos "Mucha dificultad" o "No puede realizar la actividad" (UNICEF, Argentina 2020).',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre:
        'Niños y niñas de 2-5 años que no asisten a un establecimiento educativo, guardería, jardín infantil o preescolar',
      ruta: 'asistencia-establecimiento-educativo-2-5',
      archivo: 'ya5-2',
      hay_datos: false,
      explicacion: '',
      definicion:
        'Porcentaje de niños y niñas de 2-5 años que no asisten a un establecimiento educativo, guardería, jardín infantil o preescolar.',
      metodologia:
        'Número de niños y niñas de 2-5 años que no asisten a un establecimiento educativo, jardín infantil o preescolar.',
      unidad: 'Porcentaje | Tasa',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion:
        'De acuerdo con el MEN, los objetivos explícitos en términos de asistencia escolar en el plan nacional de desarrollo es de tener una tasa de asistencia del 100%.',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos.',
      ruta: 'agresion-2-5',
      archivo: 'ya5-3',
      hay_datos: false,
      explicacion: '',
      definicion:
        'Porcentaje de niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos.',
      metodologia:
        'Número de niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos / Número total de niños y niñas de 2-5 años.',
      unidad: 'Porcentaje | Tasa',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion:
        '"Se debe formular la siguiente pregunta dentro de la encuesta de la Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE. En comparación con los niños/as de la misma edad, ¿con qué frecuencia patea, muerde o golpea (nombre) a otros niños/as o adultos? | Opciones de Respuesta como más o mucho más son indicador de este tipo conducta.',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia cuentan en su hogar con adulto que lee junto a él',
      ruta: 'lectura-2-5',
      archivo: 'ya5-4',
      hay_datos: false,
      explicacion: '',
      definicion:
        'Número de niños y niñas de 2-5 años que con frecuencia cuentan en su hogar con adulto que lee junto a él o ella libros de cuentos o historias / Número total de niños y niñas de 2-5 años.',
      metodologia: '',
      unidad: 'Porcentaje | Tasa',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ¿Con qué frecuencia realiza actividades de lectura con el menor de 5 años que reside en su hogar| Opciones de respuesta: 1 Todos los días. 2 Al menos una vez a la semana pero no cada día. 3 Al menos una vez al mes, pero no cada semana 4 Al menos una vez al mes, pero no todos los meses.',
      responsable: 'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable',
      ruta: 'juego-adulto-2-5',
      archivo: 'ya5-5',
      hay_datos: false,
      explicacion: '',
      definicion: 'Porcentaje de niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable.',
      metodologia: '',
      unidad: '',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ¿Con qué frecuencia juega con el menor de 5 años que reside en su hogar| Opciones de respuesta: 1 Todos los días. 2 Al menos una vez a la semana pero no cada día. 3 Al menos una vez al mes, pero no cada semana 4 Al menos una vez al mes, pero no todos los meses.',
      responsable:
        'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
  ],
};