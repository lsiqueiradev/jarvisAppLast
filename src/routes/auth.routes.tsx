import { createStackNavigator } from '@react-navigation/stack'

import { Platform } from 'react-native'

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  const { colors, font_family } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: RFValue(16),
          fontFamily: font_family.semi_bold,
          marginTop: Platform.OS === 'android' ? 6 : 0,
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.text,
      }}>
      <Screen name="SignIn" component={SignIn} options={{ title: 'entrar' }} />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'cadastrar' }}
      />
    </Navigator>
  )
}
