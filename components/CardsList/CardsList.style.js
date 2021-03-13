import styled from "styled-components";

export const CardListContainer = styled.div`
  h3 {
    font-size: 1.4rem;
    color: ${(p) => p.theme.colorText};
    text-align: center;
    opacity: 0.5;
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 30%;
  margin-top: 5rem;
`;
