import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: ${(p) => (p.fullWidth ? "100%" : "80%")};
  color: ${(p) => p.theme.colorText};
  background-color: ${(p) => p.theme.colorBgLight};
  margin: auto;
  transform: translateY(-50%);
  transition: width 0.3s ease, box-shadow 0.3s ease;

  position: sticky;
  top: ${(p) => Math.floor(p.height / 2)}px;
  z-index: 12;
  box-shadow: 0px 2px 4px
    rgba(0, 0, 0, ${(p) => (p.fullWidth ? "0.25" : "0")});
`;

const InputContainer = styled.div`
  display: flex;
  padding: 2rem 2rem;
  input {
    background-color: ${(p) => p.theme.colorBgLight};
    color: ${(p) => p.theme.colorText};
    width: 100%;
    border-bottom: 2px solid transparent;
    &:focus {
      border-bottom: 2px solid ${(p) => p.theme.colorPrimary};
    }
  }
`;

const InputTxtContainer = styled(InputContainer)`
  border-right: 3px solid ${(p) => p.theme.colorBg};
  justify-content: flex-start;
  align-items: center;

  input {
    border: none;
    outline: none;
    height: 2.4rem;
  }
  svg {
    margin-right: 1rem;
    overflow: visible;
  }
`;
export const InputTxtContainerSearch = styled(InputTxtContainer)`
  flex-grow: 2;
`;
export const InputTxtContainerLocation = styled(InputTxtContainer)`
  flex-grow: 1;
`;

export const OthersContainer = styled(InputContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0.5;
`;
export const InputCheckContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    display: none;
    position: relative;
    padding-left: 2.4rem;
  }
  label {
    color: ${(p) => p.theme.colorText};
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 2rem;
  }
`;

export const CustomCheckbox = styled.div`
  background-color: ${(p) => p.theme.colorGrey};
  width: 1.6rem;
  height: 1.6rem;
  padding: 0.2rem;
  border: none;
  border-radius: 2px;
  &::before {
    border-radius: inherit;
    content: "";
    height: 100%;
    width: 100%;
    display: ${(p) => (p.checked ? "block" : "none")};
    background-color: ${(p) => p.theme.colorPrimary};
  }
`;
