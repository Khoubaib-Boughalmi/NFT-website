import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Button from "../common/button/Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    background: ${(props) => props.theme.text};
    position: absolute;
    right: ${(props) => (props.click ? "-2px" : "0")};
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;
const Navigation = () => {
  const [click, setClick] = useState(false);
  return (
    <Section>
      <NavBar>
        <Logo />
        {/* <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu> */}
        <Menu />
        <Button text="Connect Wallet" link="#" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
