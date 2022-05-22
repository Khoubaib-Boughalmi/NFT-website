import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 1rem 0;
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 100;
  margin-top: 1rem;
  color: rgb(255 255 255 / 60%);
`;

const Name = styled.div``;
const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};
  font-weight: 100 !;
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container onClick={() => setCollapse(!collapse)}>
      <Title>
        <Name>{title}</Name>
        {collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
