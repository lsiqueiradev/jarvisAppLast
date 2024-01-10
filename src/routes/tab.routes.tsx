import { Feather } from '@helpers/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { Tab2 } from '@screens/Tab2'
import { Tab3 } from '@screens/Tab3'
import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const { font_family } = useTheme()
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: font_family.semi_bold,
        },
        tabBarItemStyle: {
          height: 50,
          marginTop: Platform.OS === 'ios' ? 10 : 12,
        },
        headerTitleStyle: {
          opacity: 0,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Tab2"
        component={Tab2}
        options={{
          title: 'Tab 2',
          tabBarIcon: ({ color, size }) => (
            <Feather name="circle" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Tab3"
        component={Tab3}
        options={{
          title: 'Tab 3',
          tabBarIcon: ({ color, size }) => (
            <Feather name="circle" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
