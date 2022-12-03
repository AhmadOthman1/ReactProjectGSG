import React from 'react'
import Style from './style.module.css';
import { useState,useEffect } from 'react';
import area from '../../cordinates.json';
import axios from "axios";

function Search({
    buttonTitle,
    textPrompt
}) {
    const [data, setData] = useState([]) 
    const [Loading, setLoading] = useState(true) 
    const [Filter, setFilter] = useState("palestinian") 
    var palestine = area.ref_country_codes.filter(a => a.country.toLowerCase().includes(Filter)) 

    const [Cont, setCont] = useState(palestine) 
    const [Country, setCountry] = useState(palestine) 

    const MSearch = (e) => { 
        e.preventDefault() 
        var search = Filter.toLowerCase() 
        var palestine2 = area.ref_country_codes.filter(a => a.country.toLowerCase().includes(search)) 
        setCountry(palestine2) 
        setCont(palestine2) 
    } 

    var date = new Date() 
    useEffect(() => { 
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${Cont.map(i => i.latitude)}&longitude=${Cont.map(i => i.longitude)}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`).then(resp => { 
          setLoading(false) 
          setData(resp.data) 
          console.log(data);
      }).catch(err => { 
          
      }) 
  }, [Cont])
  
  return (
    <div className={Style.weatherSearch}>    
    <div className={Style.topBanner}>
        <input type="text" className={Style.cityNameInput}d="cityNameInput" placeholder={textPrompt} />
        <input type="button" className={Style.searchButton} id="search" value={buttonTitle} onclick={MSearch}/>
    </div>
    </div>

  )
}

export default Search;