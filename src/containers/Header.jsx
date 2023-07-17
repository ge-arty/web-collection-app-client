import {
  HeaderWrapper,
  Logo,
  MenuButton,
  NavItem,
  NavWrapper,
} from "../styles/styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>MyCollections</Logo>
      <MenuButton>
        <span>Menu</span>
      </MenuButton>
      <NavWrapper>
        <NavItem to={"/"}>Explore</NavItem>
        <NavItem to={"/dashboard"}>Dashboard</NavItem>
        <NavItem to={"/register"}>Register</NavItem>
      </NavWrapper>

      <NavItem to={"/login"}>Login</NavItem>
    </HeaderWrapper>
  );
};
export default Header;
