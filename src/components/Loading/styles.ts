import styled from 'styled-components/native'

import { ActivityIndicator } from '@components/ActivityIndicator'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Loader = styled(ActivityIndicator)``
