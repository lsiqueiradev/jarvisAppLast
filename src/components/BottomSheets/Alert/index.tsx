import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet'

import { GestureResponderEvent } from 'react-native'

import { forwardRef } from 'react'

import * as S from './styles'
import { useTheme } from 'styled-components'
import { Button } from '@components/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type Ref = BottomSheetModal

type AlertButtonStyle = 'default' | 'cancel' | 'destructive'

interface BottomSheetAlertProps {
  title: string
  description?: string
  buttons: Array<{
    isLoading?: boolean
    text?: string
    onPress?: ((event?: GestureResponderEvent) => void) | undefined
    isPreferred?: boolean
    style?: AlertButtonStyle
  }>
}

const BottomSheetAlert = forwardRef<Ref, BottomSheetAlertProps>(
  (props, ref) => {
    const { colors } = useTheme()
    const { title, buttons, description } = props
    const { dismiss } = useBottomSheetModal()
    const insets = useSafeAreaInsets()

    return (
      <BottomSheetModal
        ref={ref}
        enableDynamicSizing
        enablePanDownToClose={false}
        enableOverDrag={false}
        handleComponent={null}
        backdropComponent={(backDropProps) => (
          <BottomSheetBackdrop
            {...backDropProps}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        enableHandlePanningGesture={false}
        backgroundStyle={{
          borderRadius: 0,
          backgroundColor: colors.background,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.text,
        }}>
        <BottomSheetView>
          <S.BottomSheetContainer insetBottom={insets.bottom}>
            <S.BottomSheetContainerButtonClose onPress={() => dismiss()}>
              <S.BottomSheetContainerButtonCloseIcon name="x" />
            </S.BottomSheetContainerButtonClose>
            <S.BottomSheetContainerTitle>{title}</S.BottomSheetContainerTitle>
            {description && (
              <S.BottomSheetContainerDescription>
                {description}
              </S.BottomSheetContainerDescription>
            )}
            {buttons.map((btn, index) => (
              <Button
                key={btn.text}
                title={btn.text}
                isDisabled={btn.isLoading}
                onPress={btn.style === 'cancel' ? () => dismiss() : btn.onPress}
                style={{
                  marginTop: index === 1 ? 20 : 30,
                }}
                variant={btn.style === 'cancel' ? 'outline' : 'primary'}
              />
            ))}
          </S.BottomSheetContainer>
        </BottomSheetView>
      </BottomSheetModal>
    )
  },
)

BottomSheetAlert.displayName = 'BottomSheetAlert'

export { BottomSheetAlert }
