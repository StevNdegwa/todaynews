import React from "react";

import {Wrapper, Header} from "./styles";

const HourlyForecast = React.memo(()=>{
  return (<Wrapper>
    <Header>Hourly Forecast</Header>
  </Wrapper>)
});

export default HourlyForecast;