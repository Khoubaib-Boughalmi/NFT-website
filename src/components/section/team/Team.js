import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/Nfts/bighead-1.svg";
import img2 from "../../../assets/Nfts/bighead-2.svg";
import img3 from "../../../assets/Nfts/bighead-3.svg";
import img4 from "../../../assets/Nfts/bighead-4.svg";
import img5 from "../../../assets/Nfts/bighead-5.svg";
import img6 from "../../../assets/Nfts/bighead-6.svg";

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontxxl};
  margin-top: 1rem;
  width: fit-content;
  border-bottom: 3px solid;
`;
const Container = styled.div`
  width: 75vw;
  margin: 2rem auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  border: 2px solid;
  border-radius: 30px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;
const ImageContainer = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 20px;
  margin: 0.5rem;
  img {
    transition: all 0.3s ease;
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: uppercase;
  margin-top: 1rem;
`;

const Position = styled.div`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: rgba(32, 32, 32, 0.9);
  margin-bottom: 1rem;
`;
const MemberComponent = ({ img, name, position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};
const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="NFT Master" position="Founder" />
        <MemberComponent img={img2} name="Cs 775" position="Manager" />
        <MemberComponent img={img3} name="lOrem" position="Leader" />
        <MemberComponent img={img4} name="NFT" position="Founder" />
        <MemberComponent img={img5} name="Space toon" position="director" />
        <MemberComponent img={img6} name="NFT" position="Founder" />
        <MemberComponent img={img1} name="NFT" position="Founder" />
        <MemberComponent img={img2} name="NFT" position="Founder" />
        <MemberComponent img={img3} name="NFT" position="Founder" />
        <MemberComponent img={img4} name="NFT" position="Founder" />
      </Container>
    </Section>
  );
};

export default Team;
