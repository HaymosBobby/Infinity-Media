import podcast1 from "../img/podcast1.jpg";
import { useEffect, useRef, useState } from "react";

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

const Podcast = ({ podcast, currentPodcast, handleData, data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const podcastRef = useRef(null);

  const { title, excerpt, createdAt, podcastURL, podcastSize, programId, _id } =
    podcast;
  const { picURL } = programId;
  const size = (podcastSize / (1024 * 1024)).toFixed(2);
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(createdAt).toLocaleDateString("en-US", options);

  const convertDuration = (duration) => {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration % 3600) / 60);
    var seconds = Math.floor(duration % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const totalDuration = convertDuration(duration);

  const handlePlayPodcast = (podcastId) => {
    handleData(podcastId);
    setIsPlaying(true);
  };

  const handlePausePodcast = () => {
    setIsPlaying(false);
    podcastRef.current.pause();
  };

  useEffect(() => {
    if (isPlaying && currentPodcast._id === _id) {
      podcastRef.current.play();
      // console.log(currentPodcast);
      // console.log(data);

      const selected = data.find((d) => {
        return d._id === _id && d.active;
      });
      setSelectedPodcast(selected);
    } else {
      setIsPlaying(false);
      podcastRef.current.pause();
    }
  }, [isPlaying, _id, currentPodcast, data]);

  // const handlePlayPodcast = (podcastId) => {
  //   const pod = podcasts.find((p) => p._id.toString() === podcastId.toString());
  //   setSelectedPodcast(pod);
  //   setIsPlaying(true);
  //   // isPlaying ? podcastRef.current.pause() : podcastRef.current.play();
  //   podcastRef.current.play();
  //   console.log(selectedPodcast);
  //   console.log(podcastId);
  // };

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
    <div
      className={`podcast ${
        selectedPodcast && selectedPodcast.active && currentPodcast._id === _id
          ? "active"
          : ""
      }`}
    >
      <div className="podcast_image">
        <img src={picURL ? picURL : podcast1} alt="podcast" />
      </div>
      <div className="podcast_content">
        <div className="podcast_info">
          <span className="date txt_small">
            <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> {date}
          </span>
          <span className="time txt_small">
            <TimerOutlined sx={{ fontSize: 18 }} className="icon" />
            {totalDuration || "00:00 "}
          </span>
          <span className="info txt_small">
            <MusicNote sx={{ fontSize: 18 }} className="icon" /> {size}mb
          </span>
        </div>
        <div className="podcast_details">
          <Link to={`/podcast/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p>{excerpt}</p>
        </div>
        <div className="podcast_control">
          <div className="podcast_play_control">
            <Replay10 className="icon" onClick={() => handleSkip("ten")} />
            {isPlaying ? (
              <PauseCircleOutline
                onClick={handlePausePodcast}
                className="icon"
                sx={{ fontSize: 35 }}
              />
            ) : (
              <PlayCircleOutline
                onClick={() => handlePlayPodcast(_id)}
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
                  onClick={handlePausePodcast}
                  className="icon"
                  sx={{ fontSize: 35 }}
                />
              ) : (
                <PlayCircleOutline
                  onClick={() => handlePlayPodcast(_id)}
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
    </div>
  );
};

export default Podcast;

// import podcast1 from "../img/podcast1.jpg";

// import {
//   CalendarMonth,
//   FileDownloadOutlined,
//   Forward30,
//   MusicNote,
//   PauseCircleOutline,
//   PlayCircleOutline,
//   Replay10,
//   Share,
//   TimerOutlined,
//   VolumeUp,
// } from "@mui/icons-material";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const Podcast = ({ podcast, currentPodcast, handleData, data }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const podcastRef = useRef(null);
//   const { title, excerpt, createdAt, podcastURL, podcastSize, programId, _id } =
//     podcast;
//   const { picURL } = programId;
//   const size = (podcastSize / (1024 * 1024)).toFixed(2);
//   const options = {
//     // weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   const date = new Date(createdAt).toLocaleDateString("en-US", options);

//   const handlePlayPodcast = async (podcastId) => {
//     await handleData(podcastId);
//     setIsPlaying(true);
//   };

//   const handlePausePodcast = () => {
//     setIsPlaying(false);
//   };

//   useEffect(() => {
//     if (isPlaying && currentPodcast._id === _id) {
//       podcastRef.current.play();
//       console.log(currentPodcast);
//       console.log(data);
//     } else {
//       podcastRef.current.pause();
//       setIsPlaying(false);
//     }
//   }, [isPlaying, _id, currentPodcast, data]);
//   return (
//     <div className="podcast">
//       <div className="podcast_image">
//         <img src={picURL ? picURL : podcast1} alt="podcast" />
//       </div>
//       <div className="podcast_content">
//         <div className="podcast_info">
//           <h5 className="date">
//             <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> {date}
//           </h5>
//           <h5 className="time">
//             <TimerOutlined sx={{ fontSize: 18 }} className="icon" /> 00:00
//           </h5>
//           <h5 className="info">
//             <MusicNote sx={{ fontSize: 18 }} className="icon" /> {size}mb
//           </h5>
//         </div>
//         <div className="podcast_details">
//           <Link to="/podcast">
//             <h2>{title}</h2>
//           </Link>
//           <p>{excerpt}</p>
//         </div>
//         <div className="podcast_control">
//           <div className="podcast_play_control">
//             <Replay10 className="icon" />
//             {isPlaying ? (
//               <PauseCircleOutline
//                 className="icon"
//                 sx={{ fontSize: 35 }}
//                 onClick={() => handlePausePodcast()}
//               />
//             ) : (
//               <PlayCircleOutline
//                 className="icon"
//                 sx={{ fontSize: 35 }}
//                 onClick={() => handlePlayPodcast(_id)}
//               />
//             )}
//             <Forward30 className="icon" />
//           </div>
//           <div className="podcast_time_control">
//             <p className="start">Start</p>
//             <input type="range" />
//             <p className="stop">End</p>
//           </div>
//           <div className="podcast_shuffle_control">
//             <VolumeUp className="icon" />
//             <Share className="icon" />
//             <FileDownloadOutlined className="icon" />
//           </div>

//           <div className="mobile_podcast_control">
//             <div className="mobile_play_control">
//               <Replay10 className="icon" />
//               <PlayCircleOutline className="icon" sx={{ fontSize: 35 }} />
//               <Forward30 className="icon" />
//             </div>
//             <div className="mobile_shuffle_control">
//               <VolumeUp className="icon" />
//               <Share className="icon" />
//               <FileDownloadOutlined className="icon" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <audio ref={podcastRef} src={podcastURL}></audio>
//     </div>
//   );
// };

// export default Podcast;

// const test = podcasts.map((p) => {
//   if (p._id === podcastId) {
//     return {
//       ...p,
//       active: true,
//     };
//   } else {
//     return {
//       ...p,
//       active: false,
//     };
//   }
// });
