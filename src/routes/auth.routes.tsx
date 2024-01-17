import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Welcome } from '@screens/Welcome'
import { SignInFirstStep } from '@screens/SignIn/FisrtStep'
import { SignInSecondStep } from '@screens/SignIn/SecondStep'
import { SignUpFirstStep } from '@screens/SignUp/FirstStep'
import { SignUpSecondStep } from '@screens/SignUp/SecondStep'
import { SignUpFinalStep } from '@screens/SignUp/FinalStep'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  const { colors, font_family } = useTheme()
  return (
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
      }}
      initialRouteName="Welcome">
      <Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: '',
        }}
      />
      <Screen
        name="SignInFirstStep"
        component={SignInFirstStep}
        options={{ title: '' }}
      />
      <Screen
        name="SignInSecondStep"
        component={SignInSecondStep}
        options={{ title: '' }}
      />
      <Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
        options={{ title: '' }}
      />
      <Screen
        name="SignUpSecondStep"
        component={SignUpSecondStep}
        options={{ title: '' }}
      />
      <Screen
        name="SignUpFinalStep"
        component={SignUpFinalStep}
        options={{ title: '' }}
      />
    </Navigator>
  )
}
