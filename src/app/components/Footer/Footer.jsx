import React from "react";

import {Link} from "react-router-dom";

import {MyFooter, Top, Bottom} from "./styles";

export default function Footer(){
  return (<MyFooter>
    <Top>
      <ul>
        <h3>More News</h3>
        <li><b><Link to="/c19tracker">The latest statistics on covid-19</Link></b></li>
      </ul>
    </Top>
    <Bottom>
      <p>Copyright &copy; 2020</p> 
      <p>Powered by <b>GNews</b></p>
    </Bottom>
  </MyFooter>)
}