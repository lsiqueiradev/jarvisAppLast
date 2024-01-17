import { PressableProps } from 'react-native'

import * as S from './styles'

interface ListItemIconProps extends PressableProps {
  title: string
  description?: string | null
  iconLeft?: string | null
  iconRight?: string
  isLast?: boolean
}

export function ListItemIcon({
  title,
  description = null,
  iconLeft = null,
  iconRight = 'chevron-forward',
  isLast = false,
  ...rest
}: ListItemIconProps) {
  return (
    <S.Container {...rest} isLast={isLast}>
      <S.ListItemContainer>
        {iconLeft && <S.IconLeft name={iconLeft} />}
        <S.ListItemContainerInfos>
          <S.ListItemContainerInfosTitle>{title}</S.ListItemContainerInfosTitle>
          {description && (
            <S.ListItemContainerInfoSubtitle>
              {description}
            </S.ListItemContainerInfoSubtitle>
          )}
        </S.ListItemContainerInfos>
      </S.ListItemContainer>
      <S.IconRight name={iconRight} />
    </S.Container>
  )
}
