export const checkToOnlyNumber = (value) => /^-?\d*$/.test(value);

export const moneyFormat = (value) =>
  value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
