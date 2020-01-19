import {
  COMPUTE_SORT_SUCCESS,
  COMPUTE_SORT_FAILED
} from '../actions/actions';

const initialState = {
  sortName: 'mergeSort',
  size: "150",
  sortRunning: false,
  array: [],
  mergeSortRange: [],
  quickSortRange: [],
  heapSortRange: [],
  bubbleSortRange: [],
  randomQuickSortRange: [],
  sortRange: []
};

export const sortReducer = (state=initialState, action) => {
  switch (action.type) {
    case (COMPUTE_SORT_SUCCESS):
      console.log(action.payload);
      return {
        ...state,
        array: action.payload.array,
        sortRange: action.payload.arrayStates
      };
    default:
      return state;
  }
};
