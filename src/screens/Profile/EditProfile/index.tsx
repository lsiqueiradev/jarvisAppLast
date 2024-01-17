import { Heading } from '@components/Heading'
import { ListContainer, ListItemIcon } from '@components/Lists'

import * as S from './styles'
import { useAuth } from '@hooks/useAuth'

export function EditProfile() {
  const { user } = useAuth()

  return (
    <S.Container>
      <Heading title="editar informações" />
      <S.Header>
        <S.Title>selecione com o app será exibido neste dispositivo.</S.Title>
      </S.Header>
      <S.Body>
        <ListContainer>
          <ListItemIcon title="nome" description={user.name} />
          <ListItemIcon title="email" description={user.email} isLast />
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
