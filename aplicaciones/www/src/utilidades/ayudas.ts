import { escalaColores } from '@enflujo/alquimia';

export const aleatorioFraccion = (min: number, max: number) => Math.random() * (max - min) + min;

export function calcularPorcentaje(valor: number, porcentaje: number) {
  return valor * (porcentaje / 100);
}

export const color = escalaColores(0, 100, '#DE2E56', '#94FF1A');
