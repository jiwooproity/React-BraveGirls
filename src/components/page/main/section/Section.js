import React from "react";
import styled from "styled-components";
import background from "../../../../image/section_background.jpg";
import Color from "../../../../style/Color";

const SectionFirstContainer = styled.div`
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

const SectionFirstContent = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  backdrop-filter: blur(10px);

  background-color: rgba(0, 0, 0, 0.2);
`;

const SectionFirstTitle = styled.h1`
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  text-align: center;

  padding-bottom: 20px;

  color: ${Color.TextColor.White};
`;

const SectionYoutube = styled.div`
  padding: 10px;

  z-index: 0;
`;

const SectionIframe = styled.iframe`
  width: 720px;
  height: 405px;

  border-radius: 5px;
  border: none;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 225px;
  }
`;

const SectionSecondContainer = styled.div`
  width: 100%;
  height: 400px;

  background-color: black;
`;

const Section = () => {
  return (
    <React.Fragment>
      <SectionFirstContainer>
        <SectionFirstContent />
        <SectionYoutube>
          <SectionFirstTitle>BRAVEGIRLS _ Thank You M/V</SectionFirstTitle>
          <SectionIframe
            src="https://www.youtube.com/embed/sdycvSqMhPI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SectionYoutube>
      </SectionFirstContainer>
      <SectionSecondContainer />
    </React.Fragment>
  );
};

export default Section;
