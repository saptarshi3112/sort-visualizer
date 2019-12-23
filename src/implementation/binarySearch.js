var arrayStates = [];

const binarySearchHelper = (arr, start, end, x) => {
  if (start <= end) {
    let mid = Math.floor((start+end)/2);
    
    arrayStates.push({
      arr: [...arr],
      idx: mid
    });

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] > x) {
      return binarySearchHelper(arr, start, mid-1, x);
    } else {
      return binarySearchHelper(arr, mid+1, end, x);
    }
  }

  arrayStates.push({
    arr: [...arr],
    idx: -1
  });
  return -1;
}

export const binarySearch =  async (array, x) => {
  arrayStates = [];
  return new Promise(async (resolve, reject) => {
    let size = array.length;

    let result = await binarySearchHelper(array, 0, array.length-1, x);

    console.log(arrayStates);

    resolve({
      array: array,
      arrayStates: arrayStates
    });

  });
};
