import {createSlice} from "@reduxjs/toolkit";

const loadingWeatherSlice = createSlice({
  name:"loadingWeather",
  initialState:true,
  reducers:{
    startLoading(state, action){
      return true;
    },
    stopLoading(state, action){
      return false;
    }
  }
})

export default loadingWeatherSlice;