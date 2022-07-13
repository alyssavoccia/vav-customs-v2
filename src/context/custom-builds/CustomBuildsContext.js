import { createContext, useReducer } from "react";
import customBuildsReducer from "./customBuildsReducer";

const CustomBuildsContext = createContext();

export const CustomBuildsProvider = ({ children }) => {
  const initialState = {
    builds: []
  };

  const [state, dispatch] = useReducer(customBuildsReducer, initialState);

  return (
    <CustomBuildsContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </CustomBuildsContext.Provider>
  )
}

export default CustomBuildsContext;