import React from 'react'
import imgRain from "../assets/img/rain.png"

export default function ForecastTab({active}) {
  return (
    <div className='forecast-tab'>

        <div className="details">
            <p>Aktobe</p>
        </div>

        <div className="forecast-container">

            <div className="forecast n1">
                <div className="date-forecast">
                    <div className="date">17 May</div>
                    <div className="time">12:00</div>
                </div>
                <div className="weather-flex-parent">
                    <div className="weather-flex-child">
                        <div className="temperature-forecast">Temperature: 13<sup>°</sup> </div>
                        <div className="feels-like">Feels like: 10<sup>°</sup></div>
                    </div>
                    <div className="weather-flex-child">
                        <div className="weather-forecast">Rain</div>
                        <img className="weather-img" src={imgRain} alt="rain"/>
                    </div>
                </div>
            </div>

            <div className="forecast n2">
                <div className="date-forecast">
                    <div className="date">17 May</div>
                    <div className="time">15:00</div>
                </div>
                <div className="weather-flex-parent">
                    <div className="weather-flex-child">
                        <div className="temperature-forecast">Temperature: 13<sup>°</sup> </div>
                        <div className="feels-like">Feels like: 10<sup>°</sup></div>
                    </div>
                    <div className="weather-flex-child">
                        <div className="weather-forecast">Rain</div>
                        <img className="weather-img" src={imgRain} alt="rain"/>
                    </div>
                </div>
            </div>

            <div className="forecast n3">
                <div className="date-forecast">
                    <div className="date">17 May</div>
                    <div className="time">16:00</div>
                </div>
                <div className="weather-flex-parent">
                    <div className="weather-flex-child">
                        <div className="temperature-forecast">Temperature: 13<sup>°</sup> </div>
                        <div className="feels-like">Feels like: 10<sup>°</sup></div>
                    </div>
                    <div className="weather-flex-child">
                        <div className="weather-forecast">Rain</div>
                        <img className="weather-img" src={imgRain} alt="rain"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
