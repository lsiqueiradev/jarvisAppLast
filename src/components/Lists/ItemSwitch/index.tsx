import { PressableProps } from 'react-native'

import * as S from './styles'

interface ListItemSwitchProps extends PressableProps {
  title: string
  description?: string | null
  iconLeft?: string | null
  isLast?: boolean
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export function ListItemSwitch({
  title,
  description = null,
  iconLeft = null,
  isLast = false,
  isActive,
  setIsActive,
  ...rest
}: ListItemSwitchProps) {
  function toggleSwitch() {
    setIsActive(!isActive)
  }

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
      <S.Switch onValueChange={toggleSwitch} value={isActive} />
    </S.Container>
  )
}
