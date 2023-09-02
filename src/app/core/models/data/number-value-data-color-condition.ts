export interface NumberValueDataColorCondition {
  condition: 'eq' | 'l' | 'g' | 'leq' | 'geq';
  value: number;
  color: string;
}
