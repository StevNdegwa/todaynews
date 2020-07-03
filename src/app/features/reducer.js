import {combineReducers} from "redux";

import countrySlice from "./weather/countrySlice";
import currentWeatherSlice from "./weather/currentWeatherSlice";
import hourlyForecastSlice from "./weather/hourlyForecastSlice";
import loadingWeatherSlice from "./weather/loadingWeatherSlice";

const reducer = combineReducers({
  country: countrySlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  hourlyForecast: hourlyForecastSlice.reducer,
  loadingWeather: loadingWeatherSlice.reducer
});

export default reducer;