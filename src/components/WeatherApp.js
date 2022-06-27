import React, { useEffect, useState } from 'react';
import "./css/style.css";

const WeatherApp = ()=>{
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lucknow");

    useEffect( () => {
        const fetchApi= async ()=> {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7cb7c488ee53fee5df76335ef3205522`;
            const res = await fetch(url);
            const rJson = await res.json();
            setCity(rJson.main);
        };
        fetchApi(); 
    },[search] );

    return(
        <>
            <div className="head">
                <h1>My Weather App</h1>
            </div>

            <div className="box">
            <div className="inputData">
                    <input type="text" value={search} className="inputField" onChange={ (event)=>{ setSearch(event.target.value) } }/>
                </div>
            

            {
                !city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                <div className="info">
                <h2 className="location"><i className="fas fa-map-marker-alt"></i> {search}</h2>
                <h1 className="temp">{city.temp} °C</h1>
                <h3 className="tempmin_max"> Min : {city.temp_min} °C |  Max : {city.temp_max} °C </h3>
            </div>
            </div>
                )
            }
            </div>
          
        </>
    )
}

export default WeatherApp;