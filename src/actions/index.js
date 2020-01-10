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
})
