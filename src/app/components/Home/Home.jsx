import React from "react";
import {Link} from "react-router-dom";
import {MdAdd, MdClear} from "react-icons/md";

import Header from "../Header";
import Footer from "../Footer";
import NewsList from "./NewsList";

import {Topics, Topic, SelectTopic, TopicOption,Content} from "./styles";

const {list} = require("../../data/topics.json");

export default function Home(){
  const [topics, changeTopics] = React.useReducer(topicsReducer, [])
  const [showTopicsList, setShowTopicsList] = React.useState(false);
  const [currTopic, setCurrTopic] = React.useState("topnews");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  /* document.body.addEventListener("click",()=>{
    setShowTopicsList(false)
  }) */
  
  function handleTopicClick(key){
    setCurrTopic(key);
  }
  
  function handleHeaderSearch(query){
    setCurrTopic("search");
    setSearchQuery(query);
  }
  
  return (<>
    <Header doSearch={handleHeaderSearch} search/>
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
    <Content>
      {<SelectTopic className="select_topic" display={showTopicsList}>
        {list.map((l)=>{
          return (<TopicOption key={l.key} onClick={()=>{changeTopics({type:"add", topic:l}); setShowTopicsList(l=>!l)}}>
            {l.label}
          </TopicOption>)
        })}
        </SelectTopic>
      }
      <NewsList topic={currTopic} query={searchQuery}/>
    </Content>
    <Footer>
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