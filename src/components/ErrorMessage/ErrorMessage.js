import styled from "styled-components";

export const ErrorMessage = () => {
  return <ErrorMessageStyle>... произошла ошибка ...</ErrorMessageStyle>;
};

const ErrorMessageStyle = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  color: var(--color-black);
  text-align: center;
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
`;
