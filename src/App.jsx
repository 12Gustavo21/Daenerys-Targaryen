import { lazy, Suspense } from "react";

// global Style
import { GlobalStyle } from "./assets/global/style";

// components
import Header from "./assets/components/header";
const Stormborn = lazy(() => import("./assets/components/titles/stormborn"))
const Targaryen = lazy(() => import("./assets/components/titles/targaryen"))

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
    </>
  )
}
