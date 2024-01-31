import styled from "styled-components";

import { Container } from "../Container/Container";

export const Main = ({ children }) => {
  return (
    <MainStyle>
      <Container>{children}</Container>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  padding: 3rem 0;
`;
