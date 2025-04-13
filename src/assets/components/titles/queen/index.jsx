import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as S from "./style";
import QueenSide from "../../../img/queen-side.png";

gsap.registerPlugin(ScrollTrigger);

export default function Queen() {
  useEffect(() => {
    gsap.to(".background", {
      filter: "blur(5px)",
      webkitFilter: "blur(10px)",
      ease: "power2.out",
      duration: 2,
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top-=150 top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const animateTitle = (selector, offset = 0, start = `top+=${offset} bottom`, end = `top+=${offset} top`) => {
      const el = document.querySelector(selector);
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".wrapper",
              start,
              end,
              scrub: true,
              toggleActions: "restart none restart none",
            },
          }
        );
      }
    };

    animateTitle(".title1", 100);
    animateTitle(".title2", 800, "top+=800 bottom", "top+=800 75%");

    gsap.fromTo(
      ".sideImage",
      { x: "-100%" },
      {
        x: "0%",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title1",
          start: "top bottom",
          end: "top top",
          scrub: true,
          toggleActions: "restart none restart none",
        },
      }
    );
  }, []);

  return (
    <S.Container>
      <S.Background className="background" />
      <S.BackgroundOverlay />
      <S.Wrapper className="wrapper">
        <S.TitleBox>
          <S.Title className="title1">Rightful queen</S.Title>
          <S.Title className="title2">
            of the Andals <span>and the first men</span>
          </S.Title>
        </S.TitleBox>
        <S.SideImage className="sideImage" src={QueenSide} alt="Rosto da Daenerys" />
      </S.Wrapper>
    </S.Container>
  );
}
