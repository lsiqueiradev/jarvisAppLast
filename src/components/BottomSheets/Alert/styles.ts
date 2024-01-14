import styled from 'styled-components/native'

import { Feather } from '@helpers/icons'
import { Pressable, PressableProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface BottomSheetContainerProps {
  insetBottom?: number
}

export const BottomSheetContainer = styled.View<BottomSheetContainerProps>`
  padding: ${({ insetBottom = 0 }) => `20px 20px ${insetBottom + 30}px 20px`};
  position: relative;
`

export const BottomSheetContainerButtonClose = styled(
  Pressable,
)<PressableProps>`
  position: absolute;
  top: 15px;
  right: 10px;
`

export const BottomSheetContainerButtonCloseIcon = styled(Feather).attrs(
  ({ theme }) => ({
    color: theme.colors.text,
    size: 30,
  }),
)``

export const BottomSheetContainerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font_family.medium};
  font-size: ${RFValue(16)}px;
`

export const BottomSheetContainerDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${RFValue(14)}px;
  margin-top: 8px;
`
