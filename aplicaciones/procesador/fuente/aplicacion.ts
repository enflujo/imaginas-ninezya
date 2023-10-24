import ya1_4 from '@/indicadores/01-04';
import ya1_6 from '@/indicadores/01-06';
import ya2_5 from '@/indicadores/02-05';
import ya3_1 from '@/indicadores/03-01';
import VariableSingular from './modulos/VariableSingular';

async function inicio() {
  const ya11 = new VariableSingular('tacued', true);
  await ya11.procesar('1.1: salud - acueducto', 'YA1_1.1', 'Sheet1', 'ya1-1');

  const ya12 = new VariableSingular('talcan', true);
  await ya12.procesar('1.2: salud - alcantarillado', 'YA1_1.2', 'Sheet1', 'ya1-2');

  const ya13 = new VariableSingular('mortalidad_menores_5', false);
  await ya13.procesar('1.3: mortalidad menores', 'YA1_1.3', 'Sheet1', 'ya1-3');

  const ya15 = new VariableSingular('controles_prenatales', true);
  await ya15.procesar('1.5: controles prenatales', 'YA1_1.5', 'Sheet1', 'ya1-5');

  const ya18 = new VariableSingular('bajo_peso', false);
  await ya18.procesar('1.8: bajo peso', 'YA1_1.8', 'Sheet1', 'ya1-8');
  // await ya1_1();
  // await ya1_2();
  // await ya1_4();
  // await ya1_6();
  // await ya2_5();
  // await ya3_1();
}

inicio();
