import styled from "styled-components";
import { rgba } from "polished";

export const Btn = styled.button`
  background-color: ${(p) =>
    !p.disabled ? p.theme.colorPrimary : p.theme.colorBgLight};

  border: none;
  outline: none;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  color: ${(p) =>
    p.disabled ? p.theme.colorPrimary : p.theme.colorBgLight};
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0);
  }
  &:focus {
    outline: darkviolet;
`;

export const A = styled.a`
  font-size: 1.2rem;
  background-color: ${(p) => rgba(p.theme.colorPrimary, 0.2)};
  border: none;
  outline: none;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  color: ${(p) => p.theme.colorPrimary};
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0);
  }
  &:focus {
    outline: darkviolet;
  }
`;
