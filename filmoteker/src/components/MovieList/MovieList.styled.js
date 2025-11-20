import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  list-style: none;
`;

export const Controls = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
