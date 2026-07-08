/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Servicio, Libro, Testimonio } from './types';

// @ts-ignore
import veroAvatar from './assets/images/vero_arbol_canvas.png';

export const BIO_DATA = {
  nombre: 'Verónica Barraza',
  titulo: 'Especialista en Medicina Tradicional China y Guía de Despertar Espiritual',
  subtitulo: 'Alineando los cinco elementos para restaurar la armonía entre cuerpo, mente y alma.',
  avatar: veroAvatar,
  historia: [
    'Verónica Barraza es abogada de formación y una apasionada sanadora diplomada en Medicina Tradicional China por la Escuela Internacional Neijing (sede Cancún). Como profesora, instructora y capacitadora de esta milenaria tradición, ha dedicado años a profundizar en el estudio de la salud integral, participando en diversos congresos internacionales y posgrados especializados en Medicina Tradicional China y la Mujer, así como en Medicina China y el Espíritu.',
    'Practicante de Qi Gong y eterna estudiante de los misterios del ser, Verónica integra su formación profesional con una profunda sensibilidad humana. Sus intereses en la permacultura y la vivencia en comunidad reflejan su compromiso con una vida en armonía con la tierra y los ciclos naturales, principios que permean cada hacer.'
  ],
  certificaciones: [
    'Abogada - Universidad de Buenos Aires, Argentina',
    'Diplomada en Medicina Tradicional China - Escuela Neijing Cancún',
    'Diplomada en Medicina Tradicional China Certificada - Instituto Alcocer, Ciudad de México',
    'Certificada como Capacitadora, Instructora y Facilitadora - ICAT Playa del Carmen',
    'Otros: Master Reiki, postgrados de Qi Gong, Feminología, Humanismo Sanador, etc.'
  ]
};

export const SERVICIOS_DATA: Servicio[] = [
  {
    id: 'coaching-espiritual',
    titulo: 'Coaching Espiritual Taoísta',
    categoria: 'Coaching',
    descripcion: 'Encuentros individuales para descifrar tu identidad energética. Aprende a fluir con el Tao, el arte de vivir en armonía y sintoniza tus decisiones con el flujo de Energía Universal.',
    detalles: [
      'Análisis personalizado de tu identidad energética con la información de tu trigrama de nacimiento y tus 4 pilares del destino',
      'identificación del estancamiento de tu energía emocional que impide el desarrollo pleno de tus pilares',
      'Meditaciones guiadas específicas para la alquimia mental y liberación de patrones.',
      'Ejercicios prácticos integrados para tu rutina diaria de balance y armonía'
    ],
    beneficios: [
      'Claridad mental y descubrimiento del propósito de vida',
      'Reconciliación con miedos históricos reencauzados en fuerza espiritual.',
      'Desarrollo de un estado continuo de serenidad y desapego compasivo.'
    ],
    precio: '$50.00',
    duracion: '60 Minutos',
    modalidad: 'Online',
    icono: 'Sparkles',
    tarifasFormatos: {
      titulo: 'Tarifas y Formatos',
      planes: [
        {
          nombre: 'Sesión individual',
          precio: '$50 dólares',
          subtitulo: 'Consultas puntual y/o evaluación inicial.'
        },
        {
          nombre: 'Paquete de inicio (3 a 6 sesiones)',
          precio: '$300 - $600 dólares',
          subtitulo: 'Programa Método Tao Flow "Conociéndome"',
          descripcion: 'Diseñado para trabajar un objetivo central específico. Sugerido para "Conocer la identidad energética, el camino de vida, los desequilibrios personales, plan de sanación y renovación".'
        },
        {
          nombre: 'Programa de transformación profunda',
          precio: '$800 - $1,500 dólares',
          subtitulo: 'Método Tao Flow "Renacimiento"',
          descripcion: 'Diseñado para trabajar en tu Autoconocimiento, Descubrir los desequilibrios y aprender que se puede Renacer a tu Verdadera Identidad, Reconexión con la Vida y los Otros.'
        }
      ],
      incluye: [
        'Incluye acompañamiento continuo de varios 1, 2 o 3 meses, acceso a material complementario y seguimiento.',
        'Sesiones de 60 minutos (semanales o quincenales).',
        'Ejercicios de respiración, meditación y alineación de propósitos.',
        'Acceso a guías, plantillas de trabajo y meditaciones guiadas.',
        '¡Caminar hacia una Nueva Vida! ¡El cambio es Inevitable!'
      ]
    }
  },
  {
    id: 'armonizacion-mtc',
    titulo: 'Armonización Energética y MTC',
    categoria: 'MTC',
    descripcion: 'Tratamiento corporal integrador que utiliza acupuntura sutil, moxibustión de artemisa, masaje energético y ventosas. Especializado en aliviar el dolor crónico, regular el sistema nervioso y fortalecer el Qi.',
    detalles: [
      'Diagnóstico tradicional por pulso y lengua.',
      'Acupuntura sin dolor con agujas estériles ultradelgadas.',
      'Moxibustión templadora para restaurar el Yang primigenio del cuerpo.',
      'Terapia de ventosas (cupping) para movilizar la sangre y toxinas bloqueadas.'
    ],
    beneficios: [
      'Alivio profundo de migrañas, tensiones crónicas e insomnio persistente.',
      'Regulación de los sistemas metabólicos y restauración de la energía general',
      'Sentimiento duradero de estar "sólidamente anclado a la Tierra" y en paz.'
    ],
    precio: '$30 - $50 dólares',
    duracion: '60 - 90 Minutos',
    modalidad: 'Presencial',
    icono: 'Activity',
    tarifasFormatos: {
      titulo: 'Tarifas y Formatos',
      planes: [
        {
          nombre: 'Primera consulta',
          precio: '$50 dólares',
          subtitulo: 'Duración: 60 a 90 minutos',
          descripcion: 'Incluye el diagnóstico inicial en profundidad (revisión de pulso, lengua e historial médico completo).'
        },
        {
          nombre: 'Sesiones de seguimiento',
          precio: '$30 dólares',
          subtitulo: 'Duración: 45 a 60 minutos',
          descripcion: 'Tiempo de reposo de agujas (colocadas entre 20 y 30 minutos para máximo efecto terapéutico). Técnicas combinadas según correspondencia: moxibustión, acupuntura, masaje energético o terapia con ventosas.'
        }
      ],
      incluye: [
        'El método Tao Flow que aplico en cada encuentro está fundamentado en la sabiduría milenaria, en la escucha atenta que permite entender el presente y el pasado para diseñar un tratamiento que cause un antes y un después.',
        '¡El paso hacia el cambio inevitable lo das tú, déjame acompañarte!'
      ],
      promocion: {
        titulo: '¡Promociones Especiales!',
        planes: [
          {
            nombre: 'Programa básico inicial (3 sesiones)',
            precio: '$90 dólares',
            subtitulo: 'Único Pago'
          },
          {
            nombre: 'Programa Seguimiento (6 sesiones)',
            precio: '$3,000 dólares',
            subtitulo: 'Único Pago!'
          }
        ]
      }
    }
  },
  {
    id: 'taller-cinco-elementos',
    titulo: 'Taller Escuchando el Alma y Abriendo el Corazón',
    categoria: 'Talleres',
    descripcion: 'Talleres prácticos y seminarios interactivos online diseñados para sintonizar la vida moderna de hiperconectividad con el flujo de energía armónica que te permite contactar con tu Alma y tu Corazón.',
    detalles: [
      'Workshop Escuchando el Alma y Abriendo el Corazón',
      'Trabajo grupal para Escuchar el Alma teórico práctico.',
      'Trabajo grupal para Abrir el Corazón teórico práctico',
      'Conexión con el Alma y el Corazón para diseñar una nueva vida de armonía y paz interior'
    ],
    beneficios: [
      'Reconexión intima con el Alma. Revelación de la misión y de la realidad espiritual en nuestra vida cotidiana',
      'Reconexión intima con el Corazón. Sanación de traumas pasados, purificación de la energía hereditaria',
      'Renovación, Reestructuración, Sintonización con la Verdad del Alma y el Corazón'
    ],
    precio: '$50.00 dólares por módulo',
    duracion: '4 Módulos',
    modalidad: 'Híbrido',
    icono: 'BookOpen',
    tarifasFormatos: {
      titulo: 'Tarifas y Formatos',
      planes: [
        {
          nombre: 'Taller general (Inversión / Reciprocidad)',
          precio: '$50 dólares por módulo',
          subtitulo: 'Dividido en 4 Módulos completos orientados al autoconocimiento y sintonía del ser.'
        },
        {
          nombre: 'Taller presencial para grupos e instituciones',
          precio: 'Personalizado',
          subtitulo: 'Dirigido a empresas, organizaciones, grupos sociales e instituciones',
          descripcion: 'Orientado a toda institución, empresa, organización, grupo social que busque contribuir e iniciar el cambio inevitable hacia el nuevo ser humano pacífico y solidario para construir juntos la sociedad que sabemos podemos tener. ¡El Cambio es inevitable! Diseñamos el Taller de acuerdo a las características de los interesados.'
        }
      ]
    }
  },
  {
    id: 'retiro-alquimia-silencio',
    titulo: 'Retiro Tao Flow',
    categoria: 'Retiros',
    descripcion: 'Una inmersión profunda de cuatro dias en la selva maya para restaurar tu ser en un espacio mágico y con actividades diseñadas para que puedas reconciliar tu esfera material con tu esfera espiritual. En comunidad, con tu trabajo personal reescribimos el presente, conoceremos el método Tao Flow para aprender como fluye la energía en todo lo que existe y la conectemos a todo nuestro hacer cotidiano. El cambio y la conexión son inevitables!',
    detalles: [
      'Alojamiento ecológico premium con pensión completa y alimentación herbal taoísta.',
      'Práctica matutina de meditación sentada y Qigong dinámico.',
      'Baños de bosque guiados (Shinrin-Yoku) enfocados en el aliento consciente.',
      'Ritual de fuego y liberación de deudas ancestrales del Qi y mucho más.'
    ],
    beneficios: [
      'Reseteo celular y del sistema nervioso central del 100%.',
      'Desintoxicación mental libre de dispositivos digitales por 96 horas.',
      'Herramientas integradas de la sabiduria china con el Método Tao Flow. Abrete a la Experiencia Espiritual, Energética y más humana con la Clave del Amor!'
    ],
    precio: 'Escríbeme',
    duracion: '3 a 8 Días',
    modalidad: 'Retiro Completo',
    icono: 'Compass',
    tarifasFormatos: {
      titulo: 'Retiros Disponibles',
      introduccion: 'EL RETIRO es una herramienta que el hombre moderno puede aprovechar como lo hacia en el pasado, retirándose de su vida cotidiana a un espacio natural contactaba con su ser. Con su verdadero Ser, renovación y liberación son claves.\n\nLas actividades son producto de la experiencia en la terapéutica donde el descubrimiento de nuestra esencia nos permite hacer cambios para una vida especial! la que sabes te espera!',
      planes: [
        {
          nombre: 'Retiro Escuchando Alma y Corazón',
          precio: 'Consultar',
          subtitulo: 'Sanar el alma y el corazón, materia y espíritu',
          descripcion: 'Meditaciones, actividades personales y comunitarias. Contactando con la Energía del Alma y la Energía del Corazón.'
        },
        {
          nombre: 'Retiro Sincronizándome con el Ritmo de la Naturaleza',
          precio: 'Consultar',
          subtitulo: 'Un viaje al fluir como el Tao!',
          descripcion: 'Vivenciar en activo los ritmos de la energía del ciclo circadiano del día, y tus órganos, tus emociones y tu espíritu. Toda la sabiduría china en una renovación mental y emocional que cambiará la manera de ver la vida.'
        },
        {
          nombre: 'Retiro Qi Gong y Acupuntura',
          precio: 'Consultar',
          subtitulo: 'Retiro práctico de Qi Gong y MTC',
          descripcion: '3 días completos de meditación taoísta, Qi Gong y sesiones de acupuntura, moxibustión y otras técnicas de la medicina tradicional china.'
        }
      ],
      incluye: [
        'Para programar los retiros y los costos, ¡Escríbeme!'
      ]
    }
  }
];

export const LIBROS_DATA: Libro[] = [
  {
    id: 'recetario-gratis',
    titulo: 'Calmar el Fuego de tu Corazón',
    subtitulo: 'Guía gratuita de medicina tradicional china',
    descripcion: 'Aprende 3 técnicas milenarias de la Medicina Tradicional China para reducir la ansiedad ahora mismo.',
    esGratuito: true,
    paginas: 10,
    formato: 'PDF Digital',
    imagen: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
    capitulosExtra: [
      'Capítulo I: El fuego y la ansiedad en la visión milenaria.',
      'Capítulo II: Tres técnicas de acupresión clave.',
      'Capítulo III: Alimentos y hierbas que calman el Shen.',
      'Capítulo IV: Rutinas respiratorias diarias para enfriar el canal del corazón.'
    ]
  },
  {
    id: 'energia-vital-gratis',
    titulo: 'Los 5 elementos en la Medicina China',
    subtitulo: 'Manual gratuito de equilibrio y armonía diaria',
    descripcion: 'Conoce las bases de la Medicina Tradicional China para equilibrar tus ciclos de energía física y emocional todos los días.',
    esGratuito: true,
    paginas: 17,
    formato: 'PDF Digital',
    imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    capitulosExtra: [
      'Capítulo I: El mapa interno: Teoría del Yin-Yang y el Qi energético.',
      'Capítulo II: Los Cinco Elementos: Madera, Fuego, Tierra, Metal y Agua.',
      'Capítulo III: Test de autoevaluación de tu elemento rector.',
      'Capítulo IV: Rituales y alimentos diarios para el balance de tus meridianos.'
    ]
  },
  {
    id: 'escuchando-el-alma',
    titulo: 'Escuchando el Alma y Abriendo el Corazón',
    subtitulo: 'Un viaje de sanación con la sabiduría de la Medicina Tradicional China',
    descripcion: "Quince años atendiendo almas. Cientos de sesiones. Miles de momentos en que alguien cruzó la puerta de mi consulta buscando alivio para el cuerpo y encontró que el dolor venía del alma.  Hoy ese conocimiento tiene forma de libro 'Escuchando el Alma y Abriendo el Corazón' ya está disponible.  No es un libro de teoría. Es la destilación de todo lo que he aprendido al lado de mis pacientes, con la sabiduría de la Medicina Tradicional China como guía.  Si alguna vez has sentido que algo falta — aunque no sepas exactamente qué aquí está una propuesta!",
    esGratuito: false,
    precio: 8.99,
    paginas: 107,
    formato: 'Disponible en Tapa Blanda y ePUB',
    imagen: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    enlaceCompra: '#comprar-alquimia'
  },
  {
    id: 'sendero-retorno',
    titulo: 'Descubre tu Identidad Energética',
    subtitulo: 'El primer libro sobre la naturaleza de tu energía, según la cosmología y la astrología china',
    descripcion: 'Inspirado en el sagrado Daodejing, Verónica Barraza ofrece un compendio de 81 meditaciones cortas orientadas a recuperar el centro y la calma profunda en medio del bullicio urbano. Un libro de cabecera ilustrado con ideogramas tradicionales caligrafiados para acompañar tu té de la mañana.',
    esGratuito: false,
    precio: 18.50,
    paginas: 172,
    formato: 'Tapa Blanda Ilustrada',
    imagen: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop',
    enlaceCompra: '#comprar-sendero',
    esProximamente: true
  }
];

export const TESTIMONIOS_DATA: Testimonio[] = [
  {
    id: 't1',
    nombre: 'Elena Ruiz',
    rol: 'Emprendedora / Practicante de Meditación',
    comentario: 'Llegué a la consulta de Verónica con un cansancio crónico extremo y ansiedad que nublaban todo mi trabajo. Con el Coaching Taoísta y la acupuntura, por fin aprendí qué significaba el "Wu Wei". No solo me curé del insomnio, sino que reorganizé mi empresa sin forzar las cosas. Ella es un refugio en la tormenta.',
    servicioRecibido: 'Coaching Espiritual & MTC',
    calificacion: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    nombre: 'Mauricio Delgado',
    rol: 'Profesor de Filosofía',
    comentario: 'El taller sobre los Cinco Elementos transformó radicalmente la manera en que entiendo la alimentación y mi propio cuerpo. Como maestro, leía mucho sobre el taoísmo, pero Verónica me enseñó a vivirlo en la sopa de calabaza, en la infusión de jengibre y en el cuidado del hígado en primavera. Un curso indispensable y purificador.',
    servicioRecibido: 'Taller Escuchando el Alma y Abriendo el Corazón',
    calificacion: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    nombre: 'Valeria Castro',
    rol: 'Psicoterapeuta Gestalt',
    comentario: 'El Retiro de Silencio ha sido un hito en mi historia. El Qigong al alba frente a la niebla de la montaña y la guía compasiva de Verónica disolvieron dolores emocionales enquistados hace años. Recomiendo infinitamente sus libros y sus manos sanadoras. Su libro "Alquimia Emocional" es ahora bibliografía recomendada para mis pacientes.',
    servicioRecibido: 'Retiro Tao Flow',
    calificacion: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

export const REDES_SOCIALES = {
  instagram: 'https://instagram.com/veronica.mtcholistica',
  youtube: 'https://youtube.com/veronicabarraza.tao',
  pinterest: 'https://pinterest.com/veronica_alquimia',
  email: 'hola@veronicabarrazamtc.com',
  whatsapp: 'https://wa.me/529848016723',
  direccion: 'Playa del Carmen, México'
};
