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
import Link from "next/link";

export default function Header({ children }) {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <Top>
        <Link href="/">
          <a>
            <h1>devjobs</h1>
          </a>
        </Link>

        <SwitchContainer>
          <IconSun />
          <SwitchBtn
            isOn={theme == "dark"}
            handleClick={toggleTheme}
          />
          <IconMoon />
        </SwitchContainer>
      </Top>
    </HeaderContainer>
  );
}
