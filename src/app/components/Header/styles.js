import styled from "styled-components";

import {Control} from "../styles";

export const Nav = styled.header`
grid-column: 1 /span 4;
display:flex;
justify-content:space-between;
flex-direction:row-reverse;
width:100%;
height:60px;
border-bottom:1px solid #e0e0e0;
`;

export const MControl=styled(Control)`
width:60px;
height:59px;
cursor:pointer;
background-color:white;
transition:background-color 200ms;
&:hover{
  background-color:#e0e0e0;
}
@media only screen and (max-width: 700px){
  grid-column-start:6;
}
`;

export const HControls = styled.div`
display:flex;
justify-content:space-between;
width:100%;
`;

export const Ul = styled.ul`
grid-column: 1 /span 12;
list-style-type: none;
width: 100%;
z-index: 1000;
background-color: rgba(255,255,255,0.8);
margin-top:60px;
position:absolute;
display:${(props)=>(props.show ? "block" : "none")};
height:${(props)=>(props.show ? "auto" : "0px")};
overflow:hidden;
font-size:2.5em;
&.site-nav-enter{
  font-size:1em;
}
&.site-nav-enter-active{
  font-size:2.5em;
  transition:font-size 200ms;
}
&.site-nav-exit{
  font-size:2.5em;
}
&.site-nav-exit-active{
  font-size:1em;
  transition:font-size 200ms;
}
@media only screen and (max-width: 700px){
  font-size:1.3em;
  &.site-nav-enter{
    font-size:0.8em;
  }
  &.site-nav-enter-active{
    font-size:1.3em;
    transition:font-size 200ms;
  }
  &.site-nav-exit{
    font-size:1.3em;
  }
  &.site-nav-exit-active{
    font-size:0.8em;
    transition:font-size 200ms;
  }
}
`
export const Li = styled.li`
font-weight:bold;
text-align:center;
width:100%;
margin:0.5em 0;
&>a{
  text-decoration:none;
  color:#212121;
  &:hover{
    color:#00c853;
    text-shadow:1px 1px 1px black;
  }
}
@media only screen and (max-width: 700px){
  font-size:1.5em;
}
`;
