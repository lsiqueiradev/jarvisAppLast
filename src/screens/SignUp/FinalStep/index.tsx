import { useHeaderHeight } from '@react-navigation/elements'
import { useRoute } from '@react-navigation/native'

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
import { useAuth } from '@hooks/useAuth'
import { PasswordShowValid } from '@components/PasswordShowValid'
import { useState } from 'react'

interface RouteParamsProps {
  name: string
  email: string
}

type FormDataProps = {
  password: string
}

const signUpFinalStepSchema = yup.object({
  password: yup
    .string()
    .required('por favor digite sua senha para continuar')
    .min(8, 'a senha é muito curta')
    .matches(/[A-Z]/, 'sua senha precisa ter no mínimo 1 letra maiúscula.')
    .matches(/[0-9]/, 'sua senha precisa ter no mínimo 1 número.'),
})

export function SignUpFinalStep() {
  const [passwordValue, setPasswordValue] = useState('')

  const route = useRoute()
  const heightHeader = useHeaderHeight()
  const { signIn, isFetchUserLoading } = useAuth()

  const { email } = route.params as RouteParamsProps

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpFinalStepSchema),
    defaultValues: {
      password: 'Password10',
    },
  })

  function handleSignUp({ password }: FormDataProps) {
    signIn({ email, password })
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
          <Heading title="senha" />
          <S.Description>
            hora de criar a senha do seu app, se liga nas dicas para criar uma
            senha bem forte e melhorar ainda mais a sua segurança.?
          </S.Description>
          <S.Body>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <S.InputText
                  title="senha"
                  secureTextEntry
                  onChangeText={onChange}
                  onChange={(e) => setPasswordValue(e.nativeEvent.text)}
                  value={value}
                  error={errors.password?.message}
                  autoFocus
                />
              )}
            />
          </S.Body>
          <PasswordShowValid value={passwordValue} />
          <S.Footer>
            <S.ButtonNext
              title="continuar"
              isDisabled={isFetchUserLoading}
              onPress={handleSubmit(handleSignUp)}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
