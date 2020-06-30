import styled from "styled-components";

import {Control, Select} from "../styles";

export const Form = styled.form`
grid-column-start:1;
display:flex;
margin:0.5em;
`;

export const Search = styled.button`
background-color:transparent;
border:none;
`;

export const SearchInput = styled.input`
border:none;
outline:none;
border-bottom: 2px solid #212121;
font-size:1.3em;
padding:0.25em;
width:200px;
transition:width 1s;
@media only screen and (min-width: 700px){
  &:focus{
    width:350px;
  }
}
@media only screen and (max-width: 700px){
  font-size:0.8em;
  width:150px;
}
@media only screen and (max-width: 350px){
  width:100px;
}
`;

export const HSelect = styled(Select)`
width:100px;
height:30px;
grid-column-start:5;
margin:1em;
@media only screen and (max-width: 700px){
  grid-column-start:4;
}
@media only screen and (max-width: 350px){
  width:70px;
}
`;


export const Topics = styled.div`
background-image:linear-gradient(#424242,#616161,#616161,#424242);
box-shadow:0px 4px 2px #616161;
z-index:100;
width:100%;
grid-column:1 /span 4;
display:flex;
justify-content:start;
flex-wrap:wrap;
`;

export const Topic = styled(Control)`
height:60px;
line-height:60px;
min-width:60px;
font-size:1.8em;
font-weight:bold;
color:white;
text-align:center;
cursor:pointer;
background-color:${(props)=>(props.active ? "#00c853" : "transparent")};
&:hover{
  background-color:#00c853;
  border:1px outset #00c853;
}
@media only screen and (max-width: 700px){
  font-size:0.8em;
}
`;

export const Main = styled.div`
position:relative;
background-color:#eeeeee;
grid-column:1 /span 4;
display:grid;
grid-template-columns:20% 20% 20% 10% 10% 20%;
`;

export const SelectTopic = styled.ul`
list-style-type:none;
min-width:200px;
border-radius:0 0 5px 5px;
margin:0 5px;
position:absolute;
z-index:80;
background-color:white;
box-shadow:2px 6px 4px #424242;
display:${(props)=>(props.show ? "block" : "none")};
&.select-topic-enter{
  opacity:0;
}
&.select-topic-enter-active{
  opacity:1;
  transition:opacity 200ms;
}
&.select-topic-exit{
  opacity:1;
}
&.select-topic-exit-active{
  opacity:0;
  transition:opacity 200ms;
}
`;

export const TopicOption = styled.li`
height:40px;
line-height:40px;
padding:0 0.5em;
cursor:pointer;
&:hover{
  font-weight:600;
  color:#00c853;
  background-color:#e0e0e0;
}
`;