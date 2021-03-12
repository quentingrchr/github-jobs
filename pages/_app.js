import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import { ThemeContextProvider } from "../contexts/themeContext";

import GlobalStyle from "../styles/globalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
