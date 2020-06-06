import React from "react";
import {MdAdd} from "react-icons/md";

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
  
  function handleTopicClick(key){
    setCurrTopic(key);
  }
  
  return (<>
    <Header doSearch={setSearchQuery} search/>
    <Topics>
      <Topic onClick={()=>setShowTopicsList(l=>!l)}><MdAdd size="1.5em"/></Topic>
      <Topic onClick={()=>handleTopicClick("topnews")} active={currTopic === "topnews"}>Top News</Topic>
      {topics.map((t,idx)=>{
        return (<Topic key={idx} onDoubleClick={()=>changeTopics({type:"remove", topic:t.key})} title="Double click to remove" onClick={()=>handleTopicClick(t.key)} active={currTopic === t.key}>
          {t.label}
        </Topic>);
      })}
    </Topics>
    <Content>
      {showTopicsList && <SelectTopic>
        {list.map((l)=>{
          return (<TopicOption key={l.key} onClick={()=>{changeTopics({type:"add", topic:l}); setShowTopicsList(l=>!l)}}>
            {l.label}
          </TopicOption>)
        })}
        </SelectTopic>
      }
      <NewsList topic={currTopic} query={searchQuery}/>
    </Content>
    <Footer/>
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