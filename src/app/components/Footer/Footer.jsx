import React from "react";

import {MyFooter, Top, Bottom} from "./styles";

export default function Footer({children}){
  return (<MyFooter>
    <Top>
      {children}
    </Top>
    <Bottom>
      <p>Copyright &copy; {new Date().getFullYear()}</p> 
      <p>Powered by <b>GNews</b></p>
    </Bottom>
  </MyFooter>)
}