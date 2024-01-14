import { useHeaderHeight } from '@react-navigation/elements'
import { useNavigation, useRoute } from '@react-navigation/native'

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
  name: string
}

type FormDataProps = {
  email: string
}

const signUpSecondStepSchema = yup.object({
  email: yup
    .string()
    .email('por favor digite um email válido')
    .required('por favor digite seu email para continuar'),
})

export function SignUpSecondStep() {
  const route = useRoute()
  const { navigate } = useNavigation<any>()
  const heightHeader = useHeaderHeight()

  const { name } = route.params as RouteParamsProps

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSecondStepSchema),
    defaultValues: {
      email: 'lucas@lsiqueira.dev',
    },
  })

  function handleToSignUpSecondStep({ email }: FormDataProps) {
    navigate('SignUpFinalStep', { name, email })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={heightHeader}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <Heading title="email" />
          <S.Description>agora precisamos do seu melhor email?</S.Description>
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
