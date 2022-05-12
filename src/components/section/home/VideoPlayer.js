import React from "react";
import styled from "styled-components";
import VID from "../../../assets/video.mp4";

const VideoContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
  }
`;
const VideoPlayer = () => {
  return (
    <VideoContainer>
      <video src={VID} autoPlay muted loop></video>
    </VideoContainer>
  );
};

export default VideoPlayer;
