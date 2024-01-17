import { Heading } from '@components/Heading'

import * as S from './styles'
import { ListContainer, ListItemIcon } from '@components/Lists'
import { useTheme } from '@hooks/useTheme'

export function Appearence() {
  const { mode, setMode } = useTheme()

  function handleChangeTheme(theme: 'light' | 'dark' | 'system') {
    setMode(theme)
  }

  return (
    <S.Container>
      <Heading title="aparência" />
      <S.Header>
        <S.Title>selecione com o app será exibido neste dispositivo.</S.Title>
      </S.Header>
      <S.Body>
        <ListContainer>
          <ListItemIcon
            title="modo claro"
            iconLeft="sun"
            iconRight={`radio-button-${mode === 'light' ? 'on' : 'off'}`}
            onPress={() => handleChangeTheme('light')}
          />
          <ListItemIcon
            title="modo escuro"
            iconLeft="moon"
            iconRight={`radio-button-${mode === 'dark' ? 'on' : 'off'}`}
            onPress={() => handleChangeTheme('dark')}
          />
          <ListItemIcon
            title="configurações do celular"
            iconLeft="smartphone"
            iconRight={`radio-button-${mode === 'system' ? 'on' : 'off'}`}
            isLast
            onPress={() => handleChangeTheme('system')}
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
