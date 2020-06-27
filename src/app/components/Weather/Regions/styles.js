import styled from "styled-components";

export const Ul = styled.ul`
width:100%;
list-style-type:none;
`;
export const Li = styled.li`
padding:0 0.5em;
cursor:pointer;
border-bottom:1px inset #9e9e9e;
min-height:50px;
line-height:50px;
& .c-list-enter{
  height:0;
}
& .c-list-enter-active{
  height:300px;
  transition:height 200ms;
}
& .c-list-exit{
  height:300px;
}
& .c-list-exit-active{
  height:0;
  transition:height 200ms;
}
& ul.c-list{
  list-style-type:none;
  padding-bottom:1em;
  display:${(props)=>(props.show ? "flex" : "none")};
  &>div.col{
    width:200px;
    &>li{
      height:30px;
      line-height:30px;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
}
`;