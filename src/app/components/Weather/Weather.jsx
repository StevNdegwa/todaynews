import React from "react";
import ProTypes from "prop-types";
import {MdSearch, MdPublic, MdArrowDropDown, MdArrowDropUp} from "react-icons/md";

import Header from "../Header";
import Regions from "./Regions";
import {Search, Content, Country} from "./styles";

export default function Weather({selectCountry, country}){
  const [showRegions, setShowRegions] = React.useState(false);
  
  return (<>
    <Header>
      <Country>
        <div className="ic"><MdPublic/></div>
        <div className="" title={country.name}>{country.code}</div>
        <div className="ic" onClick={()=>setShowRegions(s=>!s)}>{showRegions ? <MdArrowDropUp/> : <MdArrowDropDown/>}</div>
      </Country>
      <Search method="POST">
        <input type="search" placeholder="Search a location"/>
        <button><MdSearch size="1.5em"/></button>
      </Search>
    </Header>
    <Content>
      {showRegions && <Regions selectCountry={selectCountry}/>}
      <div>Weather</div>
    </Content>
  </>);
}

Weather.propTypes = {
  country:ProTypes.string.isRequired,
  selectCountry:ProTypes.func.isRequired
}