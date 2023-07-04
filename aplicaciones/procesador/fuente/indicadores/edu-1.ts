// Tasa de Cobertura Bruta

import { limpiarDepartamento } from '@/limpieza/lugar';
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

export default async () => {
  maquinaXlsx('3.1: Edu - Cobertura', 'Estadisticas_Men', 'Sheet 1', procesador, fin);
  const respuesta: Cobertura = {};

  function procesador(fila: VariablesSaberPlano) {
    const departamentoLimpio = limpiarDepartamento(fila.CÓDIGO_DEPARTAMENTO);
    if (!departamentoLimpio) return;
    const año = fila.AÑO;

    if (!respuesta[año]) {
      respuesta[año] = [];
    }

    respuesta[año].push([departamentoLimpio[0], fila.COBERTURA_BRUTA]);

    // console.log(departamentoLimpio);
  }

  function fin() {
    guardarJSON(respuesta, 'edu-3-1-dep');
  }
};
