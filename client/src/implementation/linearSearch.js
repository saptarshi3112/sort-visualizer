var arrayStates = [];

export const linearSearch = (array, x) => {
  return new Promise((resolve, reject) => {

    arrayStates = [];

    let size = array.length;
    let flag = false, resultIndex = -1;

    // arrayStates.push([...array]);

    for (let itr = 0; itr < size; itr++) {
      if (array[itr] === x) {
        resultIndex = itr;
        flag = true;
        arrayStates.push({arr: [...array], idx: itr});
        break;
      }

      arrayStates.push({arr: [...array], idx: itr});
    }

    if (!flag)
      arrayStates.push({
        arr: [...array],
        idx: -1
      });

    resolve({
      flag: flag,
      array: array,
      resultIndex: resultIndex,
      arrayStates: arrayStates
    });

  });
};
