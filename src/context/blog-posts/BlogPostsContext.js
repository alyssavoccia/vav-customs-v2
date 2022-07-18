import { createContext, useReducer } from "react";
import blogPostsReducer from './blogPostsReducer';

const BlogPostsContext = createContext();

export const BlogPostsProvider = ({ children }) => {
  const initialState = {
    blogPosts: []
  };

  const [state, dispatch] = useReducer(blogPostsReducer, initialState);

  return (
    <BlogPostsContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </BlogPostsContext.Provider>
  )
}

export default BlogPostsContext;