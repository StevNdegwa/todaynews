import styled from "styled-components";

import {Control, Select} from "../styled-comp";

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
`;

export const Nav = styled.header`
grid-column: 1 /span 4;
display:grid;
grid-template-columns: 15% 10% 30% 30% 10% 5%;
width:100%;
height:50px;
`;

export const MControl=styled(Control)`
height:50px;
grid-column-start:6;
@media only screen and (max-width: 700px){
  grid-column-start:5;
}
`;

export const FControl=styled(Control)`
height:50px;
`;

export const Ul = styled.ul`
grid-column: 1 /span 12;
list-style-type: none;
width: 100%;
z-index: 1000;
background-color: rgba(255,255,255,0.8);
margin-top:50px;
position:absolute;
display:${(props)=>(props.show ? "block" : "none")};
height:${(props)=>(props.show ? "auto" : "0px")};
overflow:hidden;
transition:height 2s;
`
export const Li = styled.li`
font-size:3em;
font-weight:bold;
text-align:center;
width:100%;
margin:0.5em 0;
&>a{
  text-decoration:none;
  color:#212121;
  &:hover{
    color:#00c853;
  }
}
@media only screen and (max-width: 700px){
  font-size:1.5em;
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
`;
