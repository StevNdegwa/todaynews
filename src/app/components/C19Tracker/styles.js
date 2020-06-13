import styled from "styled-components";

import {Select, Loader} from "../styled-comp";

export const Main = styled.main`
grid-column:1 /span 4;
background-color:#eeeeee;
`;

export const Section = styled.section`
width:100%;
padding:0.5em;
`;

export const Title = styled.h2`
font-weight:600;
@media only screen and (max-width: 700px){
  font-size:1.2em;
}
`;

export const Content = styled.div`
background-color:white;
border:2px outset white;
border-radius:5px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
padding:1em;
`;

export const Stat = styled.div`
min-width:200px;
height:100px;
background-color:white;
border:1px outset white;
border-radius:5px;
margin:0.5em;
cursor:pointer;
box-shadow:1px 1px 3px #424242;
&>h5{
  background-color:${(props)=>(props.paint || "#424242")};
  color:white;
  border-radius:5px 5px 0 0;
  height:25px;
  line-height:25px;
  padding-left:0.5em;
}
&>div{
  padding:0.5em;
  line-height:50px;
  font-size:2em;
  font-weight:bold;
  text-align:center;
}
@media only screen and (max-width: 700px){
  min-width:150px;
  height:80px;
  &>div{
    line-height:30px;
    font-size:1.3em;
    font-weight:700;
  }
}
`;

export const CountriesStats = styled.ul`
list-style-type:none;
min-width:350px;
padding:0.5em;
&>li{
  height:40px;
  margin:0.5em 0;
  line-height:40px;
  font-size:1.2em;
}
@media only screen and (max-width: 700px){
  min-width:300px;
  width:300px;
  &>li{
    height:30px;
    line-height:30px;
    font-size:1em;
  }
}
@media only screen and (max-width: 350px){
  min-width:150px;
  width:150px;
  &>li{
    height:30px;
    margin:0.5em 0;
    line-height:30px;
    font-size:0.8em;
  }
}
`;

export const CSelect = styled(Select)`
width:100%;
height:40px;
font-weight:600;
`;

export const CLoader = styled(Loader)`
border-top-style:dotted;
margin:0 auto;
border-width:5px;
`;

export const Svg = styled.svg`
transform:scale(1);
width:600px;
height:400px;cursor:pointer;
`;

export const Chart = styled.div`
width:600px;
height:400px;
`;

export const Error = styled.div`
text-align:center;
font-size:1.3em;
font-weight:600;
`;

export const Footer = styled.footer`
grid-column:1 /span 12;
background-color:#424242;
color:white;
& a{
  color:white;
  text-decoration:none;
}
`;

export const Top = styled.div`
padding:0.5em 2em;
&>ul{
  list-style-type:none;
}
`;

export const Bottom = styled.div`
display:flex;
justify-content:space-between;
padding:0.5em 1em;
background-color:#616161;
`;