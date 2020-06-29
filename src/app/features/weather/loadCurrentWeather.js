import getCurrentWeather from "../../lib/weather/current-weather.js";
import currentWeatherSlice from "./currentWeatherSlice";

export default function loadCurrentWeather(locationName){
  
  return async function(dispatch){
    try{
      const body = await getCurrentWeather(locationName);
      
      if(body && !body.error){
        return dispatch(currentWeatherSlice.actions.setWeather(body));
      }else{
        console.log(body)
        throw new Error("Empty dataset");
      }
    }catch(error){
      throw error;
    }
  }
}