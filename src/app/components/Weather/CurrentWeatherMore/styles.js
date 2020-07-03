import styled from "styled-components";

import {Wrapper, Main} from "../styles";

export const CWrapper = styled(Wrapper)`
height:400px;
`;

export const CMain = styled(Main)`
flex-direction:column;
&>.top{
  height: 200px;
  width: 100%;
  justify-content: space-between;
  flex-direction:row;
  &>div{
    width:200px;
    height:100%;
    border: 1px solid black;
  }
  border: 1px solid black;
}
&>.bottom{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border: 1px solid black;
  &>div{
    width:50%;
    height:40px;
    line-height:40px;
    font-size:1.3em;
    border: 1px solid black;
    display:flex;
    justify-content: space-between;
    padding-right: 20px;
    &>div{
      display:flex;
    }
    & svg{
      width:40px;
      height:40px;
    }
  }
}
@media only screen and (max-width: 700px){
  flex-direction:column;
  &>div{
    padding:0.5em;
  }
}
`;