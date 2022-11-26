import React from 'react'
import Style from './style.module.css';
function Search({
    buttonTitle,
    textPrompt
}) {
  return (
    <div className={Style.weatherSearch}>    
    <div className={Style.topBanner}>
        <input type="text" className={Style.cityNameInput}d="cityNameInput" placeholder={textPrompt} value="new york"/>
        <input type="button" className={Style.searchButton} id="search" value={buttonTitle} onclick="getWeather()"/>
    </div>
    </div>

  )
}

export default Search;