import styled from 'styled-components/native'

import { rgba } from 'polished'
import { ScrollViewAnimated } from '@components/ScrollViewAnimated'
import { RFValue } from 'react-native-responsive-fontsize'

interface SubtitleProps {
  isFirst?: boolean
}

export const Container = styled(ScrollViewAnimated)`
  flex: 1;
`

export const Subtitle = styled.Text<SubtitleProps>`
  font-family: ${({ theme }) => theme.font_family.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;

  margin: ${({ isFirst }) => (isFirst ? '0' : '30')}px 0 15px;
`

export const Header = styled.View`
  padding: ${({ theme }) => theme.spacing.border}px;
  flex-direction: row;
  align-items: center;
`

export const AvatarContainer = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  padding: 2.5px;

  background-color: ${({ theme }) => theme.colors.text};
`

export const AvatarContainerImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`

export const HeaderProfile = styled.View`
  margin-left: 15px;
`

export const HeaderProfileTitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`

export const HeaderProfileSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
  font-size: ${RFValue(12)}px;
`

export const Body = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.border}px;
`

export const Footer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.border}px;
`

export const ButtonSignOut = styled.Pressable`
  margin-top: 70px;
`

export const ButtonSignOutText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;

  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.text};
`

export const VersionCodeApp = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => rgba(theme.colors.text, 0.8)};
  font-size: ${RFValue(10)}px;

  margin-top: 40px;
`
