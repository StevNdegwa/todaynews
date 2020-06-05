import React from "react";

import {Link} from "react-router-dom";
import {MdMenu, MdClear, MdSearch} from "react-icons/md"

import {Ul, Li, Nav, HControl,Search,SearchInput} from "./styles";

const {countries} = require("../../data/countries.json")

export default function Header({search,doSearch}){
  const [nav, showNav] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("")
  
  function submitSearch(evt){
    evt.preventDefault();
    doSearch(searchQuery);
    setSearchQuery("");
  }
  
  function handleSearchInputChange(evt){
    setSearchQuery(evt.target.value);
  }
  
  return (<>
    <Nav>
      {search && <HControl>
        <form method="POST" onSubmit={submitSearch}>
          <SearchInput type="search" placeholder="Search a topic ..." onChange={handleSearchInputChange} value={searchQuery} required autocomplete="on"/>
          <Search><MdSearch size="1.5em"/></Search>
        </form>
      </HControl>}
      {/**<HControl>
        <select>
          {countries.map((c)=>{
            return (<option key={c.key} value={c.keys}>{c.name}</option>)
          })}
        </select>
      </HControl>**/}
      <div></div>
      <HControl onClick={()=>showNav(n=>!n)}>{nav ? <MdClear size="2em"/> :<MdMenu size="2em"/>}</HControl>
    </Nav>
    <Ul show={nav} className="site-nav">
      <Li><Link to="/">Home</Link></Li>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="/contact-us">Contact Us</Link></Li>
    </Ul>
  </>)
}