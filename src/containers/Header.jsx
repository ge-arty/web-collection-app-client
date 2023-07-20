import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import {
  HeaderWrapper,
  Logo,
  MenuButton,
  NavItem,
  NavWrapper,
  ThemeCircle,
  ThemeCircleContainer,
} from "../styles/styles";

const Header = () => {
  const { userId, admin, setAdmin, setUserId, setToken, toggle } =
    useGlobalContext();
  const [alignRight, setAlignRight] = useState(false);

  const toggleAlignment = () => {
    setAlignRight((prevState) => !prevState);
  };

  const handleOnClick = () => {
    toggle();
    toggleAlignment();
  };

  const signOut = () => {
    setAdmin(false);
    setUserId("");
    setToken(null);
  };

  return (
    <HeaderWrapper>
      <Logo>MyCollections</Logo>

      <MenuButton>
        <span>Menu</span>
      </MenuButton>

      <NavWrapper>
        <NavItem to={"/"}>Explore</NavItem>
        <NavItem to={"/dashboard"}>Dashboard</NavItem>
        {userId === "" && <NavItem to={"/register"}>Register</NavItem>}
        {admin !== false && admin !== "false" && (
          <NavItem to={"/admin-panel"}>Admin Panel</NavItem>
        )}

        <NavItem onClick={handleOnClick}>
          <ThemeCircleContainer alignRight={alignRight}>
            <ThemeCircle></ThemeCircle>
          </ThemeCircleContainer>
        </NavItem>
      </NavWrapper>

      {userId === "" ? (
        <NavItem to={"/login"}>Login</NavItem>
      ) : (
        <NavItem onClick={signOut}>Signout</NavItem>
      )}
    </HeaderWrapper>
  );
};

export default Header;
