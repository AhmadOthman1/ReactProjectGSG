import React, { useEffect, useState } from "react";
import "./Styles.css";
import axios from "axios";
import Camera from "./Camera";
const LiveCameras = () => {
  const [Cameras, setCameras] = useState([]);
  console.log("res", Cameras);
  /*var url="https://api.openweathermap.org/data/2.5/forecast?q=",
  city=document.getElementById("cityNameInput").value,
  key="&appid=05fa32e8b10697d772e1f5ea410b6221&units=metric";*/
  useEffect(() => {
    axios
      .get(
        " https://api.openweathermap.org/data/2.5/forecast?q=london&appid=05fa32e8b10697d772e1f5ea410b6221&units=metric "
      )
      .then((response) => {
        console.log(response);
        setCameras(response.data);
      });
  }, []);
  const cam = [
    {
      title: "London",
      url: "/assets/london.jpg",
      date_time: "26 Nov, 10:00AM",
    },
    {
      title: "New York",
      url: "/assets/newyork.jpg",
      date_time: "26 Nov, 8:00AM",
    },
    {
      title: "Los Angeles",
      url: "/assets/LosAngeles.jpg",
      date_time: "26 Nov, 8:00AM",
    },
    {
      title: "Chicago",
      url: "/assets/chicago.jpg",
      date_time: "26 Nov, 7:00AM",
    },
  ];
  return (
    <div className="live_section">
      <p className="live_cameras_title">Live Cameras</p>
      <div className="live_cameras">
        {cam.map((item, index) => (
          <Camera data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LiveCameras;
