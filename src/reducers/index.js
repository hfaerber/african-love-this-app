import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer
});

export default rootReducer;
