import {createSlice} from "@reduxjs/toolkit";

const hourlyForecastSlice = createSlice({
  name:"hourlyForecast",
  initialState:[],
  reducers:{
    setHourlyForecast:{
      reducer(state, action){
        return action.payload;
      },
      prepare(payload){
        let forecast = payload.list;
        
        forecast = forecast.map((w)=>{
          const {weather, main, name:locationName} = w;
          const time = (new Date(w.dt_txt)).toLocaleTimeString();
          const date = (new Date(w.dt_txt)).getDate();
          const description = weather.map((d)=>{
            return d.description;
          });
        
        
          return {
            locationName, 
            temperature: main.temp, 
            icon: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`, 
            description: `${description}`, 
            time,
            date
          };
        });
        
        return {payload:forecast};
      }
    }
  }
});

export default hourlyForecastSlice;