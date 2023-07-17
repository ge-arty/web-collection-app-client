import { NavLink } from "react-router-dom";
import styled from "styled-components";
// ---------------------App styles
export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    rgba(17, 201, 247, 0.59),
    rgba(113, 32, 153, 0.45)
  );
`;

// ----------------------Header styles
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  background-color: #2c2f30;
  font-size: 16px;
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 32px;
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 575px) {
    display: block;
  }
`;
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;
export const NavItem = styled(NavLink)`
  display: block;
  color: #fff;
  font-size: 16px;
  height: 100%;
  padding: 1rem;

  &:hover {
    background-color: #3f4345;
  }
`;

// ------------------ Forms styles
export const FormsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const FormWrapper = styled.form`
  margin-top: 5rem;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #2c2f30;
  color: #fff;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 0.2rem;
`;

// ---------------------Footer styles
export const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: #2c2f30;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
  padding: 1rem;
`;
export const FooterLink = styled.a`
  color: gold;
  font-weight: bold;
`;

// --------------------- Button styles
export const SubmitBtn = styled.button`
  background-color: #0ac278;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
`;
