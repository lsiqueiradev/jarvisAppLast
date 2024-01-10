import styled from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const ViewRoot = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ViewSafeAreaProvider = styled(SafeAreaProvider)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ViewFadeIn = styled(Animated.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
