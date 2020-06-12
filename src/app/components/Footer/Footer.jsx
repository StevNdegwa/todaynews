import React from "react";

import {Link} from "react-router-dom";

import {MyFooter, Top, Bottom} from "./styles";

export default function Footer(){
  return (<MyFooter>
    <Top>
      <ul>
        <h3>More News</h3>
        <li>
          <details>
            <summary><b><Link to="/c19tracker">The latest statistics on covid-19 Pandemic</Link></b></summary>
            <p>
              Coronavirus disease 2019 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-C0V-2)
              <br/><a href="https://en.wikipedia.org/wiki/COVID-19" target="_blank"><i>Read More...</i></a>
            </p>
          </details>
        </li>
      </ul>
    </Top>
    <Bottom>
      <p>Copyright &copy; {new Date().getFullYear()}</p> 
      <p>Powered by <b>GNews</b></p>
    </Bottom>
  </MyFooter>)
}