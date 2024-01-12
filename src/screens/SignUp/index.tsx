import { useNavigation } from '@react-navigation/native'

import * as S from './styles'

export function SignUp() {
  const { goBack } = useNavigation<any>()

  return (
    <S.Container>
      <S.Body>
        <S.ButtonSignUp title="voltar" onPress={() => goBack()} />
      </S.Body>
    </S.Container>
  )
}
