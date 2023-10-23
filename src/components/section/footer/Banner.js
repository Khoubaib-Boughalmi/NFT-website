import React from "react";
import styled from "styled-components";
import Button from "../../common/button/Button";

import img1 from "../../../assets/Nfts/bighead-1.svg";
import img2 from "../../../assets/Nfts/bighead-2.svg";
import img3 from "../../../assets/Nfts/bighead-3.svg";
import img4 from "../../../assets/Nfts/bighead-4.svg";
import img5 from "../../../assets/Nfts/bighead-5.svg";
import img6 from "../../../assets/Nfts/bighead-6.svg";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;
  background-color: rgba(32, 32, 32, 0.9);
`;

const ImgBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 15rem;
    width: 15rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
`;
const Text = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  z-index: 2;
  width: 45%;
`;
const ButtonContainer = styled.div`
  height: 3rem;
  button {
    height: 3rem;
    background-color: #fff;
    color: ${(props) => props.theme.text};
    font-weight: bold;
    &::after {
      border: 2px solid ${(props) => props.theme.body};
      color: ${(props) => props.theme.body};
    }
  }
`;

const Banner = () => {
  return (
    <Section id="footer">
      <ImgBackground>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </ImgBackground>
      <TextContainer>
        <Text>Join The NFT Club</Text>
        <ButtonContainer>
          <Button text="Join Us Now" link="#" />
        </ButtonContainer>
      </TextContainer>
    </Section>
  );
};

export default Banner;
