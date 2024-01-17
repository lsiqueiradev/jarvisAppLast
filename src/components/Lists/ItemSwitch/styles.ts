import styled from 'styled-components/native'

import { Platform, Pressable, PressableProps } from 'react-native'
import { Feather } from '@helpers/icons'
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

  margin-top: -2px;
`

export const ListItemContainerInfoSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
  font-size: ${RFValue(11)}px;
  margin-top: 5px;
`

export const Switch = styled.Switch.attrs(({ theme }) => ({
  trackColor: {
    true: rgba(theme.colors.text, 0.7),
  },
  thumbColor: Platform.OS === 'ios' ? '#f4f3f4' : theme.colors.text,
}))`
  margin-left: 15px;
`

export const IconLeft = styled(Feather).attrs(({ theme }) => ({
  color: theme.colors.text,
  size: 20,
}))`
  margin-right: 10px;
`
