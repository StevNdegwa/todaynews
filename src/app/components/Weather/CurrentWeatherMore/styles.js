import styled from "styled-components";

import {Wrapper, Main} from "../styles";

export const CWrapper = styled(Wrapper)`
height:300px;
@media only screen and (max-width: 700px){
  height:350px;
}
`;

export const CMain = styled(Main)`
flex-direction:column;
&>.top{
  height: 150px;
  width: 100%;
  justify-content: space-between;
  flex-direction:row;
  padding:0 1em;
  &>div{
    width:150px;
    height:100%;
  }
  &>div.temperature{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    padding:1em 0;
    &>div:first-child{
      font-size:3em;
      font-weight:600;
    }
    &>div:last-child{
      height:40px;
      line-height:40px;
      font-size:1.2em;
    }
  }
}
&>.bottom{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  &>div{
    width:50%;
    height:40px;
    line-height:40px;
    font-size:1.3em;
    display:flex;
    justify-content: space-between;
    padding: 0 1em;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    &>div{
      display:flex;
    }
    & svg{
      width:40px;
      height:40px;
    }
  }
  @media only screen and (max-width: 700px){
    flex-direction: column;
    &>div{
      width:100%;
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