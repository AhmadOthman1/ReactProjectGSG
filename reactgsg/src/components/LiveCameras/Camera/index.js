import React from "react";
import "./Styles.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Camera = ({ data }) => {
  return (
    <div className="camera_card">
      <div className="play_cam">
        <img src={data.url} className="camera_img" />
        <BsFillPlayCircleFill size={32} color="white" className="play_icon" />
      </div>
      <p className="title">{data.title}</p>
      <p className="date">{data.date_time}</p>
    </div>
  );
};

export default Camera;
