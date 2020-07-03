import styled from "styled-components";

import {Wrapper, Main} from "../styles";

export const HWrapper = styled(Wrapper)`
height:250px;
`;

export const HMain = styled(Main)`
justify-content:center;
`;

export const Forecast = styled.div`
height:100%;
min-width:200px;
width:100%;
background-image:linear-gradient(white, #bdbdbd, #bdbdbd, white);
&>div{
  text-align:center;
  font-weight:600;
  background-color:white;
  width:calc(100% - 2px);
}
&>div#time{
  padding-top:10px;
  height:40px;
  line-height:30px;
  font-size:1.2em;
}
&>div#temperature{
  height:50px;
  line-height:50px;
  font-size:1.5em;
}
&>div#description{
  padding-bottom:10px;
  height:40px;
  line-height:30px;
  font-size:1.2em;
  text-transform:capitalize;
}
&>div#icon{
  height: 100%;
  background-image: ${(props)=>(`url(${props.icon})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size:50%;
}
`;