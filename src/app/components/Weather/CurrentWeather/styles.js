import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:10;
background-color:rgba(255, 255, 255, 0.2);
border:1px outset rgba(255, 255, 255, 0.2);
box-shadow:1px 1px 3px #616161;
cursor:pointer;
border-radius:3px;
height:250px;
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

export const Main = styled.div`
height:calc(100%-40px);
display:flex;
&>div{
  padding:1em;
  display:flex;
  flex-direction:column;
}
@media only screen and (max-width: 700px){
  flex-direction:column;
  &>div{
    padding:0.5em;
  }
}
`;

export const Current = styled.div`
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
justify-content:center;
align-items:center;
width:200px;
height:100%;
@media only screen and (max-width: 700px){
  width:100%;
  height:40%;
}
`;

