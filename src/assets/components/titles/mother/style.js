import styled, { keyframes } from "styled-components";

// background
import Mother from "../../../img/mother.png";

const burn = keyframes`
  0% {text-shadow: 0 0 20px #fefcc9,
  10px -10px 30px #feec85,
  -20px -20px 40px #ffae34,
  20px -40px 50px #ec760c,
  -20px -60px 60px #cd4606,
  0 -80px 70px #973716,
  10px -90px 80px #451b0e;}
100% {text-shadow: 0 0 20px #fefcc9,
  10px -10px 30px #fefcc9,
  -20px -20px 40px #feec85,
  22px -42px 60px #ffae34,
  -22px -58px 50px #ec760c,
  0 -82px 80px #cd4606,
  10px -90px 80px  #973716;}
`;

export const Container = styled.section`
  height: 100vh;
  background: url(${Mother}) no-repeat center/cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 0;
  }
`;

export const Wrapper = styled.section`
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
  text-align: center;

  ${Title}:last-child {
    color: #0f0f11;
    animation: ${burn} 0.65s ease-in-out infinite alternate;
  }
`;
