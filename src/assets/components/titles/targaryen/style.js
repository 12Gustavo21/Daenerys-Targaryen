import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: 900 clamp(1.7rem, 3.5vw, 3.5rem) "GameThrones", serif;
  color: #f9f9f9;
  letter-spacing: 0.5rem;
  text-align: center;
`;

export const TimelineList = styled.ul`
  width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding-inline: 1rem;
  align-items: flex-start;
  list-style: none;
`;

export const TimelineItem = styled.li`
  width: 10rem;
  height: 55rem;
  display: grid;
  grid-template-areas:
    "role"
    "icon";
  align-items: flex-start;
  background: #2b2b2b;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) 2rem,
    rgba(0, 0, 0, 0.4) 2.5rem,
    rgba(0, 0, 0, 0) 7.5rem
  );
  clip-path: polygon(
    calc(1rem / -2 - 5px) 0,
    calc(100% + 1rem + 5px) 0,
    calc(100% + 1rem + 5px) calc(100% - 2rem),
    50% 100%,
    calc(1rem / -2 - 5px) calc(100% - 2rem)
  );

  &::before {
    content: "";
    grid-area: role;
    height: 1rem;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-top: calc(2rem / 2 - 1rem / 2);
    background: grey;
    z-index: -1;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
  }

  &::after {
    content: "";
    grid-area: role;
    background: #2b2b2b;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
    height: 2rem;
  }
`;

export const IconContainer = styled.div`
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 9rem;
  height: 9rem;
  object-fit: contain;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
`;
