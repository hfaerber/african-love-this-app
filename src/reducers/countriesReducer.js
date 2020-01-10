export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_COUNTRIES':
      return action.countries
    default:
      return state;
  };
};
