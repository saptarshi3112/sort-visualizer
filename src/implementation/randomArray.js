export const generateRandomArray = size => {
  return new Promise((resolve, reject) => {
    var randoms = [...Array(size)].map(() => Math.floor(Math.random() * (700 - 50 + 1) + 50));
    resolve(randoms);
  });
};

export const generateRandomArrayMini = size => {
  return new Promise((resolve, reject) => {
    var randoms = [...Array(size)].map(() => Math.floor(Math.random() * (120 - 10 + 1) + 10));
    resolve(randoms);
  });
}