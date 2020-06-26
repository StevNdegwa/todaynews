import React from "react";

import {format} from "d3-format";

import Header from "../Header";
import Footer from "../Footer";
import Globe from "./Globe.jsx";

import {fetchSummary} from "../../lib/news/fetch-c19";

import {Main, Section, Title, Content, Stat, CountriesStats, CSelect, CLoader, Error} from "./styles";

export default function C19Tracker(){
  const [currCountry, setCurrCountry] = React.useState("KE");
  const [summary, setSummary] = React.useState({});
  const [countryData, setCountryData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({error:false, message:""});
  
  const numsFormat = format(",");
  
  React.useEffect(()=>{
    loadData()
  }, [])
  
  function handleCountrySelection(evt){
    return Promise.all([setCurrCountry(evt.target.value), findCountryData(summary.Countries, evt.target.value)]);
  }
  
  async function loadData(){
    setLoading(true);
    try{
      const s = await fetchSummary();
      if(s.Countries && s.Global){
        Promise.all([setSummary(s), findCountryData(s.Countries, currCountry),setLoading(false)])
      }else{
        setError({error:true, message:"No results to display 😓. Something must be wrong."});
      }
    }catch(error){
      setLoading(false);
      setError({error:true, message:"Sorry! A connection error occured"});
    }
    
  }
  
  function findCountryData(d, cntry){
    return new Promise((resolve, reject)=>{
      resolve(d.find((c)=>{
        return c.CountryCode === cntry;
      }))
    }).then((data)=>{
      return setCountryData(data || {});
    })
  }
  
  return (<>
    <Header/>
    <Main>
      {loading && <CLoader size="50px"/>}
      {error.error && <Error>{error.message}</Error>}
      <Section>
        <Title>Global Overview</Title>
        <Content>
          <Stat paint="#512da8">
            <h5>New Confirmed</h5>
            <div>{summary.Global ? numsFormat(summary.Global.NewConfirmed) : 0}</div>
          </Stat>
          <Stat paint="#512da8">
            <h5>Total Confirmed</h5>
            <div>{summary.Global ? numsFormat(summary.Global.TotalConfirmed) : 0}</div>
          </Stat>
          <Stat paint="#e53935">
            <h5>New Deaths</h5>
            <div>{summary.Global ? numsFormat(summary.Global.NewDeaths) : 0}</div>
          </Stat>
          <Stat paint="#e53935">
            <h5>Total Deaths</h5>
            <div>{summary.Global ? numsFormat(summary.Global.TotalDeaths) : 0}</div>
          </Stat>
          <Stat paint="#00c853 ">
            <h5>New Recovered</h5>
            <div>{summary.Global ? numsFormat(summary.Global.NewRecovered) : 0}</div>
          </Stat>
          <Stat paint="#00c853 ">
            <h5>Total Recovered</h5>
            <div>{summary.Global ? numsFormat(summary.Global.TotalRecovered) : 0}</div>
          </Stat>
        </Content>
      </Section>
      <Section>
        <Title>Countries</Title>
        <Content>
          <CountriesStats>
            <li>
              <CSelect onChange={handleCountrySelection} value={currCountry}>
                {summary.Countries && summary.Countries.map((country)=>{
                  return (<option key={country.CountryCode} value={country.CountryCode}>{country.Country}</option>)
                })}
              </CSelect>
            </li>
            <li><b>New Confirmed:</b> {countryData.NewConfirmed ? numsFormat(countryData.NewConfirmed) : 0}</li>
            <li><b>Total Confirmed:</b> {countryData.TotalConfirmed ? numsFormat(countryData.TotalConfirmed) : 0}</li>
            <li><b>New Deaths:</b> {countryData.NewDeaths ? numsFormat(countryData.NewDeaths) : 0}</li>
            <li><b>Total Deaths:</b> {countryData.TotalDeaths ? numsFormat(countryData.TotalDeaths) : 0}</li>
            <li><b>New Recovered:</b> {countryData.NewRecovered ? numsFormat(countryData.NewRecovered) : 0}</li>
            <li><b>Total Recovered:</b> {countryData.TotalRecovered ? numsFormat(countryData.TotalRecovered) : 0}</li>
          </CountriesStats>
          <Globe country={currCountry}/>
          <div></div>
        </Content>
      </Section>
    </Main>
    <Footer/>
  </>)
}