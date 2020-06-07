import React from "react";

import {Link} from "react-router-dom";
import {MdMenu, MdClear, MdSearch} from "react-icons/md"

import {Ul, Li, Nav, MControl, Search, SearchInput, HSelect, Form} from "./styles";
import SiteContext from "../../SiteContext";

const {countries} = require("../../data/countries.json")

export default function Header({search,doSearch}){
  const [nav, showNav] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const site = React.useContext(SiteContext);
  
  function submitSearch(evt){
    evt.preventDefault();
    doSearch(searchQuery);
    setSearchQuery("");
  }
  
  function handleCountrySelection(evt){
    console.log(evt.target.value)
    return site.setCountry(evt.target.value)
  }
  
  function handleSearchInputChange(evt){
    setSearchQuery(evt.target.value);
  }
  
  return (<>
    <Nav>
    {search &&
      <Form method="POST" onSubmit={submitSearch}>
        <SearchInput type="search" placeholder="Search a topic ..." onChange={handleSearchInputChange} value={searchQuery} required autocomplete="on"/>
        <Search><MdSearch size="1.5em"/></Search>
      </Form>}
      <HSelect defaultValue={site.country} onChange={handleCountrySelection}>
        {countries.map((c)=>(<option key={c.key} value={c.key} >{c.name}</option>))}
      </HSelect>
      <MControl onClick={()=>showNav(n=>!n)}>{nav ? <MdClear size="2em"/> :<MdMenu size="2em"/>}</MControl>
    </Nav>
    <Ul show={nav} className="site-nav">
      <Li><Link to="/">Home</Link></Li>
      <Li><Link to="/c19tracker">Covid-19 Tracker</Link></Li>
      <Li><Link to="/about">About</Link></Li>
      <Li><Link to="/contact-us">Contact Us</Link></Li>
    </Ul>
  </>)
}