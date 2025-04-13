import * as S from "./style";

export default function index() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Of House Targaryen</S.Title>
        <S.TimelineList>
          <S.TimelineItem>
            <S.IconContainer>
              <S.IconImage src="/icon.webp" alt="Targaryen house icon" draggable="false" />
            </S.IconContainer>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.IconContainer>
              <S.IconImage src="/icon.webp" alt="Targaryen house icon" draggable="false" />
            </S.IconContainer>
          </S.TimelineItem>
        </S.TimelineList>
      </S.Wrapper>
    </>
  )
}
