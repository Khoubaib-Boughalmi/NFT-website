import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../../common/button/Button";

const Section = styled.div`
  background-color: ${(props) => props.theme.body};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  span {
    font-family: "akaya telivigala", sans-serif;
  }
  .text-1 {
    color: red;
  }
  .text-2 {
    color: blue;
  }
  .text-3 {
    color: orange;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  justify-self: self-start;
`;
const Subtitle = styled.h3`
  font-size: ${(props) => props.fontlg};
  color: grey;
  align-self: flex-start;
  font-weight: 500;
  margin: 1rem 0;
`;
const TypeWriterText = () => {
  return (
    <Section>
      <Title>
        Discover new era of nft
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>NFT</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Stuff</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>Collectable</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Bored Of Apes? Try Something New.</Subtitle>
      <ButtonContainer>
        <Button text="explore more" link="#"></Button>
      </ButtonContainer>
    </Section>
  );
};

export default TypeWriterText;
