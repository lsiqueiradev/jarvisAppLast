import styled from 'styled-components/native'

import { Animated } from 'react-native'

export const Container = styled(Animated.ScrollView).attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingBottom: theme.spacing.border,
  },
}))`
  flex: 1;
`
