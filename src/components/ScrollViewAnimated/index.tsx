import { ReactNode, useEffect, useRef, useState } from 'react'

import * as S from './styles'
import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Heading } from '@components/Heading'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

interface ScrollViewProps {
  title: string
  children?: ReactNode
}

export function ScrollViewAnimated({ title, children }: ScrollViewProps) {
  const { font_family } = useTheme()
  const [heightY, setHeightY] = useState(0)
  const navigation = useNavigation()
  const yOffset = useRef(new Animated.Value(0)).current
  const headerTitleOpacity = yOffset.interpolate({
    inputRange: [15, 60],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        opacity: headerTitleOpacity,
        fontSize: RFValue(16),
        fontFamily: font_family.bold,
        fontWeight: 'bold',
      },
      headerShadowVisible: heightY >= 2,
    })
  }, [headerTitleOpacity, navigation])

  return (
    <S.Container
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        {
          useNativeDriver: true,
          listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            setHeightY(event.nativeEvent.contentOffset.y)
          },
        },
      )}
      scrollEventThrottle={16}>
      <Heading title={title} />
      {children}
    </S.Container>
  )
}
