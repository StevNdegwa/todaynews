import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {MdModeEdit, MdSearch} from "react-icons/md";
import {useFiler} from "crooks";

import Header from "../Header";
import Footer from "../Footer";
import NewsList from "./NewsList";
import SiteContext from "../../SiteContext";
import DialogContainer from "../DialogContainer";
import EditTopicsDialog from "./EditTopicsDialog";

import {Topics, Topic, Main, Form, SearchInput, Search, HSelect} from "./styles";
const {countries} = require("../../data/countries.json");

export default function Home({newsTopics, setTopics, removeTopic}){
  const [currTopic, setCurrTopic] = React.useState("topnews");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const [favTopics, setFavTopics] = useSetFavTopics();
  const [fTopics, {add: addFavTopics, remove: removeFavTopics, update: updateFavTopics, clear: clearFavTopics}] = useFiler("fav-topics");
  const [rSearches, {add: addRecentSearchs, remove: removeRecentSearches, update: updateRecentSearches, clear: clearRecentSearches}] = useFiler("recent-searches");
  
  const site = React.useContext(SiteContext);
  const dialog = React.useRef(null);
  
  React.useEffect(()=>{
    document.title = "Today-News | Your Favourite News Site";
    return ()=>{
      addFavTopics(newsTopics);
    }
  },[]);
  
  function handleTopicClick(key){
    setCurrTopic(key);
  }
  
  function handleSearchInputChange(evt){
    setSearchInput(evt.target.value);
  }
  
  function submitSearch(evt){
    evt.preventDefault();
    setCurrTopic("search");
    setSearchQuery(searchInput);
    addRecentSearchs(searchInput);
    setSearchInput("");
  }
  
  function handleCountrySelection(evt){
    return site.setCountry(evt.target.value)
  }
  
  function useSetFavTopics(){
    const [ft, setFT] = React.useState({dialog:false});
    
    function set(n){
      if(n.dialog){
        dialog.current.scrollIntoView({behavior: "smooth"});
      }
      setFT(n);
    }
    
    return [ft, set];
  }
  
  return (<>
    <Header>
      <Form method="POST" onSubmit={submitSearch}>
        <SearchInput type="search" placeholder="Search a topic ..." onChange={handleSearchInputChange} value={searchInput} required autocomplete="on"/>
        <Search><MdSearch size="1.5em"/></Search>
      </Form>
      <HSelect defaultValue={site.country} onChange={handleCountrySelection}>
        {countries.map((c)=>(<option key={c.key} value={c.key} >{c.name}</option>))}
      </HSelect>
    </Header>
    <Topics>
      <Topic onClick={()=>setFavTopics({dialog:true})}>
        <MdModeEdit size="1em"/>
      </Topic>
      <Topic onClick={()=>handleTopicClick("topnews")} active={currTopic === "topnews"}>Top News</Topic>
      {newsTopics.map((t, idx)=>{
        return (<Topic key={idx} onDoubleClick={()=>removeTopic(t)} title="Double click to remove" onClick={()=>handleTopicClick(t.key)} active={currTopic === t.key}>
        {t.label}
        </Topic>);
      })}
    </Topics>
    <DialogContainer ref={dialog} show={favTopics.dialog} close={()=>setFavTopics({dialog:false})}>
      {favTopics.dialog && <EditTopicsDialog show={favTopics.dialog} close={()=>setFavTopics({dialog:false})} setTopics={setTopics} topics={newsTopics}/>}
    </DialogContainer>
    <Main>
      <NewsList topic={currTopic} query={searchQuery}/>
    </Main>
    <Footer>
      <ul>
        <h3>More News</h3>
        <li>
          <details>
            <summary><b><Link to="/c19tracker">The latest statistics on covid-19 Pandemic</Link></b></summary>
            <p>
              Coronavirus disease 2019 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-C0V-2)
              <br/><a href="https://en.wikipedia.org/wiki/COVID-19" target="_blank" rel="noopener noreferrer"><i>Read More...</i></a>
            </p>
          </details>
        </li>
      </ul>
    </Footer>
  </>);
}

Home.propTypes = {
newsTopics:PropTypes.array.isRequired,
setTopics:PropTypes.func.isRequired,
removeTopic:PropTypes.func.isRequired  
}