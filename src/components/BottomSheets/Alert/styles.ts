import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface BottomSheetContainerProps {
  insetBottom?: number
}

export const BottomSheetContainer = styled.View<BottomSheetContainerProps>`
  padding: ${({ insetBottom = 0 }) => `30px 30px ${insetBottom + 30}px 30px`};
`
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
