import { Feather } from '@helpers/icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { Tab2 } from '@screens/Tab2'
import { Tab3 } from '@screens/Tab3'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const { colors, font_family } = useTheme()
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: font_family.bold,
        },
        tabBarItemStyle: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 8 : 8,
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        headerTitleStyle: {
          opacity: 0,
        },
        headerShadowVisible: false,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'início',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Tab2"
        component={Tab2}
        options={{
          title: 'tab 2',
          tabBarIcon: ({ color, size }) => (
            <Feather name="circle" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Tab3"
        component={Tab3}
        options={{
          title: 'tab 3',
          tabBarIcon: ({ color, size }) => (
            <Feather name="circle" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'perfil',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
