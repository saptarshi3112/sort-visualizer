var arrayStates = [];
var ranges = [];

const randomizedPartition = async (arr, start, end) => {
  // generate a random number
  let rand = Math.floor(Math.random() * ((end-1) - start + 1) + start);

  let temp = arr[rand];
  arr[rand] = arr[end];
  arr[end] = temp;

  let pivot = arr[end];
  let i = start-1;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[i+1];
  arr[i+1] = arr[end];
	arr[end] = temp;

	ranges.push([start, end]);
  arrayStates.push([...arr]);

  return i+1;
}

const randomQuickSortHelper = async (array, start, end) => {
  if (start < end) {
    let pi = await randomizedPartition(array, start, end);
    await randomQuickSortHelper(array, start, pi-1);
    await randomQuickSortHelper(array, pi+1, end);
  }
}

export const randomQuickSort = array => {
  arrayStates = [];
  ranges = [];
  return new Promise(async(resolve, reject) => {
    let size = array.length;

    await randomQuickSortHelper(array, 0, size-1);

    arrayStates.push([...array]);
    ranges.push([-1, -1]);
    resolve({
      array: array,
      arrayStates: arrayStates,
      ranges: ranges
    });

  });
};
