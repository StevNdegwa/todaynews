import React from "react";

import {format} from "d3-format";

import Header from "../Header";
import Globe from "./Globe.jsx";

import {fetchSummary} from "../../lib/news/fetch-c19";

import {Main, Section, Title, Content, Stat, CountriesStats, CSelect, CLoader} from "./styles";

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
      if(!s.Countries){
        throw new Error("Connection Error")
      }
      setSummary(s);
      findCountryData(s.Countries);
      setLoading(false);
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
      {error.error && <div>{error.message}</div>}
      <Section>
        <Title>Global</Title>
        <Content>
          <Stat>
            <h5>New Confirmed</h5>
            <div>{summary.Global && numsFormat(summary.Global.NewConfirmed)}</div>
          </Stat>
          <Stat>
            <h5>Total Confirmed</h5>
            <div>{summary.Global && numsFormat(summary.Global.TotalConfirmed)}</div>
          </Stat>
          <Stat>
            <h5>New Deaths</h5>
            <div>{summary.Global && numsFormat(summary.Global.NewDeaths)}</div>
          </Stat>
          <Stat>
            <h5>Total Deaths</h5>
            <div>{summary.Global && numsFormat(summary.Global.TotalDeaths)}</div>
          </Stat>
          <Stat>
            <h5>New Recovered</h5>
            <div>{summary.Global && numsFormat(summary.Global.NewRecovered)}</div>
          </Stat>
          <Stat>
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
  </>)
}