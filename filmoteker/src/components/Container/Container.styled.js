import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1280px) {
    padding: 0 30px;
  }
`;
