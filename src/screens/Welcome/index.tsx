import { useNavigation } from '@react-navigation/native'

import * as S from './styles'
import { Heading } from '@components/Heading'

export function Welcome() {
  const { navigate } = useNavigation<any>()

  return (
    <S.Container>
      <Heading title="bem-vindo (a)" />
      <S.Body>
        <S.ButtonSignIn
          title="ja tenho conta"
          onPress={() => navigate('SignInFirstStep')}
          variant="outline"
        />
        <S.ButtonSignUp
          title="criar uma conta"
          onPress={() => navigate('SignUpFirstStep')}
        />
      </S.Body>
    </S.Container>
  )
}
