import { Button } from 'react-native'

import { useAuth } from '@hooks/useAuth'

import * as S from './styles'

export function Profile() {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  return (
    <S.Container title="Perfil">
      <Button title="Sair" onPress={handleSignOut} />
    </S.Container>
  )
}
