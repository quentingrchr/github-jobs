import { darkolivegreen } from "color-name";
import Link from "next/link";

import Button from "../Button/Button.comp";
import {
  Article,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
  Main,
  MainHeader,
  MainHeaderLeft,
  MainHeaderRight,
  MainBody,
  MainFooter,
  Footer,
  FooterWrapper,
} from "./JobArticle.style";

export default function JobArticle({ job }) {
  console.log(job);
  return (
    <>
      <Article>
        <header>
          <HeaderLeft
            imgSrc={
              job.company_logo || "/assets/desktop/CompanyLogo.png"
            }
          />
          <HeaderCenter>
            <h2>{job.company || "Not specified"}</h2>
            <p>{job.company_url || "Not specified"}</p>
          </HeaderCenter>
          <HeaderRight>
            {job.company_url && (
              <Button href={job.company_url} text="Company Site" />
            )}
          </HeaderRight>
        </header>

        <Main>
          <MainHeader>
            <MainHeaderLeft>
              <span>1w ago . Part Time</span>
              <h4>Senior Software Engineer</h4>
              <p>Remote Seoul Tokyo</p>
            </MainHeaderLeft>
            <MainHeaderRight>
              <Button text="Apply Now" />
            </MainHeaderRight>
          </MainHeader>
          <MainBody
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <MainFooter>
            <h5>How To Apply</h5>

            <div
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            ></div>
          </MainFooter>
        </Main>
      </Article>
      <FooterWrapper>
        <Footer>
          <div>
            <h2>{job.company || "Not specified"}</h2>
            <p>{job.company_url || "Not specified"}</p>
          </div>
          <div>{job.company_url && <Button text="Apply Now" />}</div>
        </Footer>
      </FooterWrapper>
    </>
  );
}
