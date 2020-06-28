import React from "react";
import ProTypes from "prop-types";
import {MdSearch, MdPublic, MdArrowDropDown, MdArrowDropUp} from "react-icons/md";

import Header from "../Header";
import Regions from "./Regions";
import CurrentWeather from "./CurrentWeather";
import {Search, Content, Country, Charts} from "./styles";

export default function Weather({selectCountry, country, currentWeather, loadCurrentWeather}){
  const [showRegions, setShowRegions] = React.useState(false);
  
  return (<>
    <Header>
      <Search method="POST">
        <input type="search" placeholder="Search a location"/>
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
      <Charts>
        <CurrentWeather weather={currentWeather} country={country} loadCurrentWeather={loadCurrentWeather}/>
      </Charts>
    </Content>
  </>);
}

Weather.propTypes = {
  country:ProTypes.object.isRequired,
  selectCountry:ProTypes.func.isRequired,
  loadCurrentWeather:ProTypes.func.isRequired,
  currentWeather:ProTypes.object.isRequired
}