import styled from "styled-components";

import {Row, Control} from "../styled-comp";

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
grid-column:1 /span 12;
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
`;

export const TopicOption = styled.li`
height:40px;
line-height:40px;
padding:0 0.5em;
cursor:pointer;
&:hover{
  font-weight:600;
  color:#00c853;
}
`;