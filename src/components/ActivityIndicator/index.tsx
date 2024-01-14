import React from 'react'

import { Animated, Easing } from 'react-native'

import { Container } from './styles'

interface ActivityIndicatorProps {
  size?: 'small' | 'large'
  color?: string | null
}

export function ActivityIndicator({
  size = 'small',
  color = null,
}: ActivityIndicatorProps) {
  const spinValue = new Animated.Value(0)

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start()

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <Container
      style={{ transform: [{ rotate: spin }] }}
      size={size}
      color={color}
    />
  )
}
