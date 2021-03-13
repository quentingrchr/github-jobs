import styled from "styled-components";

import { rgba } from "polished";

export const CardContainer = styled.a`
  background-color: ${(p) => p.theme.colorBgLight};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0rem 2rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 22rem;

  box-shadow: 0px 2px 4px ${(p) => rgba("#000000", 0.1)};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px ${(p) => rgba("#000000", 0.1)};
  }
`;

export const CardHeader = styled.header`
  height: 3rem;
  flex-grow: 1;

  img {
    max-height: 4rem;
    transform: translateY(-50%);
    border-radius: 1rem;
    max-width: 8rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.4rem 0;
  margin-bottom: 3rem;
  flex-grow: 1;
  color: ${(p) => p.theme.colorText};
  p {
    opacity: 0.5;
    font-size: 1.4rem;
  }
  h2 {
    margin: 1.4rem 0;
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

export const CardFooter = styled.footer`
  flex-grow: 4;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  p {
    color: ${(p) => p.theme.colorPrimary};
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
