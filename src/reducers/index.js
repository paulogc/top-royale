import {
  combineReducers,
} from 'redux';

import incrementReducer from './incrementReducer';

const reducers = combineReducers({
  incrementReducer,
});

export default reducers;
