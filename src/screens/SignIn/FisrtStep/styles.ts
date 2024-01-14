import styled from 'styled-components/native'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Body = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.border}px;

  justify-content: flex-end;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.font_family.regular};

  padding: 0 ${({ theme }) => theme.spacing.border}px;
`

export const InputText = styled(Input)``

export const Footer = styled.View`
  padding: 20px ${({ theme }) => theme.spacing.border}px 0;
`

export const ButtonSignIn = styled(Button)`
  margin-bottom: 20px;
`

export const ButtonSignUp = styled(Button)``
