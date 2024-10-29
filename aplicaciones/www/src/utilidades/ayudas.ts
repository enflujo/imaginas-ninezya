import type { IMapearCoordenadas } from '@/tipos';
import type { DatosIndicadorNal } from '@/tiposCompartidos/compartidos';
import type { MultiPolygon, Polygon, Position } from 'geojson';

export const esNumero = (valor: string): boolean => !isNaN(parseInt(valor));
/**
 * Convierte un valor de una escala a otra.
 *
 * @param valor Valor que se quiere convertir
 * @param escalaBaseMin Valor mínimo de la escala inicial.
 * @param escalaBaseMax Valor máximo de la escala inicial.
 * @param escalaDestinoMin Valor mínimo de la escala final.
 * @param escalaDestinoMax Valor máximo de la escala final.
 * @returns Valor convertido a la nueva escala.
 */
export const convertirEscala = (
  valor: number,
  escalaBaseMin: number,
  escalaBaseMax: number,
  escalaDestinoMin: number,
  escalaDestinoMax: number
): number => {
  return (
    ((valor - escalaBaseMin) * (escalaDestinoMax - escalaDestinoMin)) / (escalaBaseMax - escalaBaseMin) +
    escalaDestinoMin
  );
};

export const hexARGB = (valor: string): number[] | null => {
  valor = valor.includes('#') ? valor.trim().replace('#', '') : valor.trim();

  if (valor.length === 3) {
    valor = valor[0] + valor[0] + valor[1] + valor[1] + valor[2] + valor[2];
  }

  if (valor.length != 6) {
    console.log(`No se puede convertir el color ${valor}`);
  }

  const color = valor.match(/.{1,2}/g);
  if (color) {
    const rgb = [parseInt(color[0], 16), parseInt(color[1], 16), parseInt(color[2], 16)];

    return rgb;
  }

  return null;
};

/**
 * Convierte una escala de valores a una escala de colores y mapea el
 * valor ingresado al color correspondiente.
 * @param valorMin Valor mínimo de la escala que se quiere mapear.
 * @param valorMax Valor máximo de la escala que se quiere mapear.
 * @param color1 Color inicial de la escala en hexadecimal.
 * @param color2 Color central.
 * @param color3 Color final de la escala en hexadecimal.
 * @returns
 */
export const escalaColores = (
  valorMin: number,
  valorMax: number,
  umbral: number,
  color1: string,
  color2: string,
  color3: string
) => {
  const colorMin = hexARGB(color1);
  const colorMed = hexARGB(color2);
  const colorMax = hexARGB(color3);

  const [rMin, gMin, bMin] = colorMin ? colorMin : [255, 255, 255];
  const [rMed, gMed, bMed] = colorMed ? colorMed : [127, 127, 127];
  const [rMax, gMax, bMax] = colorMax ? colorMax : [0, 0, 0];
  /**
   * @param {number} valor Cualquier número de la escala que se quiere mapear.
   */
  return (valor: number) => {
    let r: number;
    let g: number;
    let b: number;
    if (valor <= umbral) {
      r = convertirEscala(valor, valorMin, umbral, rMin, rMed);
      g = convertirEscala(valor, valorMin, umbral, gMin, gMed);
      b = convertirEscala(valor, valorMin, umbral, bMin, bMed);
    } else if (valor > valorMax) {
      r = convertirEscala(valorMax, umbral, valorMax, rMed, rMax);
      g = convertirEscala(valorMax, umbral, valorMax, gMed, gMax);
      b = convertirEscala(valorMax, umbral, valorMax, bMed, bMax);
    } else {
      r = convertirEscala(valor, umbral, valorMax, rMed, rMax);
      g = convertirEscala(valor, umbral, valorMax, gMed, gMax);
      b = convertirEscala(valor, umbral, valorMax, bMed, bMax);
    }

    return `rgb(${r},${g},${b})`;
  };
};

export const aleatorioFraccion = (min: number, max: number) => Math.random() * (max - min) + min;

export function calcularPorcentaje(valor: number, porcentaje: number) {
  return valor * (porcentaje / 100);
}

export const porcentajeAPixeles = (porcentaje: number, total: number) => (porcentaje / 100) * total;

export async function pedirDatos<Respuesta>(url: string, config: RequestInit = {}): Promise<Respuesta> {
  const res = await fetch(url, config);
  const datos = await res.json();
  return datos as Respuesta;
}

export function obtenerVariableCSS(nombre: string) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(nombre);
}

/**
 * Averigua si cada `grupo` de coordenadas es un polígono o un multipolígono y a la
 * variable `res` (respuesta), que contiene los datos de los SVG, le agrega la
 * ubicación de cada punto y sus líneas conectoras.
 *
 * `M` = _moveTo_ (Inicio del _path_. `M{punto.x} {punto.y}`)
 *
 * `L` = _lineTo_ (Punto de una línea. `L{punto.x} {punto.y}`)
 *
 * `Z` = _closePath_ (Fin del _path_. `Z`)
 * @param geometria Array de coordenadas
 * @param mapearCoordenadas Función para mapear de latitud, longitud a pixeles.
 * @param ancho Ancho en pixeles del contenedor.
 * @param alto Alto en pixeles del contenedor.
 * @returns res contiene los datos de los elementos SVG<path>
 */
export const crearLinea = (
  geometria: Polygon | MultiPolygon,
  mapearCoordenadas: IMapearCoordenadas,
  ancho: number,
  alto: number
): string => {
  let res = '';

  geometria.coordinates.forEach((grupo: Position[] | Position[][]): void => {
    grupo.forEach((posicion: Position | Position[], i: number) => {
      const cabeza = i === 0 ? 'M' : 'L';

      if (typeof posicion[0] === 'object') {
        (posicion as Position[]).forEach((puntoMulti: Position, j: number): void => {
          if (j === 0) {
            res += crearSeccionSvg(puntoMulti, 'M', mapearCoordenadas, ancho, alto);
          } else {
            res += crearSeccionSvg(puntoMulti, 'L', mapearCoordenadas, ancho, alto);
          }
        });
      } else {
        res += crearSeccionSvg(posicion as Position, cabeza, mapearCoordenadas, ancho, alto);
      }

      res += i === grupo.length - 1 ? 'Z' : '';
    });
  });

  return res;
};

const crearSeccionSvg = (
  punto: Position,
  cabeza: string,
  mapearCoordenadas: IMapearCoordenadas,
  ancho: number,
  alto: number
) => {
  const coordenadas = mapearCoordenadas(punto, ancho, alto);
  return `${cabeza}${coordenadas.x | 0} ${coordenadas.y | 0} `;
};

export function definirMedidasMax(baseMax: number, datosNal: DatosIndicadorNal, umbral: number) {
  const maxNalRedondeado = Math.ceil(baseMax / 10) * 10;

  if (datosNal.unidadMedida === 1) {
    if (baseMax < 1) {
      return { yMax: 1, yMin: 0, color: 0.6 };
    } else {
      return {
        yMax: baseMax > datosNal.unidadMedida ? Math.ceil(baseMax / 100) * 100 : datosNal.unidadMedida,
        yMin: 0,
        color: 5,
      };
    }
  }

  /**
   * Cuando los umbrales o la tendencia deseada es abajo. (umbral se pinta verde abajo en la línea de tiempo)
   * Que sea visible el umbral y los valor lo más cerca posible.
   */
  if (!datosNal.ascendente && umbral) {
    const umbralRedondeado = Math.ceil(umbral / 10) * 10;
    const yMax = Math.max(umbralRedondeado, maxNalRedondeado);

    return {
      yMax,
      yMin: 0,
      color: maxNalRedondeado,
    };
  } else if (!datosNal.ascendente) {
    return { yMax: maxNalRedondeado, yMin: 0, color: maxNalRedondeado };
  }

  /**
   * Cuando los umbrales o la tendencia deseada es arriba. (umbral se pinta verde arriba en la línea de tiempo)
   */
  if (datosNal.ascendente && umbral) {
    const umbralRedondeado = Math.ceil(umbral / 10) * 10;
    return { yMax: Math.max(umbralRedondeado, maxNalRedondeado), yMin: 0, color: maxNalRedondeado };
  } else if (datosNal.ascendente) {
    return { yMax: maxNalRedondeado, yMin: 0, color: maxNalRedondeado };
  }
}
