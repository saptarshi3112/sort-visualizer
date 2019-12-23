var arrayStates = [];

const bubbleSortHelper = (arr, length) => {
  for (let i = 0; i < length; i++) {
    for(let j = 0; j < length-1; j++) {
      if (arr[j] > arr[j+1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        arrayStates.push([...arr]);
      }
    }
  }
};

export const bubbleSort = array => {
  return new Promise( async (resolve, reject) => {
    arrayStates = [];
    arrayStates.push(array);
    let size = array.length;
    await bubbleSortHelper(array, size);
    resolve({
      array: array, 
      arrayStates: arrayStates
    });
  });
};
