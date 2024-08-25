export const wait = async (count = 1000) => {
  return new Promise((res) => setTimeout(res, count));
};
