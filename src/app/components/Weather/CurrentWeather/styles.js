import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:10;
background-color:white;
border:1px outset white;
box-shadow:1px 1px 3px #616161;
cursor:pointer;
border-radius:3px;
height:250px;
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
height:calc(100% - 40px);
display:flex;
&>div{
  padding:1em;
  display:flex;
  flex-direction:column;
}
`;

export const Current = styled.div`
width:100%;
height:100%;
font-weight:600;
&>#temperature{
  font-size:6em;
}
&>#description{
  font-size:1.5em;
}
`;

export const WeatherIcons = styled.div`
justify-content:center;
align-items:center;
width:200px;
height:100%;
`;

