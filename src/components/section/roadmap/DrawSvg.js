import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Vector from "../../../Icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const bounce = keyframes`
	from{ transform : translateX(-50%) scale(0.5)}
	to{ transform : translateX(-50%) scale(1)}
`;
const Ball = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #000;
  transform: translateX(-50%);
  animation: ${bounce} 0.8s ease infinite alternate;
`;
const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  height: 100%;
  width: 100%;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%);
  svg {
    height: 100%;
    width: 100%;
  }
`;
const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];
    const length = svg.getTotalLength();
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          let draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            console.log("im active");
            ballRef.current.style.display = "none";
          } else {
            console.log("im not active");
            ballRef.current.style.display = "inline-block";
          }
        },
      },
    });
    return () => {};
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
