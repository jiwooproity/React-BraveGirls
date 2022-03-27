import React from "react";
import styled from "styled-components";
import MainWallpaper from "../../../../image/bravegirls_wallpaper.png";
import Color from "../../../../style/Color";

const WallpaperWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  background-color: black;
`;

const WallpaperImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  position: absolute;
  top: 0;
`;

const WallpaperTitleContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 30px 0px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.1);
`;

const WallpaperTextArea = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;

  border-radius: 5px;
`;

const WallpaperTitle = styled.h1`
  font-size: 32px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  line-height: 40px;

  color: ${Color.TextColor.White};

  &:first-child {
    font-size: 25px;
    line-height: 32px;
  }
`;

const WallpaeprDes = styled.p`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;

  padding-top: 5px;

  color: ${Color.TextColor.White};
`;

const WallpaperButton = styled.span`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;

  padding: 5px 10px;
  margin-top: 5px;

  display: inline-block;

  border-radius: 5px;

  background-color: white;

  cursor: pointer;
`;

const WallpaperButtonAnchor = styled.a`
  text-decoration: none;

  color: rgba(0, 0, 0, 9);
`;

const WallpaperUrl = {
  wallpaper: MainWallpaper,
};

const Wallpaper = () => {
  return (
    <WallpaperWrapper>
      {/* <WallpaperImage data-aos="fade-up" data-aos-duration="500" src={WallpaperUrl.wallpaper} /> */}
      <WallpaperImage src={WallpaperUrl.wallpaper} />
      <WallpaperTitleContainer>
        <WallpaperTextArea data-aos="fade-right" data-aos-duration="1000">
          <WallpaperTitle>B-GIRLS ARE BACK!</WallpaperTitle>
          <WallpaperTitle>안녕하세요, 브레이브걸스입니다!</WallpaperTitle>
          <WallpaeprDes>SINCE - 2016</WallpaeprDes>
          <WallpaperButton>
            <WallpaperButtonAnchor href={"https://www.youtube.com/watch?v=sdycvSqMhPI"} target={"_blank"}>
              Thank You M/V 듣기
            </WallpaperButtonAnchor>
          </WallpaperButton>
        </WallpaperTextArea>
      </WallpaperTitleContainer>
    </WallpaperWrapper>
  );
};

export default Wallpaper;
