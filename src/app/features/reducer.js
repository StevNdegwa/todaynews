import {combineReducers} from "redux";

import countrySlice from "./weather/countrySlice";
import currentWeatherSlice from "./weather/currentWeatherSlice";

const reducer = combineReducers({
  country:countrySlice.reducer,
  currentWeather:currentWeatherSlice.reducer
});

export default reducer;