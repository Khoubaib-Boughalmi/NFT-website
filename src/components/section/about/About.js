import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { ThemeProvider } from "styled-components";

import Button from "../../common/button/Button";
import { dark } from "../../../styles/theme";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const TitleContainer = styled.div`
  width: 80%;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.text};
  width: 50%;
  height: 100%;
`;

const Title = styled.h2`
  align-self: flex-start;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxxl};
  margin: 1rem auto;
`;
const SubTitle = styled.p`
  align-self: flex-start;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontlg};
  margin-bottom: 2rem;
`;
const SubTitleLight = styled.p`
  align-self: flex-start;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 100;
  margin-bottom: 2rem;
`;
const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Card />
        </Box>
        <Box>
          <TitleContainer>
            <Title>Welcome To The NFT Club.</Title>
            <SubTitle>
              The NFT CLUB is a private collection of NFTs—unique digital
              collectibles. The NFT are stored as ERC-721 tokens on the
              Ethereum blockchain and hosted on IPFS.
            </SubTitle>
            <SubTitleLight>
              With more than 200+ hand drawn traits, each NFT is unique and
              comes with a membership to an exclusive group of successful
              investors. Join an ambitious ever-growing community with multiple
              benefits and utilities.
            </SubTitleLight>
            <ThemeProvider theme={dark}>
              <Button text="Join Our Discord" link="#"></Button>
            </ThemeProvider>
          </TitleContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
