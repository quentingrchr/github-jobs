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
`;
