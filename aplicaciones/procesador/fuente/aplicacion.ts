import VariableSingular from './modulos/VariableSingular';
import Indicador17 from '@/indicadores/01-07';

async function inicio() {
  // const ya11 = new VariableSingular('tacued', true, 'porcentaje');
  // await ya11.procesar('1.1: salud - acueducto', 'YA1_1.1', 'Sheet1', 'ya1-1');

  // const ya12 = new VariableSingular('talcan', true, 'porcentaje');
  // await ya12.procesar('1.2: salud - alcantarillado', 'YA1_1.2', 'Sheet1', 'ya1-2');

  // const ya13 = new VariableSingular('tasa_mortalidad_infantil', false, 'porcentaje');
  // await ya13.procesar('1.3: mortalidad menores', 'YA1_1.3', 'Sheet1', 'ya1-3');

  // const ya15 = new VariableSingular('controles_prenatales', true, 'porcentaje');
  // await ya15.procesar('1.5: controles prenatales', 'YA1_1.5', 'Sheet1', 'ya1-5');

  const ya17 = new Indicador17(false, 'porcentaje');
  await ya17.procesar('1.7: desnutricion', 'YA1_1.7', 'Sheet1', 'ya1-7');

  // const ya18 = new VariableSingular('bajo_peso', false, 'porcentaje');
  // await ya18.procesar('1.8: bajo peso', 'YA1_1.8', 'Sheet1', 'ya1-8');

  /**
   * YA 2
   */
  const ya25 = new VariableSingular('cobertura_bruta_transicion', true, 'porcentaje');
  await ya25.procesar('2.5: cobertura transicion', 'YA2_2.5', 'Sheet1', 'ya2-5');
}

inicio();
