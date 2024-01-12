import { useRef } from 'react'

import { useAuth } from '@hooks/useAuth'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { BottomSheetAlert } from '@components/BottomSheets/Alert'

import * as S from './styles'
import { Button } from '@components/Button'

export function Profile() {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  const handlePresentModalPress = () => bottomSheetRef.current?.present()

  return (
    <S.Container title="perfil">
      <S.Body>
        <Button title="Sair" onPress={handlePresentModalPress} />
      </S.Body>
      <BottomSheetAlert
        ref={bottomSheetRef}
        title="Tem certeza que deseja sair?"
        buttons={[
          { text: 'cancelar', style: 'cancel' },
          {
            text: 'sair do app',
            onPress: () => handleSignOut(),
          },
        ]}
      />
    </S.Container>
  )
}
