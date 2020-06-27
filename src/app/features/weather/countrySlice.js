import {createSlice} from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name:"country",
  initialState:{name:"Kenya", code:"KE"},
  reducers:{
    setCountry(state, action){
      return action.payload;
    }
  }
})

export default countrySlice;