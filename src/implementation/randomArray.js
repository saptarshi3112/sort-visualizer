export const generateRandomArray = size => {
  return new Promise((resolve, reject) => {
    var randoms = [...Array(size)].map(() => Math.floor(Math.random() * (700 - 50 + 1) + 50));
    resolve(randoms);
  });
};
