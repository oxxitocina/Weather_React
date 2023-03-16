import {React, useContext} from 'react'
import { WeatherContext } from '../context/Context';

export default function DetailsTab(props) {

  const weatherData = useContext(WeatherContext);

  return (
    <div className='details-tab'>

        <div className="details">
            {weatherData.name}
        </div>

        <div className="details-container">
            <ul className="details-list">
                <li className="details_temperature">Temperature: {weatherData.main.temp}<sup>°</sup> </li>
                <li className="details_feels_like" >Feels like: {weatherData.main.feels_like}<sup>°</sup></li>
                <li className="details_weather" >Weather: {weatherData.weather[0].main}</li>
                <li className="details_sunrise" >Sunrise: {weatherData.sys.sunrise}</li>
                <li className="details_sunset" >Sunset: {weatherData.sys.sunset}</li>
            </ul>
        </div>
        
    </div>
  )
}
