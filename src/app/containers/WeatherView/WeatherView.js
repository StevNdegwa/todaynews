import {connect} from "react-redux";

import Weather from "../../components/Weather";
import countrySlice from "../../features/weather/countrySlice";

function mapStateToProps(state){
  return {
    country:state.country
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectCountry:(country)=>dispatch(countrySlice.actions.setCountry(country))
  }
}

const WeatherView = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default WeatherView;