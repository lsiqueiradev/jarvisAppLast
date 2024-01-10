import * as S from './styles'

export function Loading() {
  return (
    <S.Container>
      <S.Loader size="large" />
      <S.Title>Carregando...</S.Title>
    </S.Container>
  )
}
