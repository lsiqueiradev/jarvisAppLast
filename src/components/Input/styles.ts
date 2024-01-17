import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@helpers/icons'
import { rgba } from 'polished'

interface Props {
  isFocused: boolean
  error?: string | null
}

export const Container = styled.View`
  margin-bottom: ${RFValue(17)}px;
`

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

export const ErrorContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${RFValue(10)}px;
  margin-left: 5px;
`

export const InputContainer = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 15px;
  height: 50px;
  width: 100%;

  background-color: 'transparent';
  border: 2px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.text)};
`

export const FormInput = styled(TextInput)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  flex: 1;
  height: 100%;
`

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
  width: 50px;
  height: 100%;

  align-items: center;
  justify-content: center;
`

export const ErrorIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: rgba(theme.colors.error, 1),
}))``

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: rgba(theme.colors.text, 1),
}))``
