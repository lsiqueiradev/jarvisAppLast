import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Platform } from 'react-native'
import { FadeInRight } from 'react-native-reanimated'

import { ViewFadeIn } from '@components/Views'

import { TabRoutes } from './tab.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <ViewFadeIn entering={FadeInRight}>
      <Navigator
        screenOptions={{
          animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        }}>
        <Screen
          name="Tabs"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </Navigator>
    </ViewFadeIn>
  )
}
