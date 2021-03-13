import Card from "../Card/Card.comp";
import { ListContainer, ListItem } from "./CardList.style.js";

export default function CardList({ data }) {
  return (
    <ListContainer>
      {data.map((item) => {
        return (
          <ListItem>
            <Card item={item} />
          </ListItem>
        );
      })}
    </ListContainer>
  );
}
