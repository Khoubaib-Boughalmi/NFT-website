import React from "react";
import styled from "styled-components";
const ButtonContainer = styled.div``;
const Link = styled.button`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.8rem 3.5rem;
  cursor: pointer;
  border-radius: 50px;
  scale: 1;
  transition: scale 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 100px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
const Button = ({ text, link }) => {
  return (
    <ButtonContainer>
      <Link to={link}>{text}</Link>
    </ButtonContainer>
  );
};

export default Button;
