import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
  font-size: 10px;
}

body{
  background-color: ${(p) => p.theme.colorBg};
}


*{
  box-sizing: border-box;
}

`;

export default GlobalStyle;
