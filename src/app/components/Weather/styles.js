import styled, {keyframes} from "styled-components";


export const Content = styled.div`
grid-column:1 /span 4;
position:relative;
background-image:linear-gradient(#bbdefb, #bbdefb,#c5cae9,#9fa8da);
`;

export const Charts = styled.div`
padding:1em;
display:grid;
grid-template-columns:10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
`;

export const Country = styled.div`
display:flex;
width:150px;
height:60px;
line-height:60px;
font-size:1.5em;
font-weight:600;
cursor:pointer;
background-color:#eeeeee;
transition:background-color 200ms;
&:hover{
  background-color:#e0e0e0;
}
&>div{
  height:100%;
  width:50px;
  text-align:center;
  &.ic{
    padding:0.25em;
    &>svg{
      height:1.3em;
      width:1.3em;
    }
  }
}
@media only screen and (max-width:700px){
  width:100px;
  font-size:1.1em;
  & svg{
    height:1.1em;
    width:1.1em;
  }
}
`;

export const Search = styled.form`
grid-column-start:1;
display:flex;
margin:0.5em;
&>input{
  border:none;
  outline:none;
  border-bottom: 2px solid #212121;
  font-size:1.3em;
  padding:0.25em;
  width:200px;
  transition:width 1s;
  @media only screen and (min-width: 700px){
    &:focus{
    width:350px;
    }
  }
  @media only screen and (max-width: 700px){
    font-size:0.8em;
    width:150px;
  }
  @media only screen and (max-width: 350px){
    width:100px;
  }
}
&>button{
  background-color:transparent;
  border:none;
}
`;

const loaderAnim = keyframes`
25%{
  border-width:5px;
  border-color:#e1f5fe;
  border-bottom-width:8px;
  border-bottom-color:#039be5;
}
50%{
  border-size:5px;
  border-color:#e1f5fe;
  border-left-width:8px;
  border-left-color:#039be5;
}
75%{
  border-size:5px;
  border-color:#e1f5fe;
  border-top-width:8px;
  border-top-color:#039be5;
}
100%{
  border-size:5px;
  border-color:#e1f5fe;
  border-right-width:8px;
  border-right-color:#039be5;
}
`;

export const Info = styled.div`
color:#424242;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
  &>div{
    position:relative;
  }
  & div.info{
    display:inline-block;
  }
}
& div.info{
  position:absolute;
  top:2em;
  display:none;
  background-color:#212121;
  color:white;
  width:200px;
  min-height:30px;
  border-radius:3px;
  font-size:0.8em;
  line-height:20px;
  padding:0.3em;
}
& .info-popup-enter{
  opacity:0;
}
& .info-popup-enter-active{
  opacity:1;
  transition: opacity 1s linear;
}
& .info-popup-exit{
  opacity:1;
}
& .info-popup-exit-active{
  opacity:0;
  transition: opacity 1s linear;
}
`;

export const Loader = styled.div`
animation:${loaderAnim} 2s linear infinite;
border-color:#e1f5fe;
border-style:solid;
border-radius:50%;
width:${(props)=>(!!props.size ? props.size : "30px")};
height:${(props)=>(!!props.size ? props.size : "30px")};
}
`;

export const Wrapper = styled.div`
grid-column-start:2;
grid-column-end:10;
background-color:white;
border:1px outset white;
box-shadow:1px 1px 3px #616161;
cursor:pointer;
border-radius:3px;
margin-bottom:1em;
@media only screen and (max-width: 700px){
  grid-column-start:1;
  grid-column-end:11;
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
height:calc(100% - 40px);
display:flex;
&>div{
  display:flex;
  flex-direction:column;
}
`;