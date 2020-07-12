import styled from "styled-components";

export const  Wrapper = styled.div`
position:absolute;
z-index:400;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);
display:${({show})=>(show ? "flex" : "none")};
&>section.free-space{
  width:100%;
  height:100%;
  background-color:transparent;
}
`;