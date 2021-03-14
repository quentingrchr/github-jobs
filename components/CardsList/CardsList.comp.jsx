import Card from "../Card/Card.comp";
import {
  ListContainer,
  ListItem,
  CardListContainer,
} from "./CardsList.style.js";

export default function CardsList({ data }) {
  return (
    <CardListContainer>
      {data.length > 0 ? (
        <>
          <h3>{data.length} jobs found</h3>
          <ListContainer>
            {data.map((item) => {
              return (
                <ListItem key={item.id}>
                  <Card item={item} />
                </ListItem>
              );
            })}
          </ListContainer>
        </>
      ) : (
        <h3>Sorry, no results found</h3>
      )}
    </CardListContainer>
  );
}
