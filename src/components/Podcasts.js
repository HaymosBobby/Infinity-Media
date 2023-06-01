import { useState, useEffect } from "react";
import Podcast from "./Podcast";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getPodcasts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:5000/api/imedia-podcasts",
          {
            headers: {
              "x-auth-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY5N2I5ODJjMWZlYjZiNDk0ZDMzNmMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjg0NjM0NTIxfQ.9h_2zS3QQdH5zedD9nl4ic4tquMyqLP8yWWufFlPdIY",
            },
          }
        );
        res && setPodcasts(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
        if (!err.response) {
          return setErrorMsg(err.message);
        }
        setErrorMsg(err.response.data);
      }
    };

    getPodcasts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={errorMsg} />
      ) : (
        <div>
          {podcasts.length > 0 &&
            podcasts.map((podcast) => {
              return (
                <Podcast
                  title={podcast.title}
                  excerpt={podcast.excerpt}
                  createdAt={podcast.createdAt}
                  podcastUrl={podcast.podcastUrl}
                  key={podcast._id}
                  id={podcast._id}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Podcasts;
