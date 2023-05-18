import { useState, useEffect } from "react";
import Podcast from "./Podcast";
import axios from "axios";
import Loader from "./Loader";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPodcasts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:5000/api/imedia-podcasts"
        );
        res && setPodcasts(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log(error);
      }
    };

    getPodcasts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        "An Error Occurred"
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
