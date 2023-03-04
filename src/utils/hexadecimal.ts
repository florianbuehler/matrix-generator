export const toHex = (num: number) => {
  const hex = Math.round(num).toString(16);

  return hex.length % 2 > 0 ? `0${hex}` : hex;
};
