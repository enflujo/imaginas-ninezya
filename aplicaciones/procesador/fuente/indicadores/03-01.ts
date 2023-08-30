// Tasa de Cobertura Bruta

import { limpiarDepartamento } from '@/limpieza/lugar';
import type { Departamento, Errata } from '@/tipos';
import { guardarJSON } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';

export type VariablesSaberPlano = {
  AÑO: number;
  CÓDIGO_DEPARTAMENTO: number;
  DEPARTAMENTO: string;
  POBLACIÓN_5_16: number;
  TASA_MATRICULACIÓN_5_16: number;
  COBERTURA_NETA: number;
  COBERTURA_NETA_TRANSICIÓN: number;
  COBERTURA_NETA_PRIMARIA: number;
  COBERTURA_NETA_SECUNDARIA: number;
  COBERTURA_NETA_MEDIA: number;
  COBERTURA_BRUTA: number;
  COBERTURA_BRUTA_TRANSICIÓN: number;
  COBERTURA_BRUTA_PRIMARIA: number;
  COBERTURA_BRUTA_SECUNDARIA: number;
  COBERTURA_BRUTA_MEDIA: number;
  DESERCIÓN: number;
  DESERCIÓN_TRANSICIÓN: number;
  DESERCIÓN_PRIMARIA: number;
  DESERCIÓN_SECUNDARIA: number;
  DESERCIÓN_MEDIA: number;
  APROBACIÓN: number;
  APROBACIÓN_TRANSICIÓN: number;
  APROBACIÓN_PRIMARIA: number;
  APROBACIÓN_SECUNDARIA: number;
  APROBACIÓN_MEDIA: number;
  REPROBACIÓN: number;
  REPROBACIÓN_TRANSICIÓN: number;
  REPROBACIÓN_PRIMARIA: number;
  REPROBACIÓN_SECUNDARIA: number;
  REPROBACIÓN_MEDIA: number;
  REPITENCIA: number;
  REPITENCIA_TRANSICIÓN: number;
  REPITENCIA_PRIMARIA: number;
  REPITENCIA_SECUNDARIA: number;
  REPITENCIA_MEDIA: number;
};

type Cobertura = {
  [año: string]: [departamento: string, porcentaje: number][];
};

const errata: { fila: number; error: string }[] = [];

export default async () => {
  const respuesta: Cobertura = {};
  await maquinaXlsx('3.1: Edu - Cobertura', 'Estadisticas_Men', 'Sheet 1', procesador);
  guardarJSON(respuesta, 'ya3-1-dep');
  guardarJSON(errata, 'Errata YA3.1_dep');

  function procesador(fila: VariablesSaberPlano, numeroFila: number) {
    const datos = limpiarDepartamento(fila.CÓDIGO_DEPARTAMENTO);

    if (datos.hasOwnProperty('error')) {
      errata.push({ fila: numeroFila, error: (datos as Errata).mensaje });
      return;
    }

    const año = fila.AÑO;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    if (fila.COBERTURA_BRUTA) {
      respuesta[año].push([(datos as Departamento)[0], fila.COBERTURA_BRUTA]);
    }
  }
};
