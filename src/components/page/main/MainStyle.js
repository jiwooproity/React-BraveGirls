import React from "react";
import styled from "styled-components";
import Wallpaper from "../../items/Wallpaper";

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
      </MainWrapper>
    </MainContainer>
  );
};

export default MainStyle;
