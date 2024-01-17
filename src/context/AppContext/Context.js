import { createContext, useReducer } from "react";
import AppReducer from "./Reducer";

const INITIAL_STATE = {
  podcasts: [],
  blogs: [],
  isLoadingP: false,
  isLoadingB: false,
  errorP: false,
  errorB: false,
  errorMessageP: null,
  errorMessageB: null,
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{
        podcasts: state.podcasts,
        blogs: state.blogs,
        isLoadingP: state.isLoadingP,
        isLoadingB: state.isLoadingB,
        errorP: state.errorP,
        errorB: state.errorB,
        errorMessageP: state.errorMessageP,
        errorMessageB: state.errorMessageB,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
