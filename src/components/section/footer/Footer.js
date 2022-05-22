import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "../../navigation/Logo";
import Facebook from "../../../Icons/Facebook";
import Instagram from "../../../Icons/Instagram";
import Twitter from "../../../Icons/Twitter";
import LinkedIn from "../../../Icons/LinkedIn";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  a {
    scale: 1;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const MenuItems = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Item = styled.li`
  cursor: pointer;
  color: rgb(32 32 32 / 90%);
  display: flex;
  width: 40%;
  padding: 0.5rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: rgb(32 32 32 / 90%);
`;

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Showcase</Item>
          <Item>Roadmap</Item>
          <Item>FAQ</Item>
          <Item>Contact Us</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} NFT-SHIP. All rights reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a href="https://github.com/Khoubaib-Boughalmi">Khoubaib Boughalmi</a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
