import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      0deg,
      rgba(15, 15, 17, 1) 5%,
      rgba(15, 15, 17, 0.5) 45%,
      rgba(15, 15, 17, 1) 95%
    );
    z-index: 0;
  }

  h2 {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font: 900 clamp(1.7rem, 3.5vw, 3.5rem) "GameThrones", serif;
    color: #f9f9f9;
    letter-spacing: 0.5rem;
  }
`;
