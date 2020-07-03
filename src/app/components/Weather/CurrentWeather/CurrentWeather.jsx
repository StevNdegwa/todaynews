import React from "react";
import {MdRefresh} from "react-icons/md";
import {Wrapper, Current, WeatherIcons, Main, Header} from "./styles";
import {Loader, Info} from "../styles";

const CurrentWeather = React.memo(({currentWeather, locationName, loadCurrentWeather})=>{
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    loadData()
  }, [locationName])
  
  async function loadData(){
    setLoading(true);
    setError(false);
    try{
      await loadCurrentWeather(locationName);
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
        <Info><div onClick={()=>handleRefresh()}><MdRefresh size="3em"/></div></Info> :
        <>
          <Header>
            <span>{currentWeather.locationName}, {currentWeather.country} Weather </span>as of {currentWeather.time}&nbsp;
          </Header>
          <Main>
            <Current>
              <div id="temperature"><span>{currentWeather.temperature}<span>&#8451;</span></span></div>
              <div id="description">{currentWeather.description}</div>
            </Current>
            <WeatherIcons>
              <img src={currentWeather.icon} alt="Weather Icons"/>
            </WeatherIcons>
          </Main>
        </>
    }
  </Wrapper>);
})

export default CurrentWeather;