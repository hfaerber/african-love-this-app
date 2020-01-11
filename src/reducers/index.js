import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { countriesReducer } from './countriesReducer';
import { selectedFilterReducer } from './selectedFilterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  selectedFilter: selectedFilterReducer
});

export default rootReducer;
