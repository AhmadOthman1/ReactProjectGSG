import React from 'react'
import Style from './style.module.css';
const TodaysWeather = ({
    cloudsImage,
    date,
    temp,
    city,
    humidity,
    wind
}) => {
  return (
    <div className={Style.TodaysWeatherSection}>
      <div className={Style.DateDay}>
        <h4 className={Style.day}>Today</h4>
        <h5 className={Style.date}>{date}</h5>
      </div>
      <p className={Style.city}>{city}</p>
      <div className={Style.TempImage}>
        <p className={Style.temp}>{temp+"C"}</p>
        <img className={Style.cloudsImage} src={cloudsImage}/>
      </div>
      <div className={Style.Data}>
        <img src='icon-umberella.png' className={Style.dataIcon}/>
        <p className={Style.humidity}>{humidity}</p>
        <img src='icon-wind.png'className={Style.dataIcon}/>
        <p className={Style.wind}>{wind+"km/h"}</p>
      </div>
    </div>
  )
}

export default TodaysWeather;