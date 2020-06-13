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
    setCurrCountry(evt.target.value);
    findCountryData(summary.Countries)
  }
  
  async function loadData(){
    setLoading(true);
    try{
      const s = await fetchSummary();
      if(s.Countries && s.Global){
        setSummary(s);
        findCountryData(s.Countries);
        setLoading(false);
      }else{
        setError({error:true, message:"No results to display 😓. Something must be wrong."});
      }
    }catch(error){
      setLoading(false);
      setError({error:true, message:"Sorry! A connection error occured"});
    }
    
  }
  
  function findCountryData(d){
    let data = d.find((c)=>{
      return c.CountryCode === currCountry;
    })
    return setCountryData(data || {});
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
            <div>{summary.Global && numsFormat(summary.Global.NewConfirmed)}</div>
          </Stat>
          <Stat paint="#512da8">
            <h5>Total Confirmed</h5>
            <div>{summary.Global && numsFormat(summary.Global.TotalConfirmed)}</div>
          </Stat>
          <Stat paint="#e53935">
            <h5>New Deaths</h5>
            <div>{summary.Global && numsFormat(summary.Global.NewDeaths)}</div>
          </Stat>
          <Stat paint="#e53935">
            <h5>Total Deaths</h5>
            <div>{summary.Global && numsFormat(summary.Global.TotalDeaths)}</div>
          </Stat>
          <Stat paint="#00c853 ">
            <h5>New Recovered</h5>
            <div>{summary.Global && numsFormat(summary.Global.NewRecovered)}</div>
          </Stat>
          <Stat paint="#00c853 ">
            <h5>Total Recovered</h5>
            <div>{summary.Global && numsFormat(summary.Global.TotalRecovered)}</div>
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
            <li><b>New Confirmed:</b> {countryData.NewConfirmed && numsFormat(countryData.NewConfirmed)}</li>
            <li><b>Total Confirmed:</b> {countryData.TotalConfirmed && numsFormat(countryData.TotalConfirmed)}</li>
            <li><b>New Deaths:</b> {countryData.NewDeaths && numsFormat(countryData.NewDeaths)}</li>
            <li><b>Total Deaths:</b> {countryData.TotalDeaths && numsFormat(countryData.TotalDeaths)}</li>
            <li><b>New Recovered:</b> {countryData.NewRecovered && numsFormat(countryData.NewRecovered)}</li>
            <li><b>Total Recovered:</b> {countryData.TotalRecovered && numsFormat(countryData.TotalRecovered)}</li>
          </CountriesStats>
          <Globe country={currCountry}/>
          <div></div>
        </Content>
      </Section>
    </Main>
    <Footer/>
  </>)
}