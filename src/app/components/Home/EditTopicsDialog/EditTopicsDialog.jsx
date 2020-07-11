import React from "react";
import {CSSTransition} from "react-transition-group";
import {FaCheckSquare} from "react-icons/fa";
import {Wrapper, Title, Label, Actions} from "./styles";

const {list} = require("../../../data/topics.json");

const EditTopicsDialog = React.memo(({show, close, setTopics, topics})=>{
  const [selectedTopics, setSelectedToopics] = React.useReducer(topicsReducer, topics);
  
  function handleTopicsSave(evt){
    evt.preventDefault();
    setTopics(selectedTopics);
    return close();
  }
  
  function topicsReducer(state, action){
    switch(action.type){
      case "ADD":
        return [...state, action.topic];
      case "REMOVE":
        return state.filter((t)=>{
          return t.key !== action.topic.key;
        });
      default:
        return state;
    }
  }
  
  function handleTopicsChange(evt, topic){
    if(evt.target.checked){
      return setSelectedToopics({type:"ADD", topic});
    }else{
      return setSelectedToopics({type:"REMOVE", topic});
    }
  }
  
  return (
    <CSSTransition in={show} timeout={200} classNames="r_slide">
      <Wrapper onSubmit={handleTopicsSave}>
        <Title>Edit Favourite Topics</Title>
        {list.map((topic)=>{
          return (<Label key={topic.key}>
            <input type="checkbox" name={topic.key} value={topic.key} onChange={(evt)=>handleTopicsChange(evt, topic)} checked={selectedTopics.includes(topic)}/>
            <FaCheckSquare/>
            {topic.label}
          </Label>)
        })}
        <Actions className="actions"><button type="submit">Save</button><button className="button" onClick={close}>Cancel</button></Actions>
      </Wrapper>
  </CSSTransition>);
})

export default EditTopicsDialog;