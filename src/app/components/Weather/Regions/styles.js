import styled from "styled-components";

export const Ul = styled.ul`
width:100%;
list-style-type:none;
box-shadow:1px 5px 3px #9e9e9e;
background-color:white;
position:absolute;
`;
export const Li = styled.li`
padding:0 0.5em;
cursor:pointer;
border-bottom:1px inset #9e9e9e;
min-height:50px;
line-height:50px;
&>ul.c-list{
  list-style-type:none;
  padding-bottom:1em;
  display:${(props)=>(props.show ? "flex" : "none")};
  overflow:auto;
  flex-wrap:wrap;
  &.c-list-enter{
    opacity:0;
    height:0;
  }
  &.c-list-enter-active{
    height:300px;
    opacity:1;
    transition:height 200ms, opacity 200ms;
  }
  &.c-list-exit{
    opacity:1;
    height:300px;
  }
  &.c-list-exit-active{
    height:0;
    opacity:0;
    transition:height 200ms, opacity 200ms;
  }
  &>div.col{
    width:200px;
    margin-right:1em;
    &>li{
      height:30px;
      line-height:30px;
      overflow:hidden;
      text-overflow:ellipsis;
      padding-left:1em;
      border-radius:2px;
      transition:height 200ms;
      &:hover{
        background-color:#eeeeee;
        border:1px solid #e0e0e0;
        height:auto;
      }
    }
  }
}
`;
export const Control = styled.div`
display:flex;
justify-content:space-between;
& svg{
  height:1.5em;
  width:1.5em;
}
`;