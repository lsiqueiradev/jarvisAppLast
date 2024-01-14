import styled from 'styled-components/native'

import { Button } from '@components/Button'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Body = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.border}px;
`

export const ButtonSignIn = styled(Button)`
  margin-bottom: 20px;
`

export const ButtonSignUp = styled(Button)``
