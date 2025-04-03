import styled from "styled-components";

// background
import Mother from "../../../img/mother.png";

export const Container = styled.div`
  position: relative;
  height: 100vh;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${Mother}) no-repeat center/cover;
  z-index: -2;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, .8) 100%
  );
  z-index: -1;
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
  text-align: center;
  z-index: 1;
`;
