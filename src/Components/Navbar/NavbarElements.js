import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  ${"" /* margin-top: -80px; */}
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  height: 16px;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 20px;
    right: 20px;
    transform: translate(100%, 60%);
    fon-size: 5.8rem;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavBtnLink = styled(LinkR) `

// `
