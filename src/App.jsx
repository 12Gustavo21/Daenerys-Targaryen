import { lazy, Suspense } from "react";

// global Style
import { GlobalStyle } from "./assets/global/style";

// components
import Header from "./assets/components/header";
const Stormborn = lazy(() => import("./assets/components/titles/stormborn"))
const Targaryen = lazy(() => import("./assets/components/titles/targaryen"))
const Queen = lazy(() => import("./assets/components/titles/queen"))
const Protector = lazy(() => import("./assets/components/titles/protector"))
const Mother = lazy(() => import("./assets/components/titles/mother"))

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
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
    </>
  )
}
