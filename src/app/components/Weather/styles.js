import styled from "styled-components";

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
}
`;
export const Content = styled.div`
grid-column:1 /span 4;
`;