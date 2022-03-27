import React from "react";
import styled from "styled-components";
import background from "../../../../image/section_background.jpg";
import Color from "../../../../style/Color";

const MovieContainer = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: black;

  overflow: hidden;

  background: url(${background}) no-repeat fixed center;
`;

const MovieTitle = styled.h1`
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  text-align: center;

  padding-top: 20px;

  color: ${Color.TextColor.White};
`;

const MovieArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 10px;

  z-index: 0;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
`;

const YoutubeIframe = styled.iframe`
  width: 720px;
  height: 405px;

  border-radius: 5px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 225px;
  }
`;

const Movie = () => {
  return (
    <React.Fragment>
      <MovieContainer>
        <MovieArea>
          <YoutubeIframe
            data-aos="fade-up"
            data-aos-duration="1000"
            src="https://www.youtube.com/embed/sdycvSqMhPI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            allowfullscreen
          />
          <MovieTitle data-aos="fade-up" data-aos-duration="1000">
            BRAVEGIRLS _ Thank You M/V
          </MovieTitle>
        </MovieArea>
      </MovieContainer>
    </React.Fragment>
  );
};

export default Movie;
