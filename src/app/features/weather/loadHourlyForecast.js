import getHourlyForecast from "../../lib/weather/hourly-forecast.js";
import hourlyForecastSlice from "./hourlyForecastSlice";

export default function loadHourlyForecast(locationName){
  
  return async function(dispatch){
    const body = await getHourlyForecast(locationName);
      
    if(body && body.cod === "200"){
        
      return dispatch(hourlyForecastSlice.actions.setHourlyForecast(body));
        
    }else{
        
      throw new Error("Empty dataset");
        
    }
  }
}