import React from 'react'
import imgMask from "../assets/img/mask.png"
import imgCloud from "../assets/img/cloud.png"

export default function NowTab(props) {

    console.log(props);

    function handleButton() {
        if(!props.favCities.find(city => city === props.data.name)) {
            props.addToFavorite();
        }else{
            props.deleteFromFavorite(props.data.name);
        }
    }

    function renderButton() {
        if(!props.favCities.find(city => city === props.data.name)) {
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
            <p>{props.data.main.temp}</p>
            <div className="mask">
                <img src={imgMask} alt="mask"/>
            </div>
        </div>

        <div className="cloud">
            <img src={imgCloud} alt="cloud"/>
        </div>

        <div className="city">
            {props.data.name}
        </div>

        {renderButton()}
        
    </div>
  )
}
