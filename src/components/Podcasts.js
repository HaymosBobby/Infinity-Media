import { useContext, useEffect, useState } from "react";
import Podcast from "./Podcast";
import Loader from "./Loader";
import Error from "./Error";
import { AppContext } from "../context/AppContext/Context";

const Podcasts = () => {
  const { isLoadingP, errorP, errorMessageP, podcasts } =
    useContext(AppContext);

  const [data, setData] = useState([]);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  useEffect(() => {
    podcasts && podcasts.length > 0 && setData(podcasts);
  }, [podcasts]);

  const handleData = (podcastId) => {
    const newData = podcasts.map((p) => {
      if (p._id === podcastId) {
        return {
          ...p,
          active: true,
        };
      } else {
        return {
          ...p,
          active: false,
        };
      }
    });

    setData(newData);
    setCurrentPodcast(
      data.find((p) => p._id.toString() === podcastId.toString())
    );
  };

  return (
    <>
      <div>
        {isLoadingP ? (
          <Loader />
        ) : errorP ? (
          <Error message={errorMessageP} />
        ) : (
          <div>
            {data.map((podcast) => {
              return (
                <Podcast
                  podcast={podcast}
                  key={podcast._id}
                  podcasts={podcasts}
                  setData={setData}
                  currentPodcast={currentPodcast}
                  data={data}
                  handleData={handleData}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Podcasts;
