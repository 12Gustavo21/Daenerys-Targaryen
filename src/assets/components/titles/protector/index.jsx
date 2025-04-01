import * as S from "./style";

import ProtectorSide from "../../../img/protector-side.png";

export default function index() {
  return (
    <S.Container>
      <S.Background />
      <S.BackgroundOverlay />

      <S.Wrapper>
        <S.TitleBox>
          <S.Title>Protector of the Seven Kingdoms</S.Title>
        </S.TitleBox>

        <S.SideImage src={ProtectorSide} alt="Rosto da Daenerys" />
      </S.Wrapper>
    </S.Container>
  );
}
