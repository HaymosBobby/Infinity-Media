import podcast1 from "../img/podcast1.jpg";
import { useRef, useState } from "react";

import {
  CalendarMonth,
  FileDownloadOutlined,
  Forward30,
  MusicNote,
  PauseCircleOutline,
  PlayCircleOutline,
  Replay10,
  Share,
  TimerOutlined,
  VolumeUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Podcast = ({
  title,
  excerpt,
  createdAt,
  podcastURL,
  id,
  podcasts,
  picURL,
}) => {
  // console.log(podcasts);
  const iso = new Date(createdAt);
  const date = iso.toLocaleDateString("sv-SE");

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const podcastRef = useRef(null);

  const handlePodcast = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? podcastRef.current.pause() : podcastRef.current.play();
  };

  const handleDrag = (e) => {
    e.preventDefault();
    setCurrentTime(e.target.value);
    // setDuration(e.target.duration);

    podcastRef.current.currentTime = e.target.value;

    // console.log(podcastRef.current.currentTime);
  };

  const handleSkip = (amount) => {
    if (amount === "ten") {
      return (podcastRef.current.currentTime -= 10);
    }
    if (amount === "thirty") {
      return (podcastRef.current.currentTime += 30);
    }
  };

  const timeUpdateHandler = (e) => {
    e.preventDefault();
    setCurrentTime(e.target.currentTime);
    setDuration(e.target.duration);
    // Calculate Percentage
    // const roundedCurrent = Math.round(current);
    // const roundedDuration = Math.round(duration);
    // const animation = Math.round((roundedCurrent / roundedDuration) * 100);
  };

  const songEndHandler = (e) => {
    e.preventDefault();
    setIsPlaying(false);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="podcast">
      <div className="podcast_image">
        <img src={picURL ? picURL : podcast1} alt="podcast" />
      </div>
      <div className="podcast_content">
        <div className="podcast_info">
          <span className="date txt_small">
            <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> {date}
          </span>
          <span className="time txt_small">
            <TimerOutlined sx={{ fontSize: 18 }} className="icon" /> 00:00
          </span>
          <span className="info txt_small">
            <MusicNote sx={{ fontSize: 18 }} className="icon" /> 3.7mb
          </span>
        </div>
        <div className="podcast_details">
          <Link to={`/podcast/${id}`}>
            <h2>{title}</h2>
          </Link>
          <p>{excerpt}</p>
        </div>
        <div className="podcast_control">
          <div className="podcast_play_control">
            <Replay10 className="icon" onClick={() => handleSkip("ten")} />
            {isPlaying ? (
              <PauseCircleOutline
                onClick={handlePodcast}
                className="icon"
                sx={{ fontSize: 35 }}
              />
            ) : (
              <PlayCircleOutline
                onClick={handlePodcast}
                className="icon"
                sx={{ fontSize: 35 }}
              />
            )}
            <Forward30 className="icon" onClick={() => handleSkip("thirty")} />
          </div>
          <div className="podcast_time_control">
            <p className="start">{getTime(currentTime)}</p>
            <input
              type="range"
              min={0}
              max={duration || 0}
              onChange={handleDrag}
              value={currentTime}
            />
            <p className="stop">{duration ? getTime(duration) : "0:00"}</p>
          </div>
          <div className="podcast_shuffle_control">
            <VolumeUp className="icon" />
            <Share className="icon" />
            <FileDownloadOutlined className="icon" />
          </div>

          <div className="mobile_podcast_control">
            <div className="mobile_play_control">
              <Replay10 className="icon" onClick={() => handleSkip("ten")} />
              {isPlaying ? (
                <PauseCircleOutline
                  onClick={handlePodcast}
                  className="icon"
                  sx={{ fontSize: 35 }}
                />
              ) : (
                <PlayCircleOutline
                  onClick={handlePodcast}
                  className="icon"
                  sx={{ fontSize: 35 }}
                />
              )}
              <Forward30
                className="icon"
                onClick={() => handleSkip("thirty")}
              />
            </div>
            <div className="mobile_shuffle_control">
              <VolumeUp className="icon" />
              <Share className="icon" />
              <FileDownloadOutlined className="icon" />
            </div>
          </div>
        </div>
      </div>

      <audio
        src={podcastURL}
        ref={podcastRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
      {/*  onLoadedMetadata={timeUpdateHandler}  */}
    </div>
  );
};

export default Podcast;
