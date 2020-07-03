import styled, {keyframes} from "styled-components";

export const Row = styled.div`
grid-column: 1 /span 4;
width:100%;
display: flex;
justify-content: space-between;
padding: 0 0.5em;
`
export const Control = styled.div`
display:flex;
padding:0 0.5em;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const loadAnim = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg);
}
`;

export const Loader = styled.div`
width:${(props)=>(!!props.size ? props.size : "30px")};
height:${(props)=>(!!props.size ? props.size : "30px")};
border:3px solid #e1f5fe;
border-top-color:#039be5;
border-radius:50%;
animation:${loadAnim} 1s linear infinite;
margin:${(props)=>(!!props.size ? props.size : "30px")} auto;
`;

export const Select = styled.select`
border-radius:3px;
border:1px solid #e0e0e0;
background-color: #eeeeee;
cursor:pointer;
color:#424242;
scrollbar-width:auto;
& > option{
  cursor:pointer;
  border:none;
  &:hover{
    background-color: #eeeeee;
    cursor:pointer;
    border:none;
  }
}
`;

const pageLoaderAnim = keyframes`
25%{
  border-width:5px;
  border-bottom-width:8px;
}
50%{
  border-size:5px;
  border-left-width:8px;
}
75%{
  border-size:5px;
  border-top-width:8px;
}
100%{
  border-size:5px;
  border-right-width:8px;
}
`;

export const Info = styled.div`
grid-column:1 /span 4;
width:100%;
height:300px;
display:flex;
align-items:center;
justify-content:center;
`;

export const PageLoader = styled.div`
animation:${pageLoaderAnim} 3s linear infinite;
border-color:#616161;
border-style:dotted;
border-radius:50%;
width:100px;
height:100px;
@media only screen and (max-width: 700px){
  width:50px;
  height:50px;
}
`;