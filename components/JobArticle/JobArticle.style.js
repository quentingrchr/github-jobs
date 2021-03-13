import styled from "styled-components";
import { rgba } from "polished";

export const Article = styled.article`
  width: 60%;
  margin: auto;
  box-sizing: border-box;
  transform: translateY(-3rem);

  header {
    background-color: ${(p) => p.theme.colorBgLight};
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 14rem;
    border-radius: 5px;
    overflow: hidden;
  }
`;

export const HeaderLeft = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  background: url("${(p) => p.imgSrc}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* img {
    max-width: 9rem;
    max-height: 9rem;
  } */
`;

export const HeaderCenter = styled.div`
  color: ${(p) => p.theme.colorText};
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.4;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 2;
  padding-right: 4rem;
`;

export const Main = styled.div`
  margin-top: 4rem;
  border-radius: 5px;
  width: 100%;
  background-color: ${(p) => p.theme.colorBgLight};
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.colorText};
  padding: 4rem;
`;
export const MainHeaderLeft = styled.div`
  span {
    opacity: 0.4;
    font-size: 1.6rem;
    display: block;
    margin-bottom: 1.4rem;
  }
  h4 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
  }
  p {
    font-size: 1.4rem;

    color: ${(p) => p.theme.colorPrimary};
  }
`;

export const MainHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBody = styled.div`
  margin-top: 4rem;
  color: ${(p) => rgba(p.theme.colorText, 0.4)};
  font-size: 1.6rem;
  padding: 4rem;

  p {
    margin-bottom: 4rem;
  }
  strong {
    font-weight: bold;
    font-size: 2rem;

    color: ${(p) => p.theme.colorText}};

  }
  ul {
    list-style: inside;
    margin-bottom: 4rem;
    li{
      margin-bottom: 1.2rem;
    }
  }
`;

export const MainFooter = styled.div`
  background-color: ${(p) => p.theme.colorPrimary};
  color: ${(p) => p.theme.colorTextLight};
  margin-top: 4rem;
  background: url("/assets/desktop/bg-pattern-detail-footer.svg");
  padding: 4rem;
  overflow: hidden;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h5 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  a {
    text-decoration: underline;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${(p) => p.theme.colorBgLight};
  width: 100%;
  padding: 2rem 0;
`;

export const Footer = styled.footer`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  div:first-child {
    color: ${(p) => p.theme.colorText};
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      opacity: 0.4;
    }
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 2;
  }
`;
