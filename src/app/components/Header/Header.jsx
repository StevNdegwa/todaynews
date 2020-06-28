import React from "react";
import {Link} from "react-router-dom";
import {MdMenu, MdClear} from "react-icons/md";
import {CSSTransition} from "react-transition-group";

import {Ul, Li, Nav, MControl, HControls} from "./styles";

const Header = React.memo(function Header({children}){
  const [nav, showNav] = React.useState(false);
  
  document.body.addEventListener("click", ()=>{
    showNav(false);
  })
  
  return (<>
    <Nav>
      <MControl onClick={()=>showNav(n=>(n ? false : true))}>{nav ? <MdClear size="2em"/> : <MdMenu size="2em"/>}</MControl>
      <HControls>
        {children}
      </HControls>
    </Nav>
    <CSSTransition in={nav} timeout={200} classNames="site-nav">
      <Ul show={nav} className="site-nav">
        <Li><Link to="/">Home</Link></Li>
        <Li><Link to="/weather">Today Weather</Link></Li>
        <Li><Link to="/c19tracker">Covid-19 Tracker</Link></Li>
        <Li><Link to="/about">About</Link></Li>
        <Li><Link to="/contact-us">Contact Us</Link></Li>
      </Ul>
    </CSSTransition>
  </>)
})

export default Header;