import { useGlobalContext } from "../contexts/GlobalContext";
import {
  HeaderWrapper,
  Logo,
  MenuButton,
  NavItem,
  NavWrapper,
} from "../styles/styles";

const Header = () => {
  const { userId, admin, setAdmin, setUserId, setToken } = useGlobalContext();
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
