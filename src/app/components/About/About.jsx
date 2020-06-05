import React from "react";

import Header from "../Header";
import {MdInfo} from "react-icons/md";
import {Content, P} from "./styles";

export default function About(){
  return (<>
    <Header search={false}/>
    <Content>
      <P>
        <h2><MdInfo size="1.2em"/> <p>About Us</p></h2>
        We use our resources and expertise to bring you the latest news from around the world.
      </P>
    </Content>
  </>)
}