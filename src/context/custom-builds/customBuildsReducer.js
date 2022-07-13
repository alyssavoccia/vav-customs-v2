const customBuildsReducer = (state, action) => {
  switch (action.type) {
    case 'CUSTOM_BUILDS_FOUND':
      return {
        ...state,
        builds: action.payload
      }
    default:
      return state;
  }
};

export default customBuildsReducer;