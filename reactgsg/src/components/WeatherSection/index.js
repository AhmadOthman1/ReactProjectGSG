import React from 'react'
import Search from '../Search';
import Style from './style.module.css';
import WeatherData from '../WeatherData';

function WeatherSection() {
  
  return (
    <div className={Style.weatherSection}>
        <Search buttonTitle="Find" textPrompt="City Name"/>
        <WeatherData/>
    </div>
  )
}

export default WeatherSection;