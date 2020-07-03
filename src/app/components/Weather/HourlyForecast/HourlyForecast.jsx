import React from "react";
import {MdRefresh} from "react-icons/md";
import {HWrapper, Forecast, HMain} from "./styles";
import {Loader, Info, Header} from "../styles";


const HourlyForecast = React.memo(({hourlyForecast, loadHourlyForecast, locationName})=>{
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
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
        <Info><div onClick={()=>handleRefresh()}><MdRefresh size="3em"/></div></Info> :
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
});

export default HourlyForecast;