const AppReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PODCAST_START":
      return {
        ...state,
        isLoadingP: true,
      };
    case "FETCH_PODCAST_SUCCESS":
      return {
        ...state,
        isLoadingP: false,
        podcasts: action.payload,
      };
    case "FETCH_PODCAST_FAILURE":
      return {
        isLoadingP: false,
        errorP: true,
        errorMessageP: action.payload,
      };
    case "FETCH_BLOG_START":
      return {
        ...state,
        isLoadingB: true,
      };
    case "FETCH_BLOG_SUCCESS":
      return {
        ...state,
        isLoadingB: false,
        blogs: action.payload,
      };
    case "FETCH_BLOG_FAILURE":
      return {
        ...state,
        isLoadingB: false,
        errorB: true,
        errorMessageB: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
