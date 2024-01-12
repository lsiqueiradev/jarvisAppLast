import styled from 'styled-components/native'
import { rgba } from 'polished'

import { Animated, Platform } from 'react-native'

interface ActivityIndicatorProps {
  size: 'small' | 'large'
  color: string | null
}

export const Container = styled(Animated.View)<ActivityIndicatorProps>`
  width: ${({ size }) => (size === 'large' ? 30 : 20)}px;
  height: ${({ size }) => (size === 'large' ? 30 : 20)}px;
  padding: 0;
  border-width: ${({ size }) =>
    Platform.OS === 'ios' ? 2.8 : size === 'large' ? 2.2 : 2.8}px;
  border-top-color: ${({ theme, color }) =>
    color ? rgba(color, 0.3) : rgba(theme.colors.text, 0.3)};
  border-right-color: ${({ theme, color }) =>
    color ? rgba(color, 0.3) : rgba(theme.colors.text, 0.3)};
  border-bottom-color: ${({ theme, color }) =>
    color ? rgba(color, 0.3) : rgba(theme.colors.text, 0.3)};
  border-left-color: ${({ theme, color }) => color || theme.colors.text};
  border-radius: ${({ size }) => (size === 'large' ? 30 : 18)}px;
`
