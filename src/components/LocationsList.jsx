import React from 'react'

export default function LocationsList(props) {

  function handleClick(e)  {
    console.log(e.target.textContent);
    props.getCity(e.target.textContent);
  }

  return (
    <div className="location">

        <div className="added-locations">
            <p>Added Locations:</p>
        </div>

        <div className="locations-container">
            <ul className="locations-list">
                {props.favouriteCities.map((city) => {
                  return (
                    <li onClick={handleClick}>{city}</li>
                  )
                })}
            </ul>
        </div>
        
    </div>
  )
}
