import React from "react";
import styled, { keyframes } from "styled-components";
import TypeWriterText from "./TypeWriterText";
import VideoPlayer from "./VideoPlayer";
import ArrowText from "../../../assets/Rounded-Text-Black.png";
const Section = styled.div`
  min-height: calc(100vh - ${(props) => props.theme.navHeight});
  width: 100vw;
  position: relative;
`;
const Container = styled.div`
  height: 80vh;
  width: 85vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
	100%{
		transform: rotate(1turn);
	}
`;

const SpinningArrow = styled.div`
  position: absolute;
  left: 3rem;
  bottom: 2rem;
  cursor: pointer;
  img {
    height: 6rem;
    width: 6rem;
    animation: ${rotate} 6s infinite linear reverse;
  }
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
`;

const CircleArrow = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontlg};
  /* 
  &::after {
    border: 1px #000;
    content: " ";
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 50%;
  } */
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <VideoPlayer />
        </Box>
        <SpinningArrow>
          <CircleArrow>&#x2193;</CircleArrow>
          <img src={ArrowText} alt="" />
        </SpinningArrow>
      </Container>
    </Section>
  );
};

export default Home;
