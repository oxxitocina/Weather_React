import React from 'react'

export default function LocationsList(props) {

  function handleClick(city)  {
    props.getCity(city);
  }

  return (
    <div className="location">

        <div className="added-locations">
            <p>Added Locations:</p>
        </div>

        <div className="locations-container">
            <ul className="locations-list">
                {props.favCities.map((city) => {
                  return (
                    <li onClick={handleClick(city)}>{city}</li>
                  )
                })}
            </ul>
        </div>
        
    </div>
  )
}
