import * as S from "./style";

import QueenSide from "../../../img/queen-side.png";

export default function index() {
  return (
    <S.Container>
      <S.Background />
      <S.BackgroundOverlay />

      <S.Wrapper>
        <S.TitleBox>
          <S.Title>Rightful queen</S.Title>
          <S.Title>
            of the Andals <span>and the first men</span>
          </S.Title>
        </S.TitleBox>

        <S.SideImage src={QueenSide} alt="Rosto da Daenerys" />
      </S.Wrapper>
    </S.Container>
  );
}
