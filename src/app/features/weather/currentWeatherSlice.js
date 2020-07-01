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
        const {weather, main, name:locationName, timezone} = payload;
        const time = (new Date(payload.dt)).toLocaleTimeString();
        const description = weather.map((w)=>{
          return w.description;
        })
        
        
        return {payload:{
          locationName, 
          temperature:main.temp, 
          icon:`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`, 
          description:`${description}`, 
          time, 
          timezone
        }};
      }
    }
  }
});

export default currentWeatherSlice;