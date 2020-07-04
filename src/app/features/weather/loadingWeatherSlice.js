import {createSlice} from "@reduxjs/toolkit";

const loadingWeatherSlice = createSlice({
  name:"loadingWeather",
  initialState:true,
  reducers:{
    setLoading(state, action){
      return action.payload;
    }
  }
})

export default loadingWeatherSlice;