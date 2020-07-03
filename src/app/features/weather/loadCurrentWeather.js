import getCurrentWeather from "../../lib/weather/current-weather.js";
import currentWeatherSlice from "./currentWeatherSlice";

export default function loadCurrentWeather(locationName){
  
  return async function(dispatch){
    const body = await getCurrentWeather(locationName);
      
    if(body && body.cod === 200){
        
      return dispatch(currentWeatherSlice.actions.setWeather(body));
        
    }else{
        
      throw new Error("Empty dataset");
        
    }
  }
}