import { useState } from 'react'

import { Heading } from '@components/Heading'
import { ListContainer, ListItemSwitch, ListItemIcon } from '@components/Lists'

import * as S from './styles'

export function Security() {
  const [isBiometricAccess, setIsBiometricAccess] = useState(false)

  return (
    <S.Container>
      <Heading title="login e segurança" />
      <S.Header>
        <S.Title>selecione com o app será exibido neste dispositivo.</S.Title>
      </S.Header>
      <S.Body>
        <ListContainer>
          <ListItemIcon
            title="senha"
            description="última atualização a 1 ano"
          />
          <ListItemSwitch
            iconLeft="lock"
            title="acesso com biometria"
            description="habilite seu acesso ao aplicativo por biometria"
            isLast
            isActive={isBiometricAccess}
            setIsActive={setIsBiometricAccess}
          />
        </ListContainer>
      </S.Body>
      <S.Footer>
        <S.Description>
          se você selecionar as configurações do dispositivo, este aplicativo
          usará o modo que já foi selecionado nas configurações do dispositivo.
        </S.Description>
      </S.Footer>
    </S.Container>
  )
}
