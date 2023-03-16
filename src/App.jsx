import {React, useState, useEffect, useContext} from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import NowTab from './pages/NowTab'
import DetailsTab from './pages/DetailsTab'
import ForecastTab from './pages/ForecastTab'
import Navbar from './components/UI/Navbar/Navbar'
import LocationsList from './components/LocationsList'
import {WeatherContext} from './context/Context'
import WeatherAPI from './API/WeatherApi'

function App() {

  const lastCityFound = (localStorage.getItem('lastCityFound') ?? 'Bali');
  const savedCitiesList = getSavedCitiesList();
  const [isActiveTab, setActiveTab] = useState('now-tab');
  const [currentCity, setCurrentCity] = useState(lastCityFound);
  const [favouriteCities, setfavouriteCities] = useState(savedCitiesList);

  const [weatherData, setWeatherData] = useState({
    main:{temp: ''},
    name:'',
  });

  useEffect(() => {
    getCityWeather(currentCity);
  }, [])

  useEffect(() => {
    localStorage.setItem('lastCityFound', currentCity);
    localStorage.setItem('savedCitiesList', JSON.stringify(favouriteCities));
  }, [currentCity, favouriteCities])

  function getSavedCitiesList() {
    try {
      if(JSON.parse(localStorage.getItem('savedCitiesList')) === null || undefined)  {
        localStorage.setItem('savedCitiesList', JSON.stringify([]));
      }
    }catch(error) {
    }
    return JSON.parse(localStorage.getItem('savedCitiesList'));
  }

  function changeTab(newTab)  {
    setActiveTab(newTab);
  }

  function getCity(city)  {
    setCurrentCity(city);
    getCityWeather(city);
  }

  async function getCityWeather(city) {
    try{
      let response = await fetch(`${WeatherAPI.URL}?q=${city}&appid=${WeatherAPI.API_KEY}&units=metric`);
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
          <NowTab addToFavourite={addToFavourite} deleteFromFavorite={deleteFromFavorite} favouriteCities={favouriteCities}/>
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

  function addToFavourite()  {
    setfavouriteCities([...favouriteCities, currentCity]);
    console.log(favouriteCities);
  }

  function deleteFromFavorite(cityToDelete) {
    setfavouriteCities(favouriteCities.filter(city => city !== cityToDelete));
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

              <LocationsList favouriteCities={favouriteCities} getCity={getCity}/>
            </div>

        </div>
    </div>
  )
}

export default App
