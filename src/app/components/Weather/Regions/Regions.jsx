import React from 'react';
import {CSSTransition} from "react-transition-group";

import {Ul,Li} from "./styles";

import countries from "../../../data/countries-weather.json";

export default function Regions(){
  const [region, selectRegion] = React.useState("");
  
  function handleRegionSelection(r){
    if(region === r){
      return selectRegion("")
    }
    selectRegion(r)
  }
  
  return (<Ul>
    <Li show={region === "Africa"}>
      <h4 onClick={()=>handleRegionSelection("Africa")}>AFRICA</h4>
      {countriesList(countries.filter((c)=>(c.region === "Africa")), (region === "Africa"))}
    </Li>
    <Li show={region === "Americas"}>
      <h4 onClick={()=>handleRegionSelection("Americas")}>AMERICA</h4>
      {countriesList(countries.filter((c)=>(c.region === "Americas")), (region === "Americas"))}
    </Li>
    <Li show={region === "Asia"}>
      <h4 onClick={()=>handleRegionSelection("Asia")}>ASIA</h4>
      {countriesList(countries.filter((c)=>(c.region === "Asia")), (region === "Asia"))}
    </Li>
    <Li show={region === "Europe"}>
      <h4 onClick={()=>handleRegionSelection("Europe")}>EUROPE</h4>
      {countriesList(countries.filter((c)=>(c.region === "Europe")), (region === "Europe"))}
    </Li>
  </Ul>)
}

function countriesList(countries, inProp){
  return (
    <CSSTransition in={inProp} timeout={200} className="c-list">
      <ul className="c-list">
        <div className="col">
          {countries.slice(0,10).map((c)=>{
            return <li key={c.alpha2Code}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(10,20).map((c)=>{
            return <li key={c.alpha2Code}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(20,30).map((c)=>{
            return <li key={c.alpha2Code}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(30,40).map((c)=>{
            return <li key={c.alpha2Code}>{c.name}</li>
          })}
        </div>
        <div className="col">
          {countries.slice(40,50).map((c)=>{
            return <li key={c.alpha2Code}>{c.name}</li>
          })}
        </div>
      </ul>
    </CSSTransition>
  )
}