export const checkToOnlyNumber = function (value) {
  return /^-?\d*$/.test(value);
};

export const moneyFormat = function (value) {
  return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
