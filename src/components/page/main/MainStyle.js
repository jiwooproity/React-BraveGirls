import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Section from "./section/Section";
import Wallpaper from "./wallpaper/Wallpaper";

const MainContainer = styled.div`
  width: 100%;
`;

const MainWrapper = styled.div`
  width: 100%;
`;

const MainStyle = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Wallpaper />
        <About />
        <Section />
      </MainWrapper>
    </MainContainer>
  );
};

export default MainStyle;
