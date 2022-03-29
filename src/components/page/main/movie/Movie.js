import React, { useEffect } from "react";
import styled from "styled-components";
import background from "../../../../image/section_background.jpg";
import Color from "../../../../style/Color";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";

const MovieSlider = styled.div`
  width: 100%;
  height: 700px;

  position: relative;

  background-color: black;

  background: url(${background}) no-repeat fixed center;

  transition: height 0.5s ease;

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

const MovieContainer = styled(Slider)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.1);

  .slick-dots {
    bottom: -40px;
  }
`;

const MovieTitle = styled.h1`
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  text-align: center;

  padding-top: 20px;

  color: ${Color.TextColor.White};

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const MovieArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 30px;

  z-index: 0;
`;

const YoutubeIframe = styled.iframe`
  width: 720px;
  height: 405px;

  border-radius: 10px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 195px;
  }
`;

const MovieArr = [
  {
    id: 1,
    title: "브레이브걸스(Brave Girls) - Thank You MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/sdycvSqMhPI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
  {
    id: 2,
    title: "브레이브걸스(Brave Girls) - 술버릇 (운전만해 그후) MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/ZIZECe-55HY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
  {
    id: 3,
    title: "브레이브걸스(Brave Girls) - 치맛바람 (Chi Mat Ba Ram) MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/e70PkoJhQYM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
  {
    id: 4,
    title: "브레이브걸스(Brave Girls) - 운전만해 (We Ride) MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/4HjcypoChfQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
  {
    id: 5,
    title: "브레이브걸스(Brave Girls) - 롤린 (Rollin') MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/3cZrxpK2EAQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
  {
    id: 6,
    title: "브레이브걸스(Brave Girls) - 하이힐 (High Heels) MV",
    iframe: () => {
      return (
        <YoutubeIframe
          src="https://www.youtube.com/embed/gF2Pg5dbYN4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowfullscreen
        />
      );
    },
  },
];

/* data-aos="fade-up"
data-aos-duration="1000" */

const Movie = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <React.Fragment>
      <MovieSlider>
        <MovieContainer {...settings}>
          {MovieArr?.map((movie, index) => (
            <MovieArea data-aos="fade-up" data-aos-duration="1000" key={index}>
              {movie?.iframe()}
              <MovieTitle>{movie?.title}</MovieTitle>
            </MovieArea>
          ))}
        </MovieContainer>
      </MovieSlider>
    </React.Fragment>
  );
};

export default Movie;
