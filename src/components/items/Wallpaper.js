import React from "react";
import styled from "styled-components";

const WallpaperWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const WallpaperImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const WallpaperUrl = {
  wallpaper: "https://pbs.twimg.com/media/FNQAgP1aQA47FUN?format=jpg&name=4096x4096",
  combackImage: "http://www.bravesound.com/theme/purewhite/img/KakaoTalk_20220302_103454191.jpg",
  naverNow: "http://www.bravesound.com/theme/purewhite/img/KakaoTalk_20220314_180832392.jpg",
};

const Wallpaper = () => {
  return (
    <WallpaperWrapper>
      <WallpaperImage src={WallpaperUrl.combackImage} />
    </WallpaperWrapper>
  );
};

export default Wallpaper;
