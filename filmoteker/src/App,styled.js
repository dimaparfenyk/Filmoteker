import styled from "styled-components";
import bgImage from "./images/ironman.jpg";

export const Wrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
