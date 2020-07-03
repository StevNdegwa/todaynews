import styled from "styled-components";

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:10;
background-color:white;
border:1px outset white;
box-shadow:1px 1px 3px #616161;
cursor:pointer;
border-radius:3px;
min-height:250px;
margin-top:1em;
@media only screen and (max-width: 700px){
  grid-column-start:1;
  grid-column-end:11;
  height:400px;
}
`;

export const Header = styled.div`
width:100%;
height:40px;
line-height:40px;
padding-left:1em;
&>span{
  font-size:1.5em;
  font-weight:600;
}
`;