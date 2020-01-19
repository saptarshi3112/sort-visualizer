var arrayStates = [];
var ranges = [];

const getLeft = i => {
  return 2*i+1;
};

const getRight = i => {
  return 2*i+2;
};

export const maxHeapify = (arr, size, index) => {
  let left = getLeft(index);
  let right = getRight(index);
  let largest = index;

  if (size > left && arr[left] > arr[largest]) {
    largest = left;
  } if (size > right && arr[right] > arr[largest]) {
    largest = right;
  } if (largest !== index) {
    let temp = arr[largest];
    arr[largest] = arr[index];
    arr[index] = temp;
    maxHeapify(arr, size, largest);
  }

}

const buildMaxHeap = async (arr, size) => {
  for (let itr = size/2-1; itr >= 0; itr--) {
    await maxHeapify(arr, size, itr);
  }
}

export const heapSort = async array => {

  arrayStates = [];
  ranges = [];

  return new Promise(async (resolve, reject) => {

    let size = array.length;
    await buildMaxHeap(array, size);

    for (let i = size-1; i >= 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      ranges.push([0, i]);
      arrayStates.push([...array]);
      await maxHeapify(array, i, 0);
      ranges.push([0, 1]);
      arrayStates.push([...array]);

    }

    ranges.push([-1, -1]);
    arrayStates.push([...array]);

    resolve({
      array: array,
      arrayStates: arrayStates,
      ranges: ranges
    })
  });
};
