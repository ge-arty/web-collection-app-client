import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import {
  BurgerBtn,
  BurgerContainer,
  BurgerLines,
  BurgerMenu,
  HeaderWrapper,
  Logo,
  MenuButton,
  NavItem,
  NavWrapper,
  ThemeCircle,
  ThemeCircleContainer,
} from "../styles/styles";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";
import gePic from "../assets/georgia.png";
import enPic from "../assets/united-kingdom.png";
import useDetectDevice from "../hooks/useDetectDevice";

const Header = () => {
  const { userId, admin, setAdmin, setUserId, setToken, toggle } =
    useGlobalContext();
  const { language, toggleLanguage } = useLanguageContext();
  const [alignRight, setAlignRight] = useState(false);
  const device = useDetectDevice();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
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

      {device === "desktop" && (
        <>
          <NavWrapper>
            <NavItem to={"/"}>{languageDictionary[language].explore}</NavItem>
            <NavItem to={"/dashboard"}>
              {languageDictionary[language].dashboard}
            </NavItem>
            {userId === "" && (
              <NavItem to={"/register"}>
                {languageDictionary[language].register}
              </NavItem>
            )}
            {admin !== false && admin !== "false" && (
              <NavItem to={"/admin-panel"}>
                {languageDictionary[language].adminPanel}
              </NavItem>
            )}

            <NavItem onClick={handleOnClick}>
              <ThemeCircleContainer $alignRight={alignRight}>
                <ThemeCircle></ThemeCircle>
              </ThemeCircleContainer>
            </NavItem>
            <NavItem onClick={toggleLanguage}>
              <img
                style={{ width: "35px", height: "30px" }}
                src={language === "EN" ? enPic : gePic}
                alt="#"
              />
            </NavItem>
          </NavWrapper>
          {userId === "" ? (
            <NavItem to={"/login"}>
              {languageDictionary[language].login}
            </NavItem>
          ) : (
            <NavItem onClick={signOut}>
              {languageDictionary[language].signOut}
            </NavItem>
          )}
        </>
      )}

      {device === "mobile" && (
        <BurgerContainer>
          <BurgerBtn onClick={toggleMenu}>
            <BurgerLines></BurgerLines>
            <BurgerLines></BurgerLines>
            <BurgerLines></BurgerLines>
          </BurgerBtn>

          {showMenu && (
            <BurgerMenu>
              <NavItem to={"/"}>{languageDictionary[language].explore}</NavItem>
              <NavItem to={"/dashboard"}>
                {languageDictionary[language].dashboard}
              </NavItem>
              {userId === "" && (
                <NavItem to={"/register"}>
                  {languageDictionary[language].register}
                </NavItem>
              )}
              {admin !== false && admin !== "false" && (
                <NavItem to={"/admin-panel"}>
                  {languageDictionary[language].adminPanel}
                </NavItem>
              )}
              <NavItem onClick={handleOnClick}>
                <ThemeCircleContainer $alignRight={alignRight}>
                  <ThemeCircle></ThemeCircle>
                </ThemeCircleContainer>
              </NavItem>
              <NavItem onClick={toggleLanguage}>
                <img
                  style={{ width: "35px", height: "30px" }}
                  src={language === "EN" ? enPic : gePic}
                  alt="#"
                />
              </NavItem>
              {userId === "" ? (
                <NavItem to={"/login"}>
                  {languageDictionary[language].login}
                </NavItem>
              ) : (
                <NavItem onClick={signOut}>
                  {languageDictionary[language].signOut}
                </NavItem>
              )}
            </BurgerMenu>
          )}
        </BurgerContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
