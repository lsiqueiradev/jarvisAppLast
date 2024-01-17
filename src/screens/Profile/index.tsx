import { useRef } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { BottomSheetAlert } from '@components/BottomSheets/Alert'
import { ListContainer, ListItemIcon } from '@components/Lists'

import * as S from './styles'

export function Profile() {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const { navigate } = useNavigation<any>()
  const { user, signOut, isFetchUserLoading } = useAuth()

  function handleSignOut() {
    signOut()
  }

  function handlePresentModalPress() {
    bottomSheetRef.current?.present()
  }

  return (
    <S.Container title="perfil">
      <S.Header>
        <S.AvatarContainer>
          <S.AvatarContainerImage
            source={{
              uri:
                user.avatar_url ??
                `https://ui-avatars.com/api/?name=${user.name}&background=random`,
            }}
          />
        </S.AvatarContainer>
        <S.HeaderProfile>
          <S.HeaderProfileTitle>{user.name}</S.HeaderProfileTitle>
          <S.HeaderProfileSubtitle>{user.email}</S.HeaderProfileSubtitle>
        </S.HeaderProfile>
      </S.Header>
      <S.Body>
        <S.Subtitle isFirst>configurações</S.Subtitle>
        <ListContainer>
          <ListItemIcon
            title="informações pessoais"
            // description="consulte e atualize dados pessoais, como nome e email"
            iconLeft="user"
            onPress={() => navigate('EditProfile')}
          />
          <ListItemIcon
            title="aparência"
            // description="altere o tema do app"
            iconLeft="moon"
            onPress={() => navigate('Appearance')}
          />
          <ListItemIcon
            title="notificações"
            // description="altera as notificações do app"
            iconLeft="bell"
            onPress={() => navigate('Notification')}
          />
          <ListItemIcon
            title="login e segurança"
            // description="senha, biometria e permissões"
            iconLeft="shield"
            onPress={() => navigate('Security')}
            isLast
          />
        </ListContainer>
        <S.Subtitle>atendimento</S.Subtitle>
        <ListContainer>
          <ListItemIcon
            title="acesse a central de ajuda"
            iconLeft="help-circle"
          />
          <ListItemIcon
            title="reportar um problema no app"
            iconLeft="headphones"
          />
          <ListItemIcon
            title="envie-nos um feedback"
            iconLeft="edit-2"
            isLast
          />
        </ListContainer>
      </S.Body>
      <S.Footer>
        <S.ButtonSignOut onPress={handlePresentModalPress}>
          <S.ButtonSignOutText>sair da conta</S.ButtonSignOutText>
        </S.ButtonSignOut>
        <S.VersionCodeApp>versão 1.0.0 (0000)</S.VersionCodeApp>
      </S.Footer>
      <BottomSheetAlert
        ref={bottomSheetRef}
        title="Tem certeza que deseja sair?"
        buttons={[
          { text: 'cancelar', style: 'cancel' },
          {
            isLoading: isFetchUserLoading,
            text: 'sair do app',
            onPress: () => handleSignOut(),
          },
        ]}
      />
    </S.Container>
  )
}
