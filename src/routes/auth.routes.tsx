import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Platform } from 'react-native'

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}
