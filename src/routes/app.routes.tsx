import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Platform } from 'react-native'
import { FadeIn } from 'react-native-reanimated'

import { TabRoutes } from './tab.routes'
import { ViewFadeIn } from '@components/Views'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <ViewFadeIn entering={FadeIn}>
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
