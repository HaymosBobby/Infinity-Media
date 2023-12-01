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
          "http://localhost:5000/api/imedia-podcasts"
        );
        res && setPodcasts(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        setIsLoading(false);
        setError(true);
        if (!err.response) {
          return setErrorMsg(err.message);
        }
        setErrorMsg(err.response.data.message);
      }
    };

    getPodcasts();
  }, [setPodcasts, setIsLoading, setError, setErrorMsg]);

  

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
                  podcastURL={podcast.podcastURL}
                  picURL={podcast.programId.picURL} 
                  podcasts={podcasts}
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
