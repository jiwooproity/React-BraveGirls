import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  height: 450px;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const AboutWrapper = styled.div`
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 35px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;

const AboutDescription = styled.p`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  line-height: 25px;
  white-space: pre-wrap;

  padding-top: 20px;

  color: rgba(0, 0, 0, 0.8);
`;

const AboutDescriptionAnchor = styled.a`
  text-decoration: none;
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <AboutContainer>
      <AboutWrapper data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {/* <AboutWrapper> */}
        <AboutTitle>ABOUT BRAVEGIRLS</AboutTitle>
        <AboutDescription>
          브레이브걸스는 브레이브엔터테인먼트 소속으로 2016년 데뷔한 2기 멤버 민영, 유정, 은지, 유나로 구성된 4인조 걸그룹이다.
          {"\n"}5년여간 무명의 걸그룹이었지만{" "}
          <AboutDescriptionAnchor href="https://www.youtube.com/watch?v=cfHWIqJkEf4" target={"_blank"}>
            #유튜브
          </AboutDescriptionAnchor>
          에서 시작된 롤린의 역주행으로 많은 주목을 받으면서 방송 출연 빈도가 크게 늘어나는 등 대세 걸그룹으로 발돋움했다.
        </AboutDescription>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
