import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(p) =>
    !p.disabled ? p.theme.colorPrimary : p.theme.colorBgLight};

  border: none;
  outline: none;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  color: ${(p) =>
    p.disabled ? p.theme.colorPrimary : p.theme.colorBgLight};
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
`;
