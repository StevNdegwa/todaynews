import {combineReducers} from "redux";

import countrySlice from "./weather/countrySlice";
import currentWeatherSlice from "./weather/currentWeatherSlice";
import hourlyForecastSlice from "./weather/hourlyForecastSlice";
import loadingWeatherSlice from "./weather/loadingWeatherSlice";
import errorWeatherSlice from "./weather/errorWeatherSlice";
import topicsSlice from "./home/topicsSlice";

const reducer = combineReducers({
  country: countrySlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  hourlyForecast: hourlyForecastSlice.reducer,
  loadingWeather: loadingWeatherSlice.reducer,
  errorWeather: errorWeatherSlice.reducer,
  newsTopics: topicsSlice.reducer
});

export default reducer;