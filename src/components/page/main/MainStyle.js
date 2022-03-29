import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Footer from "./footer/Footer";
import Member from "./member/Member";
import Movie from "./movie/Movie";
import Wallpaper from "./wallpaper/Wallpaper";

const MainContainer = styled.div`
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainStyle = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Wallpaper />
        <About />
        <Movie />
        <Member />
        <Footer />
      </MainWrapper>
    </MainContainer>
  );
};

export default MainStyle;
