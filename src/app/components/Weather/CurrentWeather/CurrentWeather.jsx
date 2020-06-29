import React from "react";
import {MdRefresh} from "react-icons/md";
import {Wrapper, Current, WeatherIcons, Main, Header} from "./styles";
import {Loader, Info} from "../styles";

const CurrentWeather = React.memo(({weather, country, loadCurrentWeather})=>{
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    loadData()
  }, [country])
  
  async function loadData(){
    setLoading(true);
    setError(false);
    try{
      await loadCurrentWeather(country.capital);
      setLoading(false);
    }catch(error){
      console.log(error)
      setLoading(false);
      setError(true);
    }
  }
  
  function handleRefresh(){
    return loadData();
  }
  
  return (<Wrapper>
    {loading ? 
      <Info><Loader size="50px"/></Info> :
      error ?  
        <Info><div onClick={()=>handleRefresh()}><MdRefresh size="3em"/><div>Try Again After <br/>1 minute</div></div></Info> :
        <>
          <Header>
            <span>{weather.locationName} Weather </span>as of {weather.time}&nbsp;{weather.timezone}
          </Header>
          <Main>
            <Current>
              <div id="temperature">{weather.temperature}<span>&#176;</span></div>
              <div id="description">{weather.description}</div>
            </Current>
            <WeatherIcons>
              <img src={weather.icon} alt="Weather Icons"/>
            </WeatherIcons>
          </Main>
        </>
    }
  </Wrapper>);
})

export default CurrentWeather;