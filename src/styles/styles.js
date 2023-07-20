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
  align-items: center;
  justify-content: center;
`;
export const NavItem = styled(NavLink)`
  display: block;
  color: #fff;
  font-size: 16px;
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
export const FieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  gap: 10px;
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
export const FieldAddBtn = styled.button`
  margin-bottom: 20px;
  background: #4f9c0b;
  padding: 0.5rem;
  border-radius: 20px;
`;

export const DeleteBtn = styled.button`
  background-color: #e4371f;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
`;
// Collection Page
export const CollectionWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

export const TableItems = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  color: black;
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
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
// --------- Explore styles
export const ExploreWrapper = styled.div`
  width: 100%;
`;
export const ExploreContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const ExploreTitle = styled.h2`
  margin-bottom: 30px;
`;
export const ExploreFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ExplorePictureContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const ExploreImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  opacity: 0.7;
`;
export const ExplorePictureTitleBox = styled.div`
  position: absolute;
  top: 40%;
  left: 17%;
  width: 100%;
  max-width: 200px;

  color: rgba(113, 32, 153, 0.7);
  font-size: clamp(1rem, 0.6479rem + 1.1268vw, 2rem);
  font-weight: bold;
`;
// ------------------- Admin Panel
export const AdminPanelWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;
// ------------------------ Dark/Light btn
export const ThemeCircleContainer = styled.div`
  width: 40px;
  border-radius: 20px;
  height: 20px;
  background: #fff;
  padding: 0.1rem;
  display: flex;
  justify-content: ${(props) =>
    props.$alignRight ? "flex-end" : "flex-start"};
  align-items: center;
`;
export const ThemeCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(113, 32, 153, 1);
  height: 18px;
  width: 18px;
`;
// ---------- Burger Menu
export const BurgerBtn = styled.div`
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  width: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;
export const BurgerMenu = styled.div`
  position: absolute;
  top: 40px;
  right: -10px;
  background-color: #2c2f30;
  opacity: 1;
  z-index: 1;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const BurgerContainer = styled.div`
  position: relative;
`;
export const BurgerLines = styled.div`
  width: 20px;
  height: 2px;
  background-color: #fff;
  border-radius: 5px;
`;
