import React from "react";
import {MdRefresh} from "react-icons/md";
import {WiHumidity, WiStrongWind} from "react-icons/wi";
import {AiFillEye} from "react-icons/ai";
import {CWrapper, CMain} from "./styles";
import {Loader, Info, Header} from "../styles";

const CurrentWeatherMore = React.memo(({currentWeather, locationName, loadCurrentWeather})=>{
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    loadData()
  }, [])
  
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
      !error ?  
        <Info><div onClick={()=>handleRefresh()}><MdRefresh size="3em"/></div></Info> :
        <>
          <Header>
            <span>Weather today in {locationName}</span>
          </Header>
          <CMain>
            <div className="top">
              <div className="temperature"></div>
              <div className="sun"></div>
            </div>
            <div className="bottom">
              <div>
                <div><div><WiHumidity/></div><span>Humidity</span></div>
                <div>61%</div>
              </div>
              <div>Pressuer</div>
              <div>Visibility</div>
              <div>Wind</div>
            </div>
          </CMain>
        </>
    }
  </CWrapper>);
})

export default CurrentWeatherMore;