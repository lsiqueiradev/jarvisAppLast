import * as S from './styles'

interface HeadingProps {
  title: string
}

export function Heading({ title }: HeadingProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
