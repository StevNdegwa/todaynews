import styled from "styled-components";

import {Loader} from "../../styles";

export const Ul = styled.ul`
list-style-type:none;
`;

export const Li = styled.li`
width:100%;
`;

export const List = styled(Ul)`
grid-column:1 /span 4;
background-color:white;
border:1px outset white;
border-radius:5px;
margin:0.5em;
@media only screen and (max-width: 700px){
  grid-column:1 /span 6;
}
`;

export const Item = styled(Li)`
padding:0.5em;
&>h2{
  color:#424242;
  &>svg{
    height:1.8em;
    width:1.8em;
  }
  &>span{
    vertical-align:top;
    font-size:1.2em;
  }
}
&>p{
  font-size:1.4em;
}
&>article{
  &>h4>a{
    color:#424242;
    font-weight:600;
    cursor:help;
    text-decoration:none;
    &:hover{
      color:#00c853;
    }
  }
  &>ul{
    list-style-type:none;
    padding:0.5em 1em;
    &>li{
      min-height:30px;
      line-height:30px;
      &>a{
        text-decoration:none;
        color:#424242;
        font-style:italic;
        &>svg{
          height:1.5em;
          width:1.5em;
          margin-left:10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 700px){
  &>h2{
    &>svg{
      height:1.2em;
      width:1.2em;
    }
    &>span{
      font-size:0.8em;
    }
  }
  &>p{
    font-size:0.9em;
  }
}
`;

export const PSearches = styled(Ul)`
grid-column:5 /span 2;
padding:2em;
font-size:1.5em;
@media only screen and (max-width: 700px){
  grid-column:1 /span 6;
  font-size:1.1em;
}
`;

export const Search = styled(Li)`
cursor:pointer;
color:#0277bd;
margin:0 0.5em;
padding-left:1rem;
&:first-of-type{
  padding-left:0;
}
&>h4{
  color:#212121;
}
`;

export const NewsLoader = styled(Loader)`
grid-column-start:4;
`;

export const TopicImg = styled(Item)`
background-color:#eeeeee;
background-image:${(props)=>`url(${props.srcSmall})`};
border-radius:5px 5px 0 0;
background-repeat:no-repeat;
background-size:cover;
@media only screen and (min-width: 700px){
  background-image:${(props)=>`url(${props.src})`};
  height:200px;
}
@media only screen and (max-width: 700px){
  height:100px;
}
`;
