export const getUuid: () => string = () => {
  return `${Math.random()}-${new Date().getTime()}`;
};
