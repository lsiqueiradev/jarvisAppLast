import { useAuth } from '@hooks/useAuth'
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

interface RouteParamsProps {
  email: string
}

type FormDataProps = {
  password: string
}

const signInSecondStepSchema = yup.object().shape({
  password: yup
    .string()
    .required('por favor digite sua senha para continuar')
    .min(8, 'a senha é muito curta')
    .matches(/[A-Z]/, 'sua senha precisa ter no mínimo 1 letra maiúscula.')
    .matches(/[0-9]/, 'sua senha precisa ter no mínimo 1 número.'),
})

export function SignInSecondStep() {
  const route = useRoute()
  const heightHeader = useHeaderHeight()
  const { signIn, isFetchUserLoading } = useAuth()

  const { email } = route.params as RouteParamsProps

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSecondStepSchema),
    defaultValues: {
      password: 'Password10',
    },
  })

  function handleSignIn({ password }: FormDataProps) {
    signIn({ email, password })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={heightHeader}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <Heading title="Senha" />
          <S.Description>Digite sua senha para continuar.</S.Description>
          <S.Body>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <S.InputText
                  title="senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                  autoFocus
                />
              )}
            />
          </S.Body>
          <S.Footer>
            <S.ButtonSignIn
              title="continuar"
              onPress={handleSubmit(handleSignIn)}
              isDisabled={isFetchUserLoading}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
