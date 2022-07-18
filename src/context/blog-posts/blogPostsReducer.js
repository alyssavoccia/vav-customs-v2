const blogPostssReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POSTS':
      return {
        ...state,
        blogPosts: action.payload
      }
    default:
      return state;
  }
};

export default blogPostssReducer;