import styled from "styled-components";

// background
import Queen from "../../../img/queen.jpg";
import Queen2 from "../../../img/queen-2.png";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  background: url(${Queen}) no-repeat center/cover;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  mask: radial-gradient(circle, #0000 295px, rgba(0, 0, 0, 0.9) 305px);
  backdrop-filter: blur(11px);
  z-index: 1;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${Queen2}) no-repeat center/cover;
  z-index: 2;
`;

export const Wrapper = styled.section`
  position: relative;
  padding: 5rem 1rem;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  font: 800 clamp(1.7rem, 5.5vw, 4.5rem) "GameThrones", serif;
  color: #fff;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  filter: drop-shadow(2px 4px 6px #0f0f11);
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 3;

  ${Title}:first-child {
    align-self: flex-start;
  }

  ${Title}:last-child {
    align-self: flex-end;
    text-align: right;
  }
`;

export const SideImage = styled.img`
  position: absolute;
  bottom: 0;
  left: -300px;
  width: 1200px;
  filter: drop-shadow(0 10px 10px #0f0f11);
  z-index: 1;
`;
