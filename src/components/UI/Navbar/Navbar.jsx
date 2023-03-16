import { React, useState }from 'react'
import TabButton from '../TabButton/TabButton';

export default function Navbar(props) {

  function handleButton(event)  {
    props.changeTab(event.target.id);
  }

  return (
    <div className="navigator">
        <TabButton onClick={handleButton} id='now-tab' text="Now"/>
        <TabButton onClick={handleButton} id='details-tab' text="Details"/>
        <TabButton onClick={handleButton} id='forecast-tab' text="Forecast"/>
    </div>
  )
}
