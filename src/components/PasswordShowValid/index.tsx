import { useEffect, useState } from 'react'

import * as S from './styles'

interface PasswordShowValidProps {
  value: string
}

export function PasswordShowValid({ value }: PasswordShowValidProps) {
  const [passwordLenghtValid, setPasswordLenghtValid] = useState(false)
  const [passwordNumberValid, setPasswordNumberValid] = useState(false)
  const [passwordUppercaseValid, setPasswordUppercaseValid] = useState(false)

  useEffect(() => {
    setPasswordLenghtValid(value.length >= 8)
    setPasswordUppercaseValid((value.match(/[A-Z]/g) || []).length >= 1)
    setPasswordNumberValid((value.match(/[0-9]/g) || []).length >= 1)
  }, [value])

  return (
    <S.PasswordIndicatorContainer>
      <S.PasswordIndicatorContainerTitle>
        sua senha precisa ter no mínimo:
      </S.PasswordIndicatorContainerTitle>
      <S.PasswordIndicatorContainerItem>
        <S.PasswordIndicatorContainerItemIcon
          valid={passwordLenghtValid}
          name={passwordLenghtValid ? 'check-square' : 'x-square'}
        />
        <S.PasswordIndicatorContainerItemText valid={passwordLenghtValid}>
          8 caracteres
        </S.PasswordIndicatorContainerItemText>
      </S.PasswordIndicatorContainerItem>
      <S.PasswordIndicatorContainerItem>
        <S.PasswordIndicatorContainerItemIcon
          valid={passwordNumberValid}
          name={passwordNumberValid ? 'check-square' : 'x-square'}
        />
        <S.PasswordIndicatorContainerItemText valid={passwordNumberValid}>
          1 número
        </S.PasswordIndicatorContainerItemText>
      </S.PasswordIndicatorContainerItem>
      <S.PasswordIndicatorContainerItem>
        <S.PasswordIndicatorContainerItemIcon
          valid={passwordUppercaseValid}
          name={passwordUppercaseValid ? 'check-square' : 'x-square'}
        />
        <S.PasswordIndicatorContainerItemText valid={passwordUppercaseValid}>
          1 letra maiúscula
        </S.PasswordIndicatorContainerItemText>
      </S.PasswordIndicatorContainerItem>
    </S.PasswordIndicatorContainer>
  )
}
