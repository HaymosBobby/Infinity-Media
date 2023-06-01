import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PodcastComp from "../components/PodcastComp";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Podcast = () => {
  const [podcast, setPodcast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { id } =  useParams();


  useEffect(() => {

    const getPodcast = async (id) => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/imedia-podcasts/${id}`
        );
        res && setPodcast(res.data);
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

    getPodcast(id);
  },[id])
  return (
    <div className="podcast_page">
      <div className="page_header_section"></div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={errorMsg} />
      ) : (
        Object.keys(podcast).length > 0 && (
          <PodcastComp
            key={podcast._id}
            id={podcast._id}
            title={podcast.title}
            excerpt={podcast.excerpt}
            podcastUrl={podcast.podcastUrl}
            createdAt={podcast.createdAt}
          />
        )
      )}
    </div>
  );
};

export default Podcast;
