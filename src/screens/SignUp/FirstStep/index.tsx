import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native'

import { Heading } from '@components/Heading'

import * as S from './styles'

type FormDataProps = {
  name: string
}

const signUpFirstStepSchema = yup.object({
  name: yup
    .string()
    .required('por favor digite seu nome para continuar')
    .min(8, 'o nome é muito curto'),
})

export function SignUpFirstStep() {
  const { navigate } = useNavigation<any>()
  const heightHeader = useHeaderHeight()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpFirstStepSchema),
    defaultValues: {
      name: 'Lucas Siqueira',
    },
  })

  function handleToSignUpSecondStep({ name }: FormDataProps) {
    navigate('SignUpSecondStep', { name })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? heightHeader : heightHeader + 25
      }
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <Heading title="nome" />
          <S.Description>
            vamos começar! Vai ser bem rápido, tá? Para iniciar a sua
            experiência no app, precisamos do seu nome.
          </S.Description>
          <S.Body>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <S.InputText
                  title="nome"
                  placeholder="john doe"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  error={errors.name?.message}
                  autoFocus
                />
              )}
            />
          </S.Body>
          <S.Footer>
            <S.ButtonNext
              title="continuar"
              onPress={handleSubmit(handleToSignUpSecondStep)}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
