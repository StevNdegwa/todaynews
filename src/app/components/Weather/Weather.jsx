import React from "react";
import ProTypes from "prop-types";
import {MdSearch, MdPublic, MdArrowDropDown, MdArrowDropUp} from "react-icons/md";

import Header from "../Header";
import Footer from "../Footer";
import Regions from "./Regions";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import CurrentWeatherMore from "./CurrentWeatherMore";
import {Search, Content, Country, Charts} from "./styles";

export default function Weather({selectCountry, country, currentWeather, loadCurrentWeather, loadHourlyForecast, hourlyForecast, loadingWeather, errorWeather, setErrorCurrentWeather, setLoadingCurrentWeather}){
  const [showRegions, setShowRegions] = React.useState(false);
  const [locationNameInput, setLocationNameInput] = React.useState("");
  const [locationName, setLocationName] = React.useState(country.capital);
  
  
  React.useEffect(()=>{
    document.title = "Today-Weather | Your Favourite Weather Site";
    setLocationName(country.capital);
  },[country]);
  
  function handleLocationInputChanges(evt){
    setLocationNameInput(evt.target.value);
  }
  
  function handleSearchSubmit(evt){
    evt.preventDefault();
    setLocationName(locationNameInput);
  }
  
  return (<>
    <Header>
      <Search method="POST" onSubmit={handleSearchSubmit}>
        <input type="search" placeholder="Search a location" onChange={handleLocationInputChanges} value={locationNameInput}/>
        <button><MdSearch size="1.5em"/></button>
      </Search>
      <Country onClick={()=>setShowRegions(s=>!s)}>
        <div className="ic"><MdPublic/></div>
        <div className="" title={country.name}>{country.code}</div>
        <div className="ic">{showRegions ? <MdArrowDropUp/> : <MdArrowDropDown/>}</div>
      </Country>
    </Header>
    <Content>
      {showRegions && <Regions selectCountry={selectCountry}/>}
      <Charts onClick={()=>setShowRegions(false)}>
        <CurrentWeather currentWeather={currentWeather} locationName={locationName} loadCurrentWeather={loadCurrentWeather} loading={loadingWeather} error={errorWeather} setError={setErrorCurrentWeather} setLoading={setLoadingCurrentWeather}/>
        <CurrentWeatherMore  currentWeather={currentWeather} locationName={locationName} loading={loadingWeather} error={errorWeather}/>
        <HourlyForecast locationName={locationName} loadHourlyForecast={loadHourlyForecast} hourlyForecast={hourlyForecast}/>
      </Charts>
    </Content>
    <Footer/>
  </>);
}

Weather.propTypes = {
  country: ProTypes.object.isRequired,
  selectCountry: ProTypes.func.isRequired,
  loadCurrentWeather: ProTypes.func.isRequired,
  currentWeather: ProTypes.object.isRequired,
  hourlyForecast: ProTypes.array.isRequired,
  loadHourlyForecast: ProTypes.func.isRequired,
  loadingWeather: ProTypes.bool.isRequired,
  errorWeather: ProTypes.bool.isRequired,
  setErrorCurrentWeather: ProTypes.func.isRequired,
  setLoadingCurrentWeather: ProTypes.func.isRequired
}