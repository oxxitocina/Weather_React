import {React, useState, useEffect, useContext} from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import NowTab from './pages/NowTab'
import DetailsTab from './pages/DetailsTab'
import ForecastTab from './pages/ForecastTab'
import Navbar from './components/UI/Navbar/Navbar'
import LocationsList from './components/LocationsList'
import {WeatherContext} from './context/Context'

function App() {

  const [isActiveTab, setActiveTab] = useState('now-tab');
  const API = {
    URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
  };
  const [currentCity, setCurrentCity] = useState('Bali');
  const [weatherData, setWeatherData] = useState({
    main:{temp: ''},
    name:'',
  });
  const [favCities, setFavCities] = useState(['Bali']);


  useEffect(() => {
    getCityWeather(currentCity);
  }, [])

  useEffect(() => {
    console.log('testicles');
  }, [currentCity, favCities])

  function changeTab(newTab)  {
    setActiveTab(newTab);
  }

  function getCity(city)  {
    setCurrentCity(city);
    getCityWeather(city);
  }

  async function getCityWeather(city) {
    try{
      let response = await fetch(`${API.URL}?q=${city}&appid=${API.API_KEY}&units=metric`);
      let result = await response.json();
        if(response.status === 200)  {
          setWeatherData(result);
        }
    }catch(err){
      alert(err);
    }
  }

  function renderSwitch(tab)  {
    switch(tab) {
      case 'now-tab':
        return (
          <NowTab addToFavorite={addToFavorite} deleteFromFavorite={deleteFromFavorite} favCities={favCities}/>
        );
      case 'details-tab':
        return (
          <DetailsTab data={weatherData}/>
        );
      case 'forecast-tab':
        return (
          <ForecastTab data={weatherData}/>
        )
    }
  }

  function addToFavorite()  {
    setFavCities([...favCities, currentCity]);
    console.log(favCities);
  }

  function deleteFromFavorite(cityToDelete) {
    setFavCities(favCities.filter(city => city !== cityToDelete));
  }

  return (
    <div className="App">
      <div className="container">

            <SearchForm getCity={getCity}/>

            <div className="grid-container">

              <WeatherContext.Provider value={weatherData}>
                <div className="main-tab">
                  {renderSwitch(isActiveTab)}
                  <Navbar changeTab={changeTab}/>
                </div>
              </WeatherContext.Provider>

              <LocationsList favCities={favCities} getCity={getCity}/>
            </div>

        </div>
    </div>
  )
}

export default App
