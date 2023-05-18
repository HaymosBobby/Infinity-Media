import podcast1 from "../img/podcast1.jpg";
import podcast from "../img/podcast.mp3";
import { useRef } from "react";

import {
  CalendarMonth,
  FileDownloadOutlined,
  Forward30,
  MusicNote,
  PlayCircleOutline,
  Replay10,
  Share,
  TimerOutlined,
  VolumeUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Podcast = ({ title, excerpt, createdAt, podcastUrl }) => {
  const iso = new Date(createdAt);
  const date = iso.toLocaleDateString("sv-SE");

  const podcastRef = useRef(null);

  const playPodcast = () => {
    podcastRef.current.play();
  };

  return (
    <div className="podcast">
      <div className="podcast_image">
        <img src={podcast1} alt="podcast" />
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
          <Link to="/podcast/:id">
            <h2>{title}</h2>
          </Link>
          <p>{excerpt}</p>
        </div>
        <div className="podcast_control">
          <div className="podcast_play_control">
            <Replay10 className="icon" />
            <PlayCircleOutline
              onClick={playPodcast}
              className="icon"
              sx={{ fontSize: 35 }}
            />
            <Forward30 className="icon" />
          </div>
          <div className="podcast_time_control">
            <p className="start">Start</p>
            <input type="range" />
            <p className="stop">End</p>
          </div>
          <div className="podcast_shuffle_control">
            <VolumeUp className="icon" />
            <Share className="icon" />
            <FileDownloadOutlined className="icon" />
          </div>

          <div className="mobile_podcast_control">
            <div className="mobile_play_control">
              <Replay10 className="icon" />
              <PlayCircleOutline className="icon" sx={{ fontSize: 35 }} />
              <Forward30 className="icon" />
            </div>
            <div className="mobile_shuffle_control">
              <VolumeUp className="icon" />
              <Share className="icon" />
              <FileDownloadOutlined className="icon" />
            </div>
          </div>
        </div>
      </div>

      <audio src={podcastUrl} ref={podcastRef}></audio>
    </div>
  );
};

export default Podcast;
