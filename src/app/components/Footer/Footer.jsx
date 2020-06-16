import React from "react";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {MyFooter, Top, Bottom} from "./styles";

export default function Footer({children}){
  return (<MyFooter>
    <Top>
      {children}
    </Top>
    <Bottom>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <p>
        <a href={`https://facebook.com`} target="_blank" rel="noopener noreferrer"><FaFacebookSquare color="blue" size="1.3em"/></a>
        <a href={`https://twitter.com`} target="_blank" rel="noopener noreferrer"><FaTwitterSquare color="#64b5f6" size="1.3em"/></a>
      </p>
      <p>Powered by <b>GNews</b></p>
    </Bottom>
  </MyFooter>)
}