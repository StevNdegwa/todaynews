import styled from "styled-components";

import {Row, Control, Select} from "../styled-comp";

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


export const Topics = styled(Row)`
background-color:#424242;
justify-content:start;
width:auto;
transition:width 2s;
flex-wrap:wrap;
`;

export const Topic = styled(Control)`
grid-column:1 /span 12;
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

export const Content = styled.div`
position:relative;
display:grid;
background-color:#eeeeee;
grid-column:1 /span 4;
grid-template-columns:10% 10% 10% 10% 5% 5% 5% 5% 10% 10% 10% 10%;
`;

export const SelectTopic = styled.ul`
list-style-type:none;
min-width:200px;
border-radius:0 0 5px 5px;
margin:0 5px;
position:absolute;
z-index:100;
background-color:white;
box-shadow:2px 12px 20px 2px #424242;
display:${(props)=>(props.show ? "block" : "none")};
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