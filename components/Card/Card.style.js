import styled from "styled-components";
import { rgba } from "polished";

export const CardContainer = styled.a`
  background-color: ${(p) => p.theme.colorBgLight};
  display: inline-block;
  padding: 0rem 2rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 0px 2px 4px ${(p) => rgba("#000000", 0.1)};
`;

export const CardHeader = styled.header`
  height: 3rem;

  img {
    height: 4rem;
    transform: translateY(-50%);
    border-radius: 1rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.4rem 0;
  margin-bottom: 3rem;
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
  p {
    color: ${(p) => p.theme.colorPrimary};
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
