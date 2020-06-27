import React from "react";

import Header from "../Header";
import Regions from "./Regions";
import {Search, Content} from "./styles";

export default function Weather(){
  return (<>
    <Header>
      <input type="search"/>
    </Header>
    <Content>
      <Regions/>
      <div>Weather</div>
    </Content>
  </>);
}