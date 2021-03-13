import {
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
} from "./Card.style";
import { timeSince } from "../../utils";

import Link from "next/link";

export default function Card({ item }) {
  const {
    company,
    id,
    company_logo,
    title,
    created_at,
    type,
    location,
  } = item;
  const isFullTime = type === "Full Time";
  const timeAgo = timeSince(new Date(created_at));

  return (
    <Link href={`/job/${id}`}>
      <CardContainer>
        <CardHeader>
          <img
            src={company_logo || "/assets/desktop/CompanyLogo.png"}
          />
        </CardHeader>
        <CardContent>
          <p>{timeAgo + ` . ${type}`}</p>
          <h2>{title}</h2>
          <p>{company}</p>
        </CardContent>
        <CardFooter>
          <p>{location}</p>
        </CardFooter>
      </CardContainer>
    </Link>
  );
}
