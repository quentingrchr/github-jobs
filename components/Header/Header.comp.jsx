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
import SearchBar from "../SearchBar/SearchBar.comp";

export default function Header() {
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
      <Bottom>
        <SearchBar />
      </Bottom>
    </HeaderContainer>
  );
}
