import { PressableProps } from 'react-native'

import { ReactNode } from 'react'

import * as S from './styles'

interface ListContainerProps extends PressableProps {
  children: ReactNode
}

export function ListContainer({ children }: ListContainerProps) {
  return <S.Container>{children}</S.Container>
}
