import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View``

export const Header = styled.View`
  padding: ${({ theme }) => theme.spacing.border}px;
`

export const Body = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.border}px;
`

export const Footer = styled.View`
  padding: ${({ theme }) => theme.spacing.border}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;

  line-height: ${RFValue(18)}px;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(11)}px;

  line-height: ${RFValue(15)}px;
`
