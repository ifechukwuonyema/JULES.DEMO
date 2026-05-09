import { Decimal } from 'decimal.js';

// Global rounding rules
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });

export const toMoney = (value: number | string | Decimal) => new Decimal(value).toDecimalPlaces(2);

export const sum = (values: (number | string | Decimal)[]) => {
  return values.reduce((acc: Decimal, val) => acc.plus(new Decimal(val)), new Decimal(0)).toDecimalPlaces(2);
};

export const validateReconciliation = (total: Decimal, categories: Decimal[]) => {
  const categorySum = sum(categories);
  return total.equals(categorySum);
};
