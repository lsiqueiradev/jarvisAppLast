import styled from 'styled-components/native'

import { ScrollViewAnimated } from '@components/ScrollViewAnimated'
import { Button } from '@components/Button'

export const Container = styled(ScrollViewAnimated)`
  flex: 1;
`

export const Body = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.border}px;
`

export const ButtonSignOut = styled(Button)`
  margin-top: 20px;
`
