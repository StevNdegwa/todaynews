import styled from "styled-components";


export const Content = styled.div`
grid-column:1 /span 4;
position:relative;
background-color:#eeeeee;
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

