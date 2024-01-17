import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import PodcastComp from "../components/PodcastComp";
import Loader from "../components/Loader";
// import Error from "../components/Error";
import { AppContext } from "../context/AppContext/Context";

const Podcast = () => {
  const [podcast, setPodcast] = useState({});
  const { id } = useParams();
  const { podcasts } = useContext(AppContext);

  useEffect(() => {
    let podcast =
      podcasts &&
      podcasts.length > 0 &&
      podcasts.find((p) => {
        return p._id.toString() === id.toString();
      });
    setPodcast(podcast);
  }, [id, podcasts]);

  return (
    <div className="podcast_page">
      <div className="page_header_section"></div>

      {!podcast ? (
            <Loader />
          ) : (
            podcast &&
            Object.entries(podcast).length > 0 && (
              <PodcastComp key={podcast._id} podcast={podcast} />
            )
          )}

      
    </div>
  );
};

export default Podcast;

// {isLoading ? (
//   <Loader />
// ) : error ? (
//   <Error message={errorMsg} />
// ) : (
//   Object.keys(podcast).length > 0 && (
//     <PodcastComp
//       key={podcast._id}
//       id={podcast._id}
//       title={podcast.title}
//       excerpt={podcast.excerpt}
//       podcastUrl={podcast.podcastUrl}
//       createdAt={podcast.createdAt}
//     />
//   )
// )}