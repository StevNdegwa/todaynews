import styled from "styled-components";

import {Row} from "../styled-comp";

export const Content = styled(Row)`
min-height:300px;
`;

export const P = styled.p`
margin:auto;
text-align:center;
font-size:1.5em;
& > h2 > p{
  display:inline;
  vertical-align:top;
}
`;