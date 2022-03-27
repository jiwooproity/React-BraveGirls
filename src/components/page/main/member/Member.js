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
  margin: 0px 10px;

  @media screen and (max-width: 768px) {
    margin: 10px 0px;
  }
`;

const MemberProfileImageWrap = styled.div`
  position: relative;
`;

const MemeberProfile = styled.img`
  width: 250px;
  height: 250px;

  display: block;

  object-fit: cover;
  object-position: 0px 0px;

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

const MemberProfileTagName = styled.span`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;

  position: absolute;
  bottom: 5px;
  right: 10px;

  color: ${Color.TextColor.White};
`;

const MemeberAboutWrap = styled.div`
  width: 100%;

  padding: 5px 0px;

  display: block;

  text-align: left;
`;

const MemberAboutText = styled.span`
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
`;

const MemberProfileUrl = [
  {
    id: 1,
    title: "김민영",
    born: "1990년 09월 12일",
    image: minyoung,
    tag: "메보좌",
  },
  {
    id: 2,
    title: "남유정",
    born: "1991년 05월 02일",
    image: yujeong,
    tag: "꼬북좌",
  },
  {
    id: 3,
    title: "홍은지",
    born: "1992년 07월 19일",
    image: eunji,
    tag: "왕눈좌",
  },
  {
    id: 4,
    title: "이유나",
    born: "1993년 04월 16일",
    image: yuna,
    tag: "단발좌",
  },
];

const Member = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MemberContainer>
      <MemberWrapper>
        {/* <MemberTitle data-aos="fade-up" data-aos-duration="1000"> */}
        <MemberTitle>MEMBER PROFILE</MemberTitle>
        {/* <MemberProfileWrapper data-aos="fade-up" data-aos-duration="1000"> */}
        <MemberProfileWrapper>
          {MemberProfileUrl?.map((profile, index) => (
            <MemberProfileCard key={index}>
              <MemberProfileImageWrap>
                <MemeberProfile src={profile.image} />
                <MemberProfileTagName># {profile.tag}</MemberProfileTagName>
                <MemberProfileNameWrap>
                  <MemberProfileName>{profile.title}</MemberProfileName>
                </MemberProfileNameWrap>
              </MemberProfileImageWrap>
              <MemeberAboutWrap>
                <MemberAboutText>{profile.born}</MemberAboutText>
              </MemeberAboutWrap>
            </MemberProfileCard>
          ))}
        </MemberProfileWrapper>
      </MemberWrapper>
    </MemberContainer>
  );
};

export default Member;
