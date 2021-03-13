import Card from "../Card/Card.comp";
import {
  ListContainer,
  ListItem,
  CardListContainer,
} from "./CardsList.style.js";

export default function CardsList({ data }) {
  return (
    <CardListContainer>
      <h3>{data.length} job results</h3>
      <ListContainer>
        {data.map((item) => {
          return (
            <ListItem key={item.id}>
              <Card item={item} />
            </ListItem>
          );
        })}
      </ListContainer>
    </CardListContainer>
  );
}
