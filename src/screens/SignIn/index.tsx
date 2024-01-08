import { Button } from 'react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const { navigate } = useNavigation<any>()
  return (
    <S.Container>
      <S.Title>SignIn</S.Title>
      <Button title="Cadastrar" onPress={() => navigate('SignUp')} />
    </S.Container>
  )
}
