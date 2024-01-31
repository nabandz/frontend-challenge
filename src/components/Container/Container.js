import styled from "styled-components";

export const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export const ContainerStyle = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0rem 3.75rem;
  max-width: 1440px;

  @media (max-width: 576px) {
    padding: 0rem 2rem;
  }
`;
