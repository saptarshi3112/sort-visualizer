var arrayStates = [];
var ranges = [];

const merge = async (arr, start, mid, end) => {
  let n1 = mid-start+1;
  let n2 = end-mid;

  let i, j, k;

  let left_array = new Array(n1);
  let right_array = new Array(n2);

  for (i = 0; i < n1; i++) {
    left_array[i] = arr[i+start];
  }

  for (j = 0; j < n2; j++) {
    right_array[j] = arr[j+mid+1];
  }

  i = 0;
  j = 0;
  k = start;
  
  while (i < n1 && j < n2) {
    if (left_array[i] <= right_array[j]) {
      arr[k] = left_array[i];
      i++;
    } else {
      arr[k] = right_array[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = left_array[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = right_array[j];
    k++;
    j++;
  }

  ranges.push([start, end]);
  arrayStates.push([...arr]);

}

const mergeSortDriver = async (arr, start, end) => {
  if (start < end) {
    let mid = Math.floor((start+end)/2);
    await mergeSortDriver(arr, start, mid);
    await mergeSortDriver(arr, mid+1, end);
    await merge(arr, start, mid, end);
  }

}

export const mergeSort = array => {
  return new Promise(async (resolve, reject) => {
    arrayStates = [];
    ranges = [];
    let size = array.length;
    await mergeSortDriver(array, 0, size-1);
    arrayStates.push([...array]);
    ranges.push([-1, -1]);
    resolve({
      array: array, 
      arrayStates: arrayStates,
      ranges: ranges
    });
  });
};
