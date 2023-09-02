import { NumberValueDataColorCondition } from './number-value-data-color-condition';

export interface NumberValueData {
  valueFormat: string;
  colorConditions: NumberValueDataColorCondition[];
}
