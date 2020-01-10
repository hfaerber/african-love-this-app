import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { countriesReducer } from './countriesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer
});

export default rootReducer;
