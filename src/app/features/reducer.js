import {combineReducers} from "redux";

import countrySlice from "./weather/countrySlice";

const reducer = combineReducers({
  country:countrySlice.reducer
});

export default reducer;