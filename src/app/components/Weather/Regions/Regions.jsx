import React from 'react';
import {CSSTransition} from "react-transition-group";
import {MdChevronRight, MdExpandMore} from "react-icons/md";

import {Ul,Li,Control} from "./styles";

import countries from "../../../data/countries-weather.json";

const Regions = React.memo(({selectCountry})=>{
  const [region, selectRegion] = React.useState("");
  
  const Africa = (region === "Africa"),
    Americas = (region === "Americas"),
    Asia = (region === "Asia"),
    Europe = (region === "Europe");
  
  function handleRegionSelection(r){
    if(region === r){
      return selectRegion("")
    }
    selectRegion(r)
  }
  
  return (<Ul>
    <Li show={Africa}>
      <Control onClick={()=>handleRegionSelection("Africa")}>
        <h4>AFRICA</h4>
        <div>{Africa ? <MdExpandMore/> : <MdChevronRight/>}</div>
      </Control>
      {countriesList(countries.filter((c)=>(c.region === "Africa")), Africa, selectCountry)}
    </Li>
    <Li show={Americas}>
      <Control onClick={()=>handleRegionSelection("Americas")}>
        <h4>AMERICA</h4>
        <div>{Americas ? <MdExpandMore/> : <MdChevronRight/>}</div>
      </Control>
      {countriesList(countries.filter((c)=>(c.region === "Americas")), Americas, selectCountry)}
    </Li>
    <Li show={Asia}>
      <Control onClick={()=>handleRegionSelection("Asia")}>
        <h4>ASIA</h4>
        <div>{Asia ? <MdExpandMore/> : <MdChevronRight/>}</div>
      </Control>
      {countriesList(countries.filter((c)=>(c.region === "Asia")), Asia, selectCountry)}
    </Li>
    <Li show={Europe}>
      <Control onClick={()=>handleRegionSelection("Europe")}>
        <h4>EUROPE</h4>
        <div>{Europe ? <MdExpandMore/> : <MdChevronRight/>}</div>
      </Control>
      {countriesList(countries.filter((c)=>(c.region === "Europe")), Europe, selectCountry)}
    </Li>
  </Ul>)
})

function countriesList(countries, inProp, selectCountry){
  return (
    <CSSTransition in={inProp} timeout={200} classNames="c-list">
      <ul className="c-list">
        <div className="col">
          {countries.slice(0,10).map((c)=>{
            return <li key={c.alpha2Code} onClick={()=>selectCountry({name:c.name,code:c.alpha2Code})}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(10,20).map((c)=>{
            return <li key={c.alpha2Code} onClick={()=>selectCountry({name:c.name,code:c.alpha2Code})}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(20,30).map((c)=>{
            return <li key={c.alpha2Code} onClick={()=>selectCountry({name:c.name,code:c.alpha2Code})}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(30,40).map((c)=>{
            return <li key={c.alpha2Code} onClick={()=>selectCountry({name:c.name,code:c.alpha2Code})}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(40,50).map((c)=>{
            return <li key={c.alpha2Code} onClick={()=>selectCountry({name:c.name,code:c.alpha2Code})}>{c.name}</li>
          })}
        </div>
      </ul>
    </CSSTransition>
  )
}

export default Regions;