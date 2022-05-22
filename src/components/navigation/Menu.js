import React from "react";
import styled from "styled-components";

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
`;
const ListItem = styled.li`
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.text};
    width: 0%;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Menu = () => {
  const scrollToFn = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <MenuList>
      <ListItem onClick={() => scrollToFn("home")}>Home</ListItem>
      <ListItem onClick={() => scrollToFn("about")}>About</ListItem>
      <ListItem onClick={() => scrollToFn("roadmap")}>RoadMap</ListItem>
      <ListItem onClick={() => scrollToFn("showcase")}>Showcase</ListItem>
      <ListItem onClick={() => scrollToFn("team")}>Team</ListItem>
      <ListItem onClick={() => scrollToFn("faq")}>FAQ</ListItem>
    </MenuList>
  );
};

export default Menu;
