import React from "react";
import {MdInfoOutline, MdVisibility, MdVerticalAlignCenter} from "react-icons/md";
import {WiHumidity, WiStrongWind} from "react-icons/wi";

import InfoPopup from "../InfoPopup.jsx";
import {CWrapper, CMain} from "./styles";
import {Loader, Info, Header} from "../styles";

const CurrentWeatherMore = ({currentWeather, locationName, error, loading})=>{
  try{
    return (<CWrapper>
    {loading ? 
      <Info><Loader size="50px"/></Info> :
      error ?  
        <Info>
          <div>
            <MdInfoOutline size="3em"/>
            <InfoPopup>
              No results to display. Please check your internet connection. Then refresh on the above section.
            </InfoPopup>
          </div>
        </Info> :
        <>
          <Header>
            <span>Weather today in {locationName}</span>
          </Header>
          <CMain>
            <div className="top">
              <div className="temperature">
                <div><span>{currentWeather.more.feelsLike}<span>&#176;</span></span></div>
                <div>Feels Like</div>
              </div>
              <div className="sun"></div>
            </div>
            <div className="bottom">
              <div>
                <div><div><WiHumidity/></div><span>Humidity</span></div>
                <div>{currentWeather.more.humidity} <span>&nbsp;%</span></div>
              </div>
              <div>
                <div><div><MdVerticalAlignCenter/></div><span>Pressuer</span></div>
                <div>{currentWeather.more.pressure} <span>&nbsp;mb</span></div>
              </div>
              <div>
                <div><div><MdVisibility/></div><span>Visibility</span></div>
                <div>{currentWeather.more.visibility} <span>&nbsp;Km</span></div>
              </div>
              <div>
                <div><div><WiStrongWind/></div><span>Wind</span></div>
                <div>{currentWeather.more.windSpeed} <span>&nbsp;Km/hr</span></div>
              </div>
            </div>
          </CMain>
        </>
    }
    </CWrapper>
    );
  }catch(error){
    
    return (<CWrapper>
      <Info><div><MdInfoOutline size="3em"/></div></Info>
    </CWrapper>);
  }
}

export default CurrentWeatherMore;