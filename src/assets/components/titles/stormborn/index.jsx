// style
import * as S from "./style"

// components
import Thunders from "../../thunders"

export default function index() {
  return (
    <>
      <S.Wrapper>
        <h2>
          Stormborn
        </h2>
        <Thunders hue={38}
          xOffset={0}
          speed={1}
          intensity={2}
          size={3} />
      </S.Wrapper>
    </>
  )
}
