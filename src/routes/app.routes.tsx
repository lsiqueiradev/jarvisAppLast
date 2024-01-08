import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'
import { Profile } from '@screens/Profile'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="Tabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          presentation: 'modal',
        }}
      />
    </Navigator>
  )
}
