/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Servicio {
  id: string;
  titulo: string;
  categoria: 'MTC' | 'Coaching' | 'Talleres' | 'Retiros';
  descripcion: string;
  detalles: string[];
  beneficios: string[];
  precio?: string;
  duracion?: string;
  modalidad: 'Presencial' | 'Online' | 'Híbrido' | 'Retiro Completo';
  icono: string;
  tarifasFormatos?: {
    titulo: string;
    introduccion?: string;
    planes: {
      nombre: string;
      precio: string;
      subtitulo?: string;
      descripcion?: string;
    }[];
    incluye?: string[];
    promocion?: {
      titulo: string;
      planes: {
        nombre: string;
        precio: string;
        subtitulo?: string;
      }[];
    };
  };
}

export interface Libro {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  esGratuito: boolean;
  precio?: number;
  paginas: number;
  formato: string;
  imagen: string;
  enlaceCompra?: string;
  capitulosExtra?: string[];
  esProximamente?: boolean;
}

export interface Testimonio {
  id: string;
  nombre: string;
  rol: string;
  comentario: string;
  servicioRecibido: string;
  calificacion: number;
  avatar: string;
}

export interface ConsultaContacto {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  tipoServicio: string;
  motivoConsulta: string;
  fechaCreacion: string;
  procesada: boolean;
  energiaPreferencia?: string; // Aire, Fuego, Tierra, Agua, Metal, Madera (5 Elementos)
}

export interface SuscriptorBoletin {
  id: string;
  email: string;
  fechaRegistro: string;
  consentimiento: boolean;
}
