import {connect} from "react-redux";

import Weather from "../../components/Weather";
import countrySlice from "../../features/weather/countrySlice";
import loadCurrentWeather from "../../features/weather/loadCurrentWeather";

function mapStateToProps(state){
  return {
    country:state.country,
    currentWeather:state.currentWeather
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectCountry:(country)=>dispatch(countrySlice.actions.setCountry(country)),
    loadCurrentWeather:(locationName)=>dispatch(loadCurrentWeather(locationName))
  }
}

const WeatherView = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherView;