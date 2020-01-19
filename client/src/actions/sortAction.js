import {
  COMPUTE_SORT_FAILED,
  COMPUTE_SORT_SUCCESS
} from './actions';

import axios from 'axios';

export const computeSort = (arr, name) => dispatchEvent => {
  axios.post('/api/computeSearch', {
    arr: arr,
    name: name
  })
    .then(res => {
      if (res.data.array) {
        dispatchEvent({
          payload: res.data,
          type: COMPUTE_SORT_SUCCESS
        });
      }
    })
    .catch(err => console.error(err));
};
