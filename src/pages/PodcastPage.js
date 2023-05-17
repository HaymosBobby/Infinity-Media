import React from "react";
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

const Podcast = () => {
  return (
    <div className="podcast_page">
      <div className="page_header_section"></div>

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
              <h5 className="title">
                <Podcasts sx={{ fontSize: 18 }} className="icons" /> Infinity
                Media
              </h5>
              <h5 className="date">
                <CalendarMonth sx={{ fontSize: 18 }} className="icons" /> June
                25, 2022
              </h5>
              <h5 className="time">
                <TimerOutlined sx={{ fontSize: 18 }} className="icons" /> 00:00
              </h5>
              <h5 className="info">
                <MusicNote sx={{ fontSize: 18 }} className="icons" /> 3.7mb
              </h5>
            </div>
            <div className="podcast_details">
              <h2>Title of my podcast</h2>
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veniam
          repellat ad numquam repellendus amet optio quaerat explicabo ea minus,
          nam libero aperiam voluptate nostrum earum fugiat minima praesentium
          animi molestias impedit excepturi est voluptatibus corporis dolorem?
          Eligendi sit commodi mollitia totam placeat suscipit cupiditate
          perferendis, corporis distinctio magni incidunt.
        </div>
      </div>
    </div>
  );
};

export default Podcast;
