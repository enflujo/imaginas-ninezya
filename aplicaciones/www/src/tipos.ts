import type { Position } from 'geojson';

export interface GeometriaMapa {
  type: 'Feature';
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
    coordinates: [latitud: number, longitud: number][];
  };
  properties: {
    // Código numérico del municipio o departamento.
    codigo: string;
    // Nombre del municipio o departamento.
    nombre: string;
    // Nombre del departamento
    dep?: string;
    // Si es PDET o no.
    pdet: boolean;
  };
}

export interface GeoJson {
  features: GeometriaMapa[];
  type: string;
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}

export type TiposEstructura = 'porcentaje';
export type DatosAño = [codigo: string, valor: number][];
export type DatosIndicador = { [año: string]: DatosAño };
export type DatosPorAño = { [año: string]: number };
export type DatosPorAñoOrdenado = { año: string; valor: number | null }[];
export type DatosIndicadorNal = {
  ascendente: boolean;
  estructura: TiposEstructura;
  unidadMedida: number;
  datos: DatosPorAño;
  minNal: number;
  maxNal: number;
  minDep: number;
  maxDep: number;
  minMun: number;
  maxMun: number;
};
export type FuncionColor = (valor: number) => string;

export interface IndicadoresDatosComunes {
  nombre: string;
  ruta: string;
  definicion: string;
  hay_datos: boolean;
}

export interface IndicadoresDatos extends IndicadoresDatosComunes {
  archivo?: string;
  explicacion?: string;
  definicion: string;
  metodologia: string;
  unidad: string;
  fuente_numerador?: string;
  fuente_denominador?: string;
  desagregacion: string;
  contexto?: string;
  interpretacion: string;
  umbral?: number;
  explicacion_umbral?: string;
  responsable?: string;
  compete_a?: string;
}

export interface DatosYa extends IndicadoresDatosComunes {
  imagen: string;
  indicadores: IndicadoresDatos[];
}

export interface LugarSeleccionado {
  nombre: string;
  codigoDep: string;
  codigoMun?: string;
  color: string;
}

export type Punto = {
  // Coordenada X
  x: number;
  // Coordenada Y
  y: number;
};

export interface IMapearCoordenadas {
  (coordenadas: Position, ancho: number, alto: number): Punto;
}
