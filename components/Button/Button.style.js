import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(p) => p.theme.colorPrimary};
  border: none;
  outline: none;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  color: ${(p) => p.theme.colorTextLight};
`;
