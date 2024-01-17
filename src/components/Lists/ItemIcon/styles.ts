import styled from 'styled-components/native'

import { Pressable, PressableProps } from 'react-native'
import { Feather, Ionicons } from '@helpers/icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { rgba } from 'polished'

interface ListItemProps extends PressableProps {
  isLast?: boolean
}

export const Container = styled(Pressable)<ListItemProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.background};

  padding: 15px;
`

export const ListItemContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  flex: 1;
`

export const ListItemContainerInfos = styled.View`
  flex: 1;
`

export const ListItemContainerInfosTitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  margin-top: -1px;
`

export const ListItemContainerInfoSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
  font-size: ${RFValue(11)}px;
  margin-top: 3px;
`

export const IconLeft = styled(Feather).attrs(({ theme }) => ({
  color: theme.colors.text,
  size: 20,
}))`
  margin-right: 10px;
`

export const IconRight = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.colors.text,
  size: 26,
}))`
  margin-right: ${({ name }) => (name === 'chevron-forward' ? -6 : 0)}px;
`
