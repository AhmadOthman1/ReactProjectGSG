import React from 'react'
import Style from './style.module.css';
const TodaysWeather = ({
    
    
}) => {
  return (
    <div class="FD" id="FD">
      <img class="cloudsImage" src=""/>
      <h4>Today</h4>
      <h5 class="date"></h5>
      <p class="temp"></p>
      <p class="pressure"></p>
      <p class="feelsLike"></p>
      <p class="humidity"></p>
      <p class="clouds"></p>
      <p class="wind"></p>
      
  </div>
  )
}

export default TodaysWeather;