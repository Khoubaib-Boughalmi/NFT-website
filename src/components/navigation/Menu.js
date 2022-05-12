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
  return (
    <MenuList>
      <ListItem>Home</ListItem>
      <ListItem>About</ListItem>
      <ListItem>RoadMap</ListItem>
      <ListItem>Showcase</ListItem>
      <ListItem>Team</ListItem>
      <ListItem>FAQ</ListItem>
    </MenuList>
  );
};

export default Menu;
