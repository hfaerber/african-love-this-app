export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
});

export const updateCountries = countries => ({
  type: 'UPDATE_COUNTRIES',
  countries
});

export const toggleStudyStatus = name => ({
  type: 'TOGGLE_STUDY_STATUS',
  name
});

export const updateSelectedFilter = filter => ({
  type: 'UPDATE_SELECTED_FILTER',
  filter
});

export const updateSearchQuery = query => ({
  type: 'UPDATE_SEARCH_QUERY',
  query
});

export const updateError = errorMessage => ({
  type: 'UPDATE_ERROR',
  errorMessage
});

export const updateLoadingStatus = status => ({
  type: 'UPDATE_LOADING_STATUS',
  status
});
