import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  background: url("/assets/desktop/bg-pattern-header.svg");
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 8rem;
  color: ${(p) => p.theme.colorTextLight};
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  /* position: fixed; */
  z-index: 10;
  h1 {
    font-size: 3rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10vw;
  align-items: center;

  margin-bottom: 1rem;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colorBgLight};
  margin: 0 10vw;
  transform: translateY(50%);
  border-radius: 0.5rem;
  position: sticky;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    path {
      fill: ${(p) => p.theme.colorBg};
    }
  }
  svg:first-child {
    margin-right: 1rem;
  }
  svg:last-child {
    margin-left: 1rem;
  }
`;
