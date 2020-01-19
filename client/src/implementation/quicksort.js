var arrayStates = [];
var ranges = [];

const partition = (arr, start, end) => {
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

  let temp = arr[i+1];
  arr[i+1] = arr[end];
  arr[end] = temp;
  ranges.push([start, end]);
  arrayStates.push([...arr]);
  return i+1;

}

const quickSortHelper = async (arr, start, end) => {
  if (start < end) {
    let pi = await partition(arr, start, end);
    await quickSortHelper(arr, start, pi-1);
    await quickSortHelper(arr, pi+1, end);
  }
}

export const quickSort = array => {
  arrayStates = [];
  ranges = [];
  return new Promise(async(resolve, reject) => {
    let size = array.length;
    // arrayStates.push(array);
    await quickSortHelper(array, 0, size-1);
    arrayStates.push([...array]);
    ranges.push([-1, -1]);
    resolve({
      array: array,
      arrayStates: arrayStates,
      ranges: ranges
    });
  });
};
