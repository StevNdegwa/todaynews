import React from "react";

import {Link} from "react-router-dom";
import {MdMenu, MdClear} from "react-icons/md"

import {Ul, Li, Nav, MControl} from "./styles";

const Header = React.memo(function Header({children}){
  const [nav, showNav] = React.useState(false);
 
  return (<>
    <Nav>
      <MControl onClick={()=>showNav(n=>!n)}>{nav ? <MdClear size="2em"/> : <MdMenu size="2em"/>}</MControl>
      {children}
    </Nav>
    <Ul show={nav} className="site-nav">
      <Li><Link to="/">Home</Link></Li>
      <Li><Link to="/c19tracker">Covid-19 Tracker</Link></Li>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="/contact-us">Contact Us</Link></Li>
    </Ul>
  </>)
})

export default Header;