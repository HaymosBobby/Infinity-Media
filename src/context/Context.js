import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./Reducer";

export const INITIAL_STATE = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: false,
  errorMessage: null,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

  // useEffect(() => {
  //   const res = localStorage.getItem("user");
  //   if (!res || res === null) {
  //     return;
  //   }
  //   const user = JSON.parse(res);

  //   if (!user || user === null) {
  //     return;
  //   }
  //   console.log(state);
  // }, [state]);

  useEffect(() => {
    const user = localStorage.setItem("user", JSON.stringify(state.user));

    if (user) {
      state.user = user;
    }
  }, [state]);

  // useEffect(() => {
  //   const res = localStorage.getItem("user") || null;
  //   if (!res || res === null) {
  //     return;
  //   }
  //   const user = JSON.parse(res);

  //   console.log(user);
  //   if (!user || user === null) {
  //     return;
  //   }
  //   const token = user.token;
  //   state.isAuth = true;
  //   state.token = token;
  //   console.log(state);

  //   console.log(state.isAuth);
  //   console.log(state.token);
  // }, [state, state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        errorMessage: state.errorMessage,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
