import {createSlice} from "@reduxjs/toolkit";

const errorWeatherSlice = createSlice({
  name:"errorWeather",
  initialState:false,
  reducers:{
    setError(state, action){
      return action.payload;
    }
  }
})

export default errorWeatherSlice;