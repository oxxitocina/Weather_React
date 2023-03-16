import {React, useContext} from 'react'
import imgMask from "../assets/img/mask.png"
import imgCloud from "../assets/img/cloud.png"
import { WeatherContext } from '../context/Context';

export default function NowTab(props) {

    const weatherData = useContext(WeatherContext);

    function handleButton() {
        if(!props.favouriteCities.find(city => city === weatherData.name)) {
            props.addToFavourite();
        }else{
            props.deleteFromFavorite(weatherData.name);
        }
    }

    function renderButton() {
        if(!props.favouriteCities.find(city => city === weatherData.name)) {
            return  (
                <button onClick={handleButton} id="heart" className="heart-empty"/>
            )
        }else{
            return  (
                <button onClick={handleButton} id="heart" className="heart-empty fill"/>
            )
        }
    }

  return (
    <div className='now-tab'>

        <div className="temperature">
            <p>{weatherData.main.temp}</p>
            <div className="mask">
                <img src={imgMask} alt="mask"/>
            </div>
        </div>

        <div className="cloud">
            <img src={imgCloud} alt="cloud"/>
        </div>

        <div className="city">
            {weatherData.name}
        </div>

        {renderButton()}
        
    </div>
  )
}
