import {
  combineReducers
} from 'redux';

import { sortReducer } from './sortReducer';

export default combineReducers({
  sort: sortReducer
});
