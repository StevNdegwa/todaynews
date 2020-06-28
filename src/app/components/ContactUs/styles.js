import styled from "styled-components";

import {Row} from "../styles";

export const Content = styled(Row)`
min-height:300px;
`;

export const Contacts = styled.ul`
width:100%;
list-style-type:none;
`;

export const Item = styled.li`
width:100%;
margin:auto;
text-align:center;
font-size:1.5em;
font-weight:bold;
& > p{
  display:inline;
  vertical-align:top;
}
`;