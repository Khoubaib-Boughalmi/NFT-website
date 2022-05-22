import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
const Section = styled.div`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0.5rem 0;
  border-bottom: 3px solid ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75vw;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 45%;
  height: auto;
`;

const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="hello world">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            accusamus.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
