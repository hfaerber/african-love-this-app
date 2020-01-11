export const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_QUERY':
      return action.query
    default:
      return state
  };
};
