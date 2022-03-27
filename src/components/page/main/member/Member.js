import React, { useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";
import minyoung from "../../../../image/member/minyoung.jpg";
import eunji from "../../../../image/member/eunji.jpg";
import yujeong from "../../../../image/member/yujeong.jpg";
import yuna from "../../../../image/member/yuna.jpg";
import Color from "../../../../style/Color";

const MemberContainer = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const MemberWrapper = styled.div`
  text-align: center;
`;

const MemberTitle = styled.h1`
  font-size: 35px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;

  margin-bottom: 20px;

  color: rgba(0, 0, 0, 0.8);
`;

const MemberProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MemberProfileCard = styled.div`
  position: relative;

  margin: 0px 10px;

  @media screen and (max-width: 768px) {
    margin: 10px 0px;
  }
`;

const MemeberProfile = styled.img`
  width: 250px;

  display: block;

  object-fit: cover;

  border-radius: 5px;

  @media screen and (max-width: 768px) {
  }
`;

const MemberProfileNameWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;

  opacity: 0;

  border-radius: 5px;

  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }

  transition: opacity 0.5s ease;
`;

const MemberProfileName = styled.span`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;

  color: ${Color.TextColor.White};
`;

const MemberProfileUrl = [
  {
    id: 1,
    title: "김민영",
    born: "1990년 9월 12일",
    image: minyoung,
  },
  {
    id: 2,
    title: "남유정",
    image: yujeong,
  },
  {
    id: 3,
    title: "홍은지",
    image: eunji,
  },
  {
    id: 4,
    title: "이유나",
    image: yuna,
  },
];

const Member = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MemberContainer>
      <MemberWrapper>
        <MemberTitle data-aos="fade-up" data-aos-duration="1000">
          MEMBER
        </MemberTitle>
        <MemberProfileWrapper data-aos="fade-up" data-aos-duration="1000">
          {MemberProfileUrl?.map((profile, index) => (
            <MemberProfileCard key={index}>
              <MemeberProfile src={profile.image} />
              <MemberProfileNameWrap>
                <MemberProfileName>{profile.title}</MemberProfileName>
              </MemberProfileNameWrap>
            </MemberProfileCard>
          ))}
        </MemberProfileWrapper>
      </MemberWrapper>
    </MemberContainer>
  );
};

export default Member;
