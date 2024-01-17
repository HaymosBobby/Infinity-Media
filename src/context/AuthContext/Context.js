import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./Reducer";

export const INITIAL_STATE = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: false,
  errorMessage: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

  useEffect(() => {
    const user = localStorage.setItem("user", JSON.stringify(state.user));

    if (user) {
      state.user = user;
    }
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        errorMessage: state.errorMessage,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
