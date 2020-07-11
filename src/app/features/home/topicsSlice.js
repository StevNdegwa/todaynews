import {createSlice} from "@reduxjs/toolkit"

const topicsSlice = createSlice({
  name:"topics",
  initialState:[],
  reducers:{
    setTopics(state, action){
     return action.payload;
    },
    removeTopic(state, action){
      return state.filter((t)=>{
        return t.key !== action.payload.key;
      })
    }
  }
});

export default topicsSlice;