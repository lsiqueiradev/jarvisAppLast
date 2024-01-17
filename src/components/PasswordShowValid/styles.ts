import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@helpers/icons'

interface TextErrorProps {
  valid: boolean
}

export const PasswordIndicatorContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.border}px 10px;
`

export const PasswordIndicatorContainerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${RFValue(12)}px;
  margin-bottom: 5px;
`

export const PasswordIndicatorContainerItem = styled.View`
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`

export const PasswordIndicatorContainerItemText = styled.Text<TextErrorProps>`
  color: ${({ theme, valid }) =>
    valid ? theme.colors.success : theme.colors.error};
  font-family: ${({ theme }) => theme.font_family.medium};
  font-size: ${RFValue(10)}px;
  margin-left: 6px;
`
export const PasswordIndicatorContainerItemIcon = styled(
  Feather,
).attrs<TextErrorProps>(({ theme, valid }) => ({
  color: valid ? theme.colors.success : theme.colors.error,
  size: 20,
}))``
