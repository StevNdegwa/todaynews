import styled from "styled-components";

export const MyFooter = styled.footer`
grid-column:1 /span 12;
background-color:#424242;
color:white;
& a{
  color:white;
  text-decoration:none;
}
`;

export const Top = styled.div`
padding:0.5em 2em;
&>ul{
  list-style-type:none;
}
`;

export const Bottom = styled.div`
display:flex;
justify-content:space-between;
padding:0.5em 1em;
background-color:#616161;
`;