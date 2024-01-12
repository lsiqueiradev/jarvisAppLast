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
      <S.Body>
        <S.ButtonSignIn
          title="entrar"
          onPress={handleSignIn}
          isDisabled={isFetchUserLoading}
        />
        <S.ButtonSignUp
          title="cadastrar"
          onPress={() => navigate('SignUp')}
          variant="outline"
        />
      </S.Body>
    </S.Container>
  )
}
