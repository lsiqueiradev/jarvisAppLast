import { useState } from 'react'

import { Heading } from '@components/Heading'
import { ListContainer, ListItemSwitch } from '@components/Lists'

import * as S from './styles'

export function Notification() {
  const [isNotification, setIsNotification] = useState(false)

  return (
    <S.Container>
      <Heading title="notificação" />
      <S.Header>
        <S.Title>selecione com o app será exibido neste dispositivo.</S.Title>
      </S.Header>
      <S.Body>
        <ListContainer>
          <ListItemSwitch
            title="notificacões"
            description="usamos a localização para melhorar a sua experiência no aplicativo"
            iconLeft="shield"
            isLast
            isActive={isNotification}
            setIsActive={setIsNotification}
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
