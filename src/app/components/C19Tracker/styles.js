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
&>h5{
  background-color:#424242;
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