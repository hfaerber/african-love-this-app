import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { countriesReducer } from './countriesReducer';
import { selectedFilterReducer } from './selectedFilterReducer';
import { searchQueryReducer } from './searchQueryReducer';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  selectedFilter: selectedFilterReducer,
  searchQuery: searchQueryReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export default rootReducer;
