import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../../assets/Nfts/bighead-1.svg";
import img2 from "../../../assets/Nfts/bighead-2.svg";
import img3 from "../../../assets/Nfts/bighead-3.svg";
import img4 from "../../../assets/Nfts/bighead-4.svg";
import img5 from "../../../assets/Nfts/bighead-5.svg";
import img6 from "../../../assets/Nfts/bighead-6.svg";
import ETH from "../../../assets/icons8-ethereum-48.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Slide = keyframes`
	0%{transform: translateX(100%)}
	100%{transform: translateX(-100%)}
`;
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0px;
  display: flex;
  animation: ${Slide} 25s linear infinite ${(props) => props.direction};
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0px 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border: 2px solid ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};

  border-radius: 0 0 20px 20px;
  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.body};
  }
  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
  }
`;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 1rem;
    height: auto;
  }
`;
const NftItems = ({ img, number, price, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="NFT" />
      <Details>
        <div>
          <span>Weirdos</span>
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="" />
            <h1>{price}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const ShowCase = () => {
  const row1 = useRef(null);
  const row2 = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={row1}>
        <NftItems img={img1} price="0.2" number="33" passRef={row1} />
        <NftItems img={img2} price="0.2" number="33" passRef={row1} />
        <NftItems img={img3} price="0.2" number="33" passRef={row1} />
        <NftItems img={img4} price="0.2" number="33" passRef={row1} />
        <NftItems img={img5} price="0.2" number="33" passRef={row1} />
        <NftItems img={img6} price="0.2" number="33" passRef={row1} />
      </Row>
      <Row direction="reverse" ref={row2}>
        <NftItems img={img1} price="0.2" number="33" passRef={row2} />
        <NftItems img={img2} price="0.2" number="33" passRef={row2} />
        <NftItems img={img3} price="0.2" number="33" passRef={row2} />
        <NftItems img={img4} price="0.2" number="33" passRef={row2} />
        <NftItems img={img5} price="0.2" number="33" passRef={row2} />
        <NftItems img={img6} price="0.2" number="33" passRef={row2} />
      </Row>
    </Section>
  );
};

export default ShowCase;
