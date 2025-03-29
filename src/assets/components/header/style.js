import styled from "styled-components";

// background
import Hero from "../../img/Hero.webp";

export const Header = styled.header`
  width: 100%;
  height: 105dvh;
  background: url(${Hero}) no-repeat center/cover;
  box-shadow: inset #0f0f11 0 -20px 32px;
  position: relative;

  h1 {
    position: absolute;
    top: 31%;
    left: 51%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font: 800 clamp(1.7rem, 5.5vw, 4.5rem) "GameThrones", serif;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: clamp(0.5rem, 2vw, 1.5rem);
    filter: drop-shadow(2px 4px 6px #0f0f11);

    div {
      width: 100%;
      display: flex;
      gap: clamp(4rem, 6vw, 6rem);
    }
  }
`;