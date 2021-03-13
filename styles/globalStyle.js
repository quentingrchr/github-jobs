import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
  font-size: 10px;
}

body{
  background-color: ${(p) => p.theme.colorBg};
  font-family: sofia-pro-soft, sans-serif;
}
main{
  padding-top: 8rem;
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
