import { FiSearch } from "react-icons/fi";
import logo from "../../images/film.png";
import { Container } from "../Container";
import {
  HeaderStyled,
  Logo,
  LogoImg,
  LogoText,
  HeaderLink,
  Input,
  TopHeader,
  HeaderNav,
  SearchBox,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <TopHeader>
          <Logo to="/">
            <LogoImg src={logo} alt="Filmoteka logo" />
            <LogoText>Filmoteka</LogoText>
          </Logo>

          <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/library">My Library</HeaderLink>
          </HeaderNav>
        </TopHeader>
        <SearchBox>
          <Input type="text" placeholder="Search movies..." />
          <FiSearch />
        </SearchBox>
      </Container>
    </HeaderStyled>
  );
};
