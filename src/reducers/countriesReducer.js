export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_COUNTRIES':
      return action.countries
    case 'TOGGLE_STUDY_STATUS':
      return state.map(country => {
        return country.name === action.name ?
          {...country, needsStudied: !country.needsStudied}
          : country
      })

    default:
      return state
  };
};
