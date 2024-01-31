import styled from "styled-components";

export const CatList = ({ children }) => {
  return (
    <ListStyle>
      <ListContainer>{children}</ListContainer>
    </ListStyle>
  );
};

const ListStyle = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  grid-auto-rows: 1fr;
  gap: 3rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
