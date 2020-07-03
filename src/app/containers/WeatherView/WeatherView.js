import {connect} from "react-redux";

import Weather from "../../components/Weather";
import countrySlice from "../../features/weather/countrySlice";
import loadCurrentWeather from "../../features/weather/loadCurrentWeather";
import loadHourlyForecast from "../../features/weather/loadHourlyForecast";

function mapStateToProps(state){
  return {
    country: state.country,
    currentWeather: state.currentWeather,
    hourlyForecast: state.hourlyForecast,
    loadingWeather: state.loadingWeather
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectCountry: (country)=>dispatch(countrySlice.actions.setCountry(country)),
    loadCurrentWeather: (locationName)=>dispatch(loadCurrentWeather(locationName)),
    loadHourlyForecast: (locationName)=>dispatch(loadHourlyForecast(locationName))
  }
}

const WeatherView = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherView;