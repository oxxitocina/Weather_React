import React from 'react'

export default function DetailsTab(props) {
  return (
    <div className='details-tab'>

        <div className="details">
            {props?.data.name}
        </div>

        <div className="details-container">
            <ul className="details-list">
                <li className="details_temperature">Temperature: {props.data?.main.temp}<sup>°</sup> </li>
                <li className="details_feels_like" >Feels like: {props.data?.main.feels_like}<sup>°</sup></li>
                <li className="details_weather" >Weather: {props.data?.weather[0].main}</li>
                <li className="details_sunrise" >Sunrise: {props.data?.sys.sunrise}</li>
                <li className="details_sunset" >Sunset: {props.data?.sys.sunset}</li>
            </ul>
        </div>
        
    </div>
  )
}
