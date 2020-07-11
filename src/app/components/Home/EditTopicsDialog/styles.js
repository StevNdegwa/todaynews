import styled from "styled-components";

export const  Wrapper = styled.form`
width:300px;
overflow:hidden;
height:100%;
background-color:white;
padding:0.5em;
box-shadow:0px 1px 4px black;
&.r_slide-enter{
  width:0;
  &>label{
    opacity:0;
  }
}
&.r_slide-enter-active{
  width:300px;
  transition:width 200ms;
  transition-delay:200ms;
  &>label{
    opacity:1;
    transition:opacity 100ms;
    transition-delay:250ms;
  }
}
&.r_slide-exit{
  width:300px;
  &>label{
    opacity:1;
  }
}
&.r_slide-exit-active{
  width:0;
  transition:width 200ms;
  transition-delay:200ms;
  &>label{
    opacity:0;
    transition:opacity 100ms;
    transition-delay:250ms;
  }
}
`;

export const Title = styled.h2`
font-size:1.3em;
font-weight:600;
background-color:#00c853;
color:white;
height:50px;
padding:0.5em;
text-align:center;
`;

export const Label = styled.label`
display:block;
position:relative;
padding-left:40px;
cursor:pointer;
height:40px;
line-height:40px;
font-size:1.3em;
&>input{
  opacity:0;
  &:checked + svg{
    background-color:white;
  }
}
&>svg{
  float:left;
  width:1em;
  height:1em;
  margin-top:0.55em;
  margin-right:0.3em;
  color:#424242;
  background-color:#424242;
  border:none;
}
&.checked{
  &>svg{
    background-color:#424242;
    color:white;
  }
}
`;

export const Actions = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:space-around;
align-items:center;
&>button, .button{
  width:40%;
  height:40px;
  line-height:40px;
  color:white;
  background-image:linear-gradient(#00c853,#00e676,#00c853);
  border:1px solid #00e676;
  text-align:center;
  border-radius:3px;
  font-weight:600;
  font-size:1.2em;
  cursor:pointer;
  &:focus{
    background-image:none;
    background-color:#00c853;
  }
}
`;