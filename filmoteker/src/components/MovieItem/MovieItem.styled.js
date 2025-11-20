import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
`;

export const Card = styled.article`
  background: rgba(255, 255, 255, 0.03);
  padding: 12px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #ffffff;
`;

export const Meta = styled.p`
  font-size: 14px;
  color: #dcdcdc;
  margin: 0;
`;
