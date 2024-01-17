export const FetchPodcastStart = () => ({
  type: "FETCH_PODCAST_START",
});

export const FetchPodcastSuccess = (podcasts) => ({
  type: "FETCH_PODCAST_SUCCESS",
  payload: podcasts,
});

export const FetchPodcastFailure = (error) => ({
  type: "FETCH_PODCAST_FAILURE",
  payload: error,
});
export const FetchBlogStart = () => ({
  type: "FETCH_BLOG_START",
});

export const FetchBlogSuccess = (blogs) => ({
  type: "FETCH_BLOG_SUCCESS",
  payload: blogs,
});

export const FetchBlogFailure = (error) => ({
  type: "FETCH_BLOG_FAILURE",
  payload: error,
});
