import styled from "styled-components";

const padding = "2px";

export const Button = styled.button`
  outline: none;
  border: none;
  padding: ${padding};
  height: 2rem;
  width: 4rem;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.colorBg};
`;

export const Position = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  position: relative;
  box-sizing: content-box;

  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    display: block;
    box-sizing: content-box;
    width: calc(50% - (${padding}));
    height: 100%;
    transform: translateX(
      ${(p) => (p.isOn ? `calc(100% + (${padding}))` : "0")}
    );
    background-color: ${(p) => p.theme.colorPrimary};
    transition: all 0.3s ease;
  }
`;
