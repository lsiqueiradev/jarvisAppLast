import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FadeInRight } from 'react-native-reanimated'

import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { ViewFadeIn } from '@components/Views'

import { TabRoutes } from './tab.routes'
import { Appearence } from '@screens/Profile/Appearance'
import { Notification } from '@screens/Profile/Notification'
import { EditProfile } from '@screens/Profile/EditProfile'
import { Security } from '@screens/Profile/Security'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const { colors, font_family } = useTheme()

  return (
    <ViewFadeIn entering={FadeInRight}>
      <Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: RFValue(16),
            fontFamily: font_family.bold,
          },
          headerTintColor: colors.text,

          headerShadowVisible: false,
          headerBackTitle: 'voltar',
          headerBackTitleStyle: {
            fontSize: RFValue(14),
            fontFamily: font_family.regular,
          },
        }}>
        <Screen
          name="Tabs"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Screen
          name="Appearance"
          component={Appearence}
          options={{ title: '' }}
        />
        <Screen
          name="Notification"
          component={Notification}
          options={{ title: '' }}
        />
        <Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: '' }}
        />
        <Screen name="Security" component={Security} options={{ title: '' }} />
      </Navigator>
    </ViewFadeIn>
  )
}
