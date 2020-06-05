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