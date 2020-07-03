import styled from "styled-components";

import {Wrapper, Main} from "../styles";

export const CWrapper = styled(Wrapper)`
background-color:rgba(255, 255, 255, 0.2);
border:1px outset rgba(255, 255, 255, 0.2);
height:250px;
@media only screen and (max-width: 700px){
  height:400px;
}
`;

export const CMain = styled(Main)`
@media only screen and (max-width: 700px){
  flex-direction:column;
  &>div{
    padding:0.5em;
  }
}
`;

export const Current = styled.div`
padding:1em;
width:100%;
font-weight:600;
height:100%;
&>#temperature{
  height:100%;
  font-size:5em;
}
&>#description{
  font-size:1.5em;
  height:40px;
  text-transform:capitalize;
}
@media only screen and (max-width: 700px){
  height:60%;
  &>#temperature{
    font-size:3.5em;
  }
  &>#description{
    font-size:1.2em;
  }
}
`;

export const WeatherIcons = styled.div`
padding:1em;
justify-content:center;
align-items:center;
width:200px;
height:100%;
@media only screen and (max-width: 700px){
  width:100%;
  height:40%;
}
`;