export const isLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_LOADING_STATUS':
      return action.status
    default:
      return state
  };
};
