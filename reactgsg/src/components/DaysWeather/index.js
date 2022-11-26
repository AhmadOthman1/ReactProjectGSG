import React from 'react'
import Style from './style.module.css';
const DaysWeather = ({
    cloudsImage,
    date,
    temp,
    color1,
    color2,
}) => {
  return (
    <div className={Style.DaysWeatherSection} style={{backgroundColor:color2}}>
      <h4 className={Style.date} style={{backgroundColor:color1}}>{date}</h4>
      <div className={Style.tempImage}>
        <img className={Style.cloudsImage} src={cloudsImage}/>
        <p className={Style.temp}>{temp+" c"}</p>
      </div>
    </div>
  )
}

export default DaysWeather;