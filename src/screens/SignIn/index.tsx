import { ActivityIndicator, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useAuth } from '@hooks/useAuth'

import * as S from './styles'

export function SignIn() {
  const { signIn, isFetchUserLoading } = useAuth()
  const { navigate } = useNavigation<any>()

  function handleSignIn() {
    signIn({ email: 'lucas@lsiqueira.dev', password: 'password' })
  }

  return (
    <S.Container>
      <S.Title>SignIn</S.Title>
      <Button title="Entrar" onPress={handleSignIn} />
      {isFetchUserLoading && <ActivityIndicator />}
      <Button title="Cadastrar" onPress={() => navigate('SignUp')} />
    </S.Container>
  )
}
