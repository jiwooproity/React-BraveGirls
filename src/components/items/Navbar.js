import React from "react";
import styled from "styled-components";
import Color from "../../style/Color";

const NavbarContainer = styled.div`
  width: 100%;

  position: sticky;
`;

const NavbarWrapper = styled.div`
  width: 100%;

  padding: 15px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(30, 28, 61);
`;

const NavbarLogo = styled.h1`
  font-size: 25px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;

  color: ${Color.TextColor.White};
`;

const NavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

const NavbarMenuItem = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;

  padding-left: 10px;

  color: ${Color.TextColor.White};
`;

const Menu = [
  {
    id: 1,
    title: "HOME",
    onClick: () => {},
  },
  {
    id: 2,
    title: "ABOUT",
    onClick: () => {},
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>BRAVEGIRLS</NavbarLogo>
        <NavbarMenu>
          {Menu?.map((list, index) => (
            <NavbarMenuItem key={index}>{list?.title}</NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
