const customBuildsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CUSTOM_BUILDS':
      return {
        ...state,
        builds: action.payload
      }
    default:
      return state;
  }
};

export default customBuildsReducer;