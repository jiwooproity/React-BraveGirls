import React, { useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";
import minyoung from "../../../../image/member/minyoung.jpg";
import eunji from "../../../../image/member/eunji.jpg";
import yujeong from "../../../../image/member/yujeong.jpg";
import yuna from "../../../../image/member/yuna.jpg";
import instagramIcon from "../../../../image/sns/instagram.png";
import Color from "../../../../style/Color";
import moment from "moment";
import "moment/locale/ko";

const MemberContainer = styled.div`
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 30px;

  @media screen and (max-width: 768px) {
    height: auto;

    padding: 60px 30px 30px 30px;
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

const InstagramAnchor = styled.a`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;

  background-color: white;

  opacity: 0.9;
`;

const InstagramImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const MemberProfileUrl = [
  {
    id: 1,
    title: "김민영",
    born: "1990-09-12",
    image: minyoung,
    tag: "메보좌",
    instagram: "https://www.instagram.com/nyong2ya/",
  },
  {
    id: 2,
    title: "남유정",
    born: "1991-05-02",
    image: yujeong,
    tag: "꼬북좌",
    instagram: "https://www.instagram.com/braveg_yj/",
  },
  {
    id: 3,
    title: "홍은지",
    born: "1992-07-19",
    image: eunji,
    tag: "왕눈좌",
    instagram: "https://www.instagram.com/bg_eunji92/",
  },
  {
    id: 4,
    title: "이유나",
    born: "1993-04-06",
    image: yuna,
    tag: "단발좌",
    instagram: "https://www.instagram.com/u.nalee/",
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
          MEMBER PROFILE
        </MemberTitle>
        <MemberProfileWrapper data-aos="fade-up" data-aos-duration="1000">
          {/* <MemberProfileWrapper> */}
          {MemberProfileUrl?.map((profile, index) => (
            <MemberProfileCard key={index}>
              <MemberProfileImageWrap>
                <MemeberProfile src={profile.image} />
                <MemberProfileTagName># {profile.tag}</MemberProfileTagName>
                <MemberProfileNameWrap>
                  <MemberProfileName>{profile.title}</MemberProfileName>
                </MemberProfileNameWrap>
                <InstagramAnchor href={profile.instagram} target={"_blank"}>
                  <InstagramImage src={instagramIcon} />
                </InstagramAnchor>
              </MemberProfileImageWrap>
              <MemeberAboutWrap>
                <MemberAboutText>{moment(profile.born).format("YYYY년 MM월 DD일")}</MemberAboutText>
              </MemeberAboutWrap>
            </MemberProfileCard>
          ))}
        </MemberProfileWrapper>
      </MemberWrapper>
    </MemberContainer>
  );
};

export default Member;
