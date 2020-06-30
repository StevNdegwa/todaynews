import React from "react";
import {Link} from "react-router-dom";
import {MdAdd, MdClear, MdSearch} from "react-icons/md";
import {CSSTransition} from "react-transition-group";

import Header from "../Header";
import Footer from "../Footer";
import NewsList from "./NewsList";
import SiteContext from "../../SiteContext";

import {Topics, Topic, SelectTopic, TopicOption, Main, Form, SearchInput, Search, HSelect} from "./styles";

const {countries} = require("../../data/countries.json")
const {list} = require("../../data/topics.json");

export default function Home(){
  const [topics, changeTopics] = React.useReducer(topicsReducer, [])
  const [showTopicsList, setShowTopicsList] = React.useState(false);
  const [currTopic, setCurrTopic] = React.useState("topnews");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  
  const site = React.useContext(SiteContext);
  
  React.useEffect(()=>{
    document.title = "Today-News | Your Favourite News Site";
  },[]);
  
  document.body.addEventListener("click",(evt)=>{
    setShowTopicsList(false)
  }, true)
  
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
    setSearchInput("");
  }
  
  function handleCountrySelection(evt){
    return site.setCountry(evt.target.value)
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
      <Topic onClick={()=>setShowTopicsList((show)=>(show ? false : true))}>
        {showTopicsList ? <MdClear size="1.5em"/> : <MdAdd size="1.5em"/>}
      </Topic>
      <Topic onClick={()=>handleTopicClick("topnews")} active={currTopic === "topnews"}>Top News</Topic>
      {topics.map((t,idx)=>{
        return (<Topic key={idx} onDoubleClick={()=>changeTopics({type:"remove", topic:t.key})} title="Double click to remove" onClick={()=>handleTopicClick(t.key)} active={currTopic === t.key}>
        {t.label}
        </Topic>);
      })}
    </Topics>
    <Main>
      <CSSTransition timeout={200} classNames="select-topic" in={showTopicsList}>
        <SelectTopic className="select_topic" show={showTopicsList}>
        {list.map((l)=>{
          return (<TopicOption key={l.key} onClick={()=>{changeTopics({type:"add", topic:l});}}>
            {l.label}
          </TopicOption>)
        })}
        </SelectTopic>
      </CSSTransition>
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

function topicsReducer(state, action){
  switch(action.type){
    case "add":
      if(!state.includes(action.topic)){
        return [...state, action.topic];
      }else{
        return state;
      }
    case "remove":
      return state.filter((t)=>(t.key !== action.topic));
    default:
      return state;
  }
}