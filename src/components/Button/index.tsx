import { PressableProps } from 'react-native'

import * as S from './styles'
import React from 'react'

interface ButtonProps extends PressableProps {
  title: string | undefined
  isDisabled?: boolean
  variant?: 'primary' | 'outline'
}

export function Button({
  title,
  isDisabled,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <S.Container {...rest} disabled={isDisabled} variant={variant}>
      {isDisabled ? (
        <S.Loader variant={variant} />
      ) : (
        <S.Text variant={variant}>{title}</S.Text>
      )}
    </S.Container>
  )
}
