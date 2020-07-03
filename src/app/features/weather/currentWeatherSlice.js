import {createSlice} from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
  name:"currentWeather",
  initialState:{},
  reducers:{
    setWeather:{
      reducer(state, action){
        return action.payload;
      },
      prepare(payload){
        const {weather, main, name:locationName, timezone, sys, wind, visibility} = payload;
        const time = (new Date(payload.dt)).toLocaleTimeString();
        const description = weather.map((w)=>{
          return w.description;
        })
        const {feels_like:feelsLike, temp:temperature, pressure, humidity} = main;
        
        return {payload:{
          locationName, 
          temperature, 
          icon: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`, 
          description: `${description}`, 
          time, 
          timezone,
          country: sys.country,
          more:{
            feelsLike,
            pressure,
            humidity,
            windSpeed: wind.speed,
            visibility,
            sunrise: sys.sunrise,
            sunset: sys.sunset
          }
        }};
      }
    }
  }
});

export default currentWeatherSlice;