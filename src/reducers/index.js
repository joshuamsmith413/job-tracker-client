import currentUserReducer from './currentUser.js';
import jobAppsReducer from './jobApps.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  currentUser : currentUserReducer,
  jobApps : jobAppsReducer
})

export default allReducers;
