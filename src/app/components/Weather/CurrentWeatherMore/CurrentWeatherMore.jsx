import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdHelpOutline, MdVisibility, MdVerticalAlignCenter} from "react-icons/md";
import {WiHumidity, WiStrongWind} from "react-icons/wi";

import InfoPopup from "../InfoPopup.jsx";
import {CWrapper, CMain} from "./styles";
import {Loader, Info, Header} from "../styles";

const CurrentWeatherMore = ({currentWeather, locationName, error, loading})=>{
  const [infoPopup, setInfoPopup] = React.useState(false);
  
  try{
    return (<CWrapper>
    {loading ? 
      <Info><Loader size="50px"/></Info> :
      error ?  
        <Info>
          <div onMouseEnter={()=>setInfoPopup(true)} onMouseLeave={()=>setInfoPopup(false)}>
            <MdHelpOutline size="3em"/>
            <CSSTransition timeout={200} in={infoPopup} classNames="info-popup">
              <InfoPopup>
                No results to display. Please check your internet connection. Then click refresh on the above section.
              </InfoPopup>
            </CSSTransition>
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
      <Info>
        <div onMouseEnter={()=>setInfoPopup(true)} onMouseLeave={()=>setInfoPopup(false)}>
          <MdHelpOutline size="3em"/>
          <CSSTransition timeout={200} in={infoPopup} classNames="info-popup">
            <InfoPopup>
              An error occured
            </InfoPopup>
          </CSSTransition>
        </div>
      </Info>
    </CWrapper>);
  }
}

export default CurrentWeatherMore;