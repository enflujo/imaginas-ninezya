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
export type DatosIndicadorNal = { ascendente: boolean; estructura: TiposEstructura; datos: DatosPorAño };
export type FuncionColor = (valor: number) => string;
