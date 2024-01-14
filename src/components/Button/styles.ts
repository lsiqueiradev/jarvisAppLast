import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Platform, Pressable, PressableProps } from 'react-native'

import { ActivityIndicator } from '@components/ActivityIndicator'

interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'outline'
  disabled?: boolean
}

interface ButtonTextProps {
  variant?: 'primary' | 'outline'
}

export const Container = styled(Pressable)<ButtonProps>`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;

  flex-direction: row;

  border-width: 2px;
  padding-top: ${({ disabled }) =>
    Platform.OS === 'ios' ? 0 : disabled ? 0 : 2}px;

  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.button_background : 'transparent'};
  border-color: ${({ theme }) => theme.colors.button_background};
`

export const Text = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.font_family.semi_bold};
  font-size: ${RFValue(13)}px;
  color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.colors.button_text
      : theme.colors.button_text_outline};
`
export const Loader = styled(ActivityIndicator).attrs<ButtonTextProps>(
  ({ theme, variant }) => ({
    color:
      variant === 'primary'
        ? theme.colors.button_text
        : theme.colors.button_text_outline,
  }),
)``
