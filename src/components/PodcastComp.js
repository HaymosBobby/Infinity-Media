import {
  CalendarMonth,
  FileDownloadOutlined,
  Forward30,
  MusicNote,
  PlayCircleOutline,
  Podcasts,
  Replay10,
  Share,
  TimerOutlined,
  VolumeUp,
} from "@mui/icons-material";
import podcast1 from "../img/podcast1.jpg";
import host from "../img/host.jpg";
import { useRef, useState } from "react";

const PodcastComp = ({title, excerpt, podcastUrl, createdAt}) => {

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
    if (amount === "ten"){
      return podcastRef.current.currentTime -= 10; 
    }
    if (amount === "thirty"){
      return podcastRef.current.currentTime += 30; 
    }
  }


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
  }

  const getTime = (time) => {
    return(
      (Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    );
  };

  return (
    <div className="podcast_page_section_container">
      <div className="podcast_page_section">
        <div className="podcast_image">
          <div>
            <img src={podcast1} alt="podcast" />
          </div>
          <button type="submit">Subscribe Now</button>
        </div>

        <div className="podcast_content">
          <div className="podcast_info">
            <h5 className="title txt_small">
              <Podcasts sx={{ fontSize: 18 }} className="icon" /> Infinity
              Media
            </h5>
            <h5 className="date txt_small">
              <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> June 25,
              2022
            </h5>
            <h5 className="time txt_small">
              <TimerOutlined sx={{ fontSize: 18 }} className="icon" /> 00:00
            </h5>
            <h5 className="info txt_small">
              <MusicNote sx={{ fontSize: 18 }} className="icon" /> 3.7mb
            </h5>
          </div>
          <div className="podcast_details">
            <h2>{title}</h2>
          </div>
          <div className="podcast_control">
            <div className="podcast_play_control">
              <Replay10 className="icon" />
              <PlayCircleOutline sx={{ fontSize: 35 }} className="icon" />
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
          <div className="host">
            <h4>Hosted by</h4>
            <div>
              <img src={host} alt="Host" />
              <h5>Adegoke Michael Oluwatobiloba (A.M.O)</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="podcast_page_info">
        {excerpt}
      </div>

      <audio src={podcastUrl} ref={podcastRef}></audio>
    </div>
  );
};

export default PodcastComp;
