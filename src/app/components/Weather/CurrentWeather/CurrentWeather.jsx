import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdRefresh} from "react-icons/md";

import InfoPopup from "../InfoPopup.jsx";
import {CWrapper, Current, WeatherIcons, CMain} from "./styles";
import {Loader, Info, Header} from "../styles";

const CurrentWeather = ({currentWeather, locationName, loadCurrentWeather, loading, error, setError, setLoading})=>{
  const [infoPopup, setInfoPopup] = React.useState(false);
  
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
  
  return (<CWrapper>
    {loading ? 
      <Info><Loader size="50px"/></Info> :
      error ?  
        <Info>
          <div onClick={()=>handleRefresh()}  onMouseEnter={()=>setInfoPopup(true)} onMouseLeave={()=>setInfoPopup(false)}>
            <MdRefresh size="3em"/>
            <CSSTransition timeout={200} in={infoPopup} classNames="info-popup">
              <InfoPopup>
                No data available for the selected location.
              </InfoPopup>
            </CSSTransition>
          </div>
        </Info> :
        <>
          <Header>
            <span>{currentWeather.locationName}, {currentWeather.country} Weather </span>as of {currentWeather.time}&nbsp;
          </Header>
          <CMain>
            <Current>
              <div id="temperature"><span>{currentWeather.temperature}<span>&#8451;</span></span></div>
              <div id="description">{currentWeather.description}</div>
            </Current>
            <WeatherIcons>
              <img src={currentWeather.icon} alt="Weather Icons"/>
            </WeatherIcons>
          </CMain>
        </>
    }
  </CWrapper>);
}

export default CurrentWeather;