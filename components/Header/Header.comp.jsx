import { useState, useContext } from "react";
import SwitchBtn from "../SwitchBtn/SwitchBtn.comp";

import {
  Bottom,
  HeaderContainer,
  SwitchContainer,
  Top,
} from "./Header.style";
import { ThemeContext } from "../../contexts/themeContext";
import IconSun from "../../public/assets/desktop/icon-sun.svg";
import IconMoon from "../../public/assets/desktop/icon-moon.svg";

export default function Header({ children }) {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <Top>
        <h1>devjobs</h1>
        <SwitchContainer>
          <IconSun />
          <SwitchBtn
            isOn={theme == "dark"}
            handleClick={toggleTheme}
          />
          <IconMoon />
        </SwitchContainer>
      </Top>
      <Bottom>{children}</Bottom>
    </HeaderContainer>
  );
}
