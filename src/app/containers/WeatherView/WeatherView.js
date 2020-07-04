import {connect} from "react-redux";

import Weather from "../../components/Weather";
import countrySlice from "../../features/weather/countrySlice";
import loadCurrentWeather from "../../features/weather/loadCurrentWeather";
import loadHourlyForecast from "../../features/weather/loadHourlyForecast";
import loadingWeatherSlice from "../../features/weather/loadingWeatherSlice";
import errorWeatherSlice from "../../features/weather/errorWeatherSlice";

function mapStateToProps(state){
  return {
    country: state.country,
    currentWeather: state.currentWeather,
    hourlyForecast: state.hourlyForecast,
    loadingWeather: state.loadingWeather,
    errorWeather: state.errorWeather
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectCountry: (country)=>dispatch(countrySlice.actions.setCountry(country)),
    loadCurrentWeather: (locationName)=>dispatch(loadCurrentWeather(locationName)),
    loadHourlyForecast: (locationName)=>dispatch(loadHourlyForecast(locationName)),
    setLoadingCurrentWeather:(loading)=>dispatch(loadingWeatherSlice.actions.setLoading(loading)),
    setErrorCurrentWeather:(error)=>dispatch(errorWeatherSlice.actions.setError(error))
  }
}

const WeatherView = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherView;