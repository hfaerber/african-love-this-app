export const selectedFilterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_FILTER':
      return action.filter
    default:
      return state
  };
};
