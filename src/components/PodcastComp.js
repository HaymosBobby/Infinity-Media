import {
  CalendarMonth,
  FileDownloadOutlined,
  Forward30,
  MusicNote,
  PlayCircleOutline,
  PauseCircleOutline,
  Podcasts,
  Replay10,
  Share,
  TimerOutlined,
  VolumeUp,
} from "@mui/icons-material";
import podcast1 from "../img/podcast1.jpg";
import host from "../img/host.jpg";
import { useRef, useState } from "react";

const PodcastComp = ({ podcast }) => {
  const {
    title,
    excerpt,
    podcastURL,
    createdAt,
    programId,
    podcastSize,
    userId,
  } = podcast;
  const { picURL, anchor } = programId;
  const author = userId.username;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const podcastRef = useRef(null);

  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const iso = new Date(createdAt);
  const date = iso.toLocaleDateString("en-US", options);

  const convertDuration = (duration) => {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration % 3600) / 60);
    var seconds = Math.floor(duration % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const totalDuration = convertDuration(duration);

  const size = (podcastSize / (1024 * 1024)).toFixed(2);

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
    <div className="podcast_page_section_container">
      <div className="podcast_page_section">
        <div className="podcast_image">
          <div>
            <img src={picURL ? picURL : podcast1} alt="podcast" />
          </div>
          <button type="submit">Subscribe Now</button>
        </div>

        <div className="podcast_content">
          <div className="podcast_info">
            <span className="title txt_small">
              <Podcasts sx={{ fontSize: 18 }} className="icon" /> {author}
            </span>
            <span className="date txt_small">
              <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> {date}
            </span>
            <span className="time txt_small">
              <TimerOutlined sx={{ fontSize: 18 }} className="icon" />
              {totalDuration}
            </span>
            <span className="info txt_small">
              <MusicNote sx={{ fontSize: 18 }} className="icon" /> {size}mb
            </span>
          </div>
          <div className="podcast_details">
            <h2>{title}</h2>
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
              <Forward30
                className="icon"
                onClick={() => handleSkip("thirty")}
              />
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
          <div className="host">
            <h4>Hosted by</h4>
            <div>
              <img src={picURL ? picURL : host} alt="Host" />
              <h5>{anchor}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="podcast_page_info">{excerpt}</div>

      <audio
        src={podcastURL}
        ref={podcastRef}
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default PodcastComp;
