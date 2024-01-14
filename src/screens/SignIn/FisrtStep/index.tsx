import { useState } from 'react'

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
  email: string
}

const signInFirstStepSchema = yup.object({
  email: yup
    .string()
    .email('por favor digite um email válido')
    .required('por favor digite seu email para continuar'),
})

export function SignInFirstStep() {
  const [isLoading, setIsLoading] = useState(false)

  const { navigate } = useNavigation<any>()
  const heightHeader = useHeaderHeight()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInFirstStepSchema),
    defaultValues: {
      email: 'lucas@lsiqueira.dev',
    },
  })

  function handleToSignInSecondStep({ email }: FormDataProps) {
    setIsLoading(true)
    setTimeout(() => {
      navigate('SignInSecondStep', { email })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={heightHeader}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <Heading title="Entrar" />
          <S.Description>Qual é o seu melhor email?</S.Description>
          <S.Body>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <S.InputText
                  title="email"
                  placeholder="johndoe@email.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  error={errors.email?.message}
                  autoFocus
                />
              )}
            />
          </S.Body>
          <S.Footer>
            <S.ButtonSignIn
              title="continuar"
              isDisabled={isLoading}
              onPress={handleSubmit(handleToSignInSecondStep)}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
