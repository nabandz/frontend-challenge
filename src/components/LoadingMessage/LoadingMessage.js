import styled from "styled-components";

export const LoadingMessage = () => {
  return (
    <LoadingMessageStyle>... загружаем еще котиков ...</LoadingMessageStyle>
  );
};

const LoadingMessageStyle = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  color: var(--color-black);
  text-align: center;
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
`;
