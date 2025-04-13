import { lazy, Suspense, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

// global Style
import { GlobalStyle } from "./assets/global/style";

// components
import Header from "./assets/components/header";
const Stormborn = lazy(() => import("./assets/components/titles/stormborn"));
const Targaryen = lazy(() => import("./assets/components/titles/targaryen"));
const Queen = lazy(() => import("./assets/components/titles/queen"));
const Protector = lazy(() => import("./assets/components/titles/protector"));
const Mother = lazy(() => import("./assets/components/titles/mother"));

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container"),
      smooth: true,
      lerp: 0.01,
      scrollFromAnywhere: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="scroll-container">
        <Header />
        <main>
          <Suspense fallback={<div>loading ...</div>}>
            <Stormborn />
          </Suspense>
          <Suspense fallback={<div>loading ...</div>}>
            <Targaryen />
          </Suspense>
          <Suspense fallback={<div>loading ...</div>}>
            <Queen />
          </Suspense>
          <Suspense fallback={<div>loading ...</div>}>
            <Protector />
          </Suspense>
          <Suspense fallback={<div>loading ...</div>}>
            <Mother />
          </Suspense>
        </main>
      </div>
    </>
  );
}
