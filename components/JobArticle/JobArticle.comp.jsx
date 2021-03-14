import Link from "next/link";
import { useState, useEffect } from "react";

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
import { timeSince, extractEmails, extractHrefs } from "../../utils";

export default function JobArticle({ job }) {
  console.log(job);
  const timeAgo = timeSince(new Date(job.created_at));
  const [applyEmail, setApplyEmail] = useState(null);
  const [applyWebsite, setApplyWebsite] = useState(null);

  useEffect(() => {
    const txt = job.how_to_apply;
    if (txt.includes("mailto:")) {
      setApplyEmail(extractEmails(txt)[0]);
    } else if (txt.includes("</a>")) {
      setApplyWebsite(extractHrefs(txt)[0]);
    } else {
      return;
    }
  }, [job]);

  const handleApply = () => {
    if (applyWebsite) {
      window.open(applyWebsite, "_blank").focus();
    } else if (applyEmail) {
      window.location.assign(`mailto:${applyEmail}`);
    } else {
      alert(
        "We don't have any informations regarding how to apply to this job",
      );
    }
  };

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
              <Button
                href={job.company_url}
                target="_blank"
                text="Company Site"
              />
            )}
          </HeaderRight>
        </header>

        <Main>
          <MainHeader>
            <MainHeaderLeft>
              <span>{timeAgo + ` . ${job.type}`}</span>
              <h4>{job.title}</h4>
              <Link
                href={`https://www.google.fr/maps/place/${job.location}`}
              >
                <a target="_blank">{job.location}</a>
              </Link>
            </MainHeaderLeft>
            <MainHeaderRight>
              <Button onClick={handleApply} text="Apply Now" />
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
          <div>
            {job.company_url && (
              <Button onClick={handleApply} text="Apply Now" />
            )}
          </div>
        </Footer>
      </FooterWrapper>
    </>
  );
}
