import { Link, NavLink } from "react-router-dom";
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
// --------------------DashboardWrapper
export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;

  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #fff;
`;

export const UserAccountDetails = styled.div`
  border-radius: 20px;
  background-color: #2c2f30;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
//----------------------- Collection Table
export const CollectionTableWrapper = styled.div`
  background-color: #2c2f30;
  margin-top: 1rem;
  border-radius: 20px;
  padding: 1rem;
`;

export const Table = styled.table`
  margin: 10px auto;
  width: 100%;
`;

export const CollectionImg = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 50%;
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

export const FormText = styled.p`
  text-align: center;
  padding: 20px 0;
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
  background-color: #7ac8b0;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
`;
export const StyledLink = styled(Link)`
  background-color: #0ca677;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
//--------------------------------- Collection  Card

export const CollectionCardWrapper = styled.div`
  margin-top: 1rem;
`;
export const CollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CollectionCardElem = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`;

export const CollectionCardBody = styled.div`
  margin-top: 10px;
`;

export const CollectionCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CollectionCardTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const CollectionCardDescription = styled.p`
  margin-bottom: 10px;
`;

export const CollectionCardCategory = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CollectionCardID = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
`;

export const CollectionCardCreatedAt = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
`;

export const CollectionCardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CollectionCardButton = styled.button`
  padding: 5px 10px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;
