export const checkToOnlyNumber = (value) => /^-?\d*$/.test(value);

export const moneyFormat = (value) => {
    if (isNaN(+value) || !value.length) return "";
    return String(+value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
