export const ceilNumberFormat = (value: number) =>
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 0,
  }).format(value);

export const floatNumberFormat = (value: number) =>
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
  }).format(value);
