import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdRefresh} from "react-icons/md";

import InfoPopup from "../InfoPopup.jsx";
import {HWrapper, Forecast, HMain} from "./styles";
import {Loader, Info, Header} from "../styles";

const HourlyForecast = ({hourlyForecast, loadHourlyForecast, locationName})=>{
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [infoPopup, setInfoPopup] = React.useState(false);
  
  React.useEffect(()=>{
    loadData()
  }, [locationName])
  
  async function loadData(){
    setLoading(true);
    setError(false);
    try{
      await loadHourlyForecast(locationName);
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
  
  function getTodaysData(){
    return hourlyForecast.filter((h)=>{
      return ((new Date()).getDate() === h.date);
    })
  }
  
  return (<HWrapper>
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
            <span>Hourly Forecast</span>
          </Header>
          <HMain>
            {getTodaysData().map((d, idx)=>{
              
              return (<Forecast icon={d.icon} key={d.time}>
                <div id="time">{d.time}</div>
                <div id="temperature"><span>{d.temperature}<span>&#8451;</span></span></div>
                <div id="icon"></div>
                <div id="description">{d.description}</div>
              </Forecast>)
            })}
            
          </HMain>
        </>
    }
  </HWrapper>);
};

export default HourlyForecast;