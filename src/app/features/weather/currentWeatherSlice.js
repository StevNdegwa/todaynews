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
        const {request, location, current} = payload;
        const {name:locationName, timezone_id:timezone} = location;
        const {temperature, weather_icons, weather_descriptions, observation_time:time} = current;
        return {payload:{locationName, temperature, icon:weather_icons[0], description:`${weather_descriptions}`, time, timezone}};
      }
    }
  }
});

export default currentWeatherSlice;