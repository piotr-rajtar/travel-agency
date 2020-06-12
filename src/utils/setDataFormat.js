export const setDataFormat = date => {
  const convertedDate = date.toLocaleString().slice(0, 10);
  return convertedDate;
};