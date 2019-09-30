import currentUserReducer from './currentUser.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  currentUser : currentUserReducer
})

export default allReducers;
