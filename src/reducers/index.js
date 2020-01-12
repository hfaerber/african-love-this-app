import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { countriesReducer } from './countriesReducer';
import { selectedFilterReducer } from './selectedFilterReducer';
import { searchQueryReducer } from './searchQueryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  selectedFilter: selectedFilterReducer,
  searchQuery: searchQueryReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export default rootReducer;
