import React from 'react'
import Style from './style.module.css';
import TodaysWeather from '../TodaysWeather';
import DaysWeather from '../DaysWeather';


const [cloudsImage,date,temp,city,humidity,wind]=[
  "04n@2x.png",
  "11/11",
  "28",
  "Nablus",
  "70%",
  "50"
];
  

function WeatherData() {
  return (
    <div className={Style.WeatherData}>
      <TodaysWeather cloudsImage={cloudsImage} date={date} temp={temp} city={city} humidity={humidity} wind={wind}/>
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} color1="#222530" color2="#262936"/>
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} />
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} color1="#222530" color2="#262936"/>
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} />
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} color1="#222530" color2="#262936"/>
      <DaysWeather cloudsImage={cloudsImage} date={date} temp={temp} />
    </div>
  )
}

export default WeatherData;