const LoginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        // ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        isLoading: false,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        isLoading: false,
        error: true,
        errorMessage: action.payload,
        user: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default LoginReducer;
