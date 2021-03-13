import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
  font-size: 10px;
}

body{
  background-color: ${(p) => p.theme.colorBg};
}
main{
  padding-top: 20rem;
}

a{
  text-decoration: none;
  color: inherit;
}


*{
  box-sizing: border-box;
}

`;

export default GlobalStyle;
