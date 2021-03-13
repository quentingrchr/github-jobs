import {
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
} from "./Card.style";

export default function Card({ item }) {
  return (
    <CardContainer href="#">
      <CardHeader>
        <img
          src={item.company_logo || "/assets/desktop/CompanyLogo.png"}
        />
      </CardHeader>
      <CardContent>
        <p>1 min ago . Full time</p>
        <h2>{item.title}</h2>
        <p>{item.company}</p>
      </CardContent>
      <CardFooter>
        <p>New York</p>
      </CardFooter>
    </CardContainer>
  );
}
