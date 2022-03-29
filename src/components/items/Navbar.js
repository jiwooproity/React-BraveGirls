import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Color from "../../style/Color";

const NavbarContainer = styled.div`
  width: 100%;

  position: ${({ fixed }) => (fixed ? "none" : "absolute")};

  z-index: 1;
`;

const NavbarTop = styled.div`
  width: 100%;

  padding: 5px 30px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: ${({ fixed }) => (fixed ? "absolute" : "none")};

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  background-color: black;

  z-index: 1;
`;

const NavbarBottom = styled.div`
  width: 100%;

  padding: 30px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: ${({ fixed }) => (fixed ? "fixed" : "none")};

  background-color: ${({ fixed }) => (fixed ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)")};

  backdrop-filter: ${({ fixed }) => (fixed ? "blur(15px)" : "blur(0)")};

  transition: background-color 0.5s ease;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  z-index: 1;
`;

const NavbarBottomArea = styled.div`
  width: 30%;

  display: flex;

  &:nth-child(3) {
    justify-content: flex-end;
  }
`;

const NavbarLogo = styled.h1`
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;

  color: ${Color.TextColor.White};

  cursor: pointer;
`;

const NavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

const NavbarMenuBottom = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarMenuHanburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavbarTopItem = styled.li`
  font-size: 12px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 200;

  color: ${Color.TextColor.White};

  cursor: pointer;
`;

const NavbarBottomItem = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;

  padding-right: 10px;

  color: ${Color.TextColor.White};

  cursor: pointer;
`;

const NavbarBottomSearch = styled.input`
  padding-bottom: 5px;

  border: none;
  border-bottom: 1px solid white;

  background-color: transparent;
  color: ${Color.TextColor.White};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Color.TextColor.White};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TopMenu = [
  {
    id: 1,
    title: "LOGIN /",
    onClick: () => {
      alert("아직 이용하실 수 없습니다.");
    },
  },
  {
    id: 2,
    title: "JOIN",
    onClick: () => {
      alert("아직 이용하실 수 없습니다.");
    },
  },
];

const BottomMenu = [
  {
    id: 1,
    title: "HOME",
    onClick: () => {
      alert("준비 중입니다.");
    },
  },
  {
    id: 2,
    title: "ABOUT",
    onClick: () => {
      alert("준비 중입니다.");
    },
  },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fixed, setFixed] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  window.addEventListener("scroll", () => {
    let scrollData = window.scrollY;

    setScrollY(scrollData);
  });

  useEffect(() => {
    setFixed(scrollY > 28);
  }, [scrollY, setScrollY]);

  const openSubMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <NavbarContainer fixed={fixed}>
      <NavbarTop fixed={fixed}>
        <NavbarMenu>
          {TopMenu?.map((item, index) => (
            <NavbarTopItem onClick={item.onClick} key={index}>
              {item.title}
            </NavbarTopItem>
          ))}
        </NavbarMenu>
      </NavbarTop>
      <NavbarBottom fixed={fixed}>
        <NavbarBottomArea>
          <NavbarMenuBottom>
            {BottomMenu?.map((list, index) => (
              <NavbarBottomItem onClick={list.onClick} key={index}>
                {list?.title}
              </NavbarBottomItem>
            ))}
          </NavbarMenuBottom>
          <NavbarMenuHanburger>
            <FontAwesomeIcon
              onClick={openSubMenu}
              style={{
                color: "white",
                fontSize: "21",
              }}
              icon={faBars}
            />
          </NavbarMenuHanburger>
        </NavbarBottomArea>
        <NavbarLogo>BRAVEGIRLS</NavbarLogo>
        <NavbarBottomArea>
          <NavbarBottomSearch placeholder="SEARCH" />
        </NavbarBottomArea>
      </NavbarBottom>
    </NavbarContainer>
  );
};

export default Navbar;
