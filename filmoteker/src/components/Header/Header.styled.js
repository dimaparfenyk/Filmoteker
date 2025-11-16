import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0 5rem;
  color: var(--color-white);
  background-color: rgba(0, 0, 0, 0.6);
`;

export const TopHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  height: 48px;
  width: auto;
  display: block;
`;
export const LogoText = styled.span`
  font-size: 1.87rem;
  margin: 0;
  font-weight: 700;
  color: var(--color-white);
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 14px;
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 2px;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    border-bottom-color: var(--color-white);
  }

  &.active {
    border-bottom-color: #ff6b08;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  width: 336px;
  border: none;
  border-bottom: 2px solid var(--color-white);
  background-color: transparent;
  color: var(--color-white);
  padding: 6px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SearchBox = styled.div`
  position: relative;
  width: 336px;
  margin: 0 auto;

  svg {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--color-white);
    font-size: 20px;
    transition: color 0.3s ease;
    pointer-events: auto;

    &:hover {
      color: #ff6b08;
    }
  }
`;
