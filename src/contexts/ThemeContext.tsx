import { createContext, ReactNode, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { dark, light } from '../themes'
import { ThemeProvider } from 'styled-components'
import { Platform, StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const ASYNC_STORAGE_KEY_THEME = '@jarvisApp:theme'
const ASYNC_STORAGE_KEY_MODE_SCHEME = '@jarvisApp:modeScheme'

type ThemeProps = 'light' | 'dark'
type ModeSchemeProps = 'system' | 'dark' | 'light'

export interface ThemeContextDataProps {
  theme: ThemeProps
  mode: ModeSchemeProps
  setTheme: (themes: ThemeProps) => void
  setMode: (themes: ModeSchemeProps) => void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextDataProps)

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const schemaColor = useColorScheme()
  const [data, setData] = useState<ThemeProps>('light')
  const [mode, setMode] = useState<ModeSchemeProps>('system')

  const themeDevice = schemaColor === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    async function loadStorageTheme(): Promise<void> {
      const [theme, modeScheme] = await AsyncStorage.multiGet([
        ASYNC_STORAGE_KEY_THEME,
        ASYNC_STORAGE_KEY_MODE_SCHEME,
      ])

      if (theme[1] && modeScheme[1]) {
        setData(theme[1] as ThemeProps)
        setMode(modeScheme[1] as ModeSchemeProps)
      }
    }

    loadStorageTheme()
  }, [])

  async function toggleMode(selectedMode: ModeSchemeProps) {
    if (selectedMode !== 'system') {
      await AsyncStorage.multiSet([
        [ASYNC_STORAGE_KEY_THEME, selectedMode],
        [ASYNC_STORAGE_KEY_MODE_SCHEME, selectedMode],
      ])
      setData(selectedMode)
      setMode(selectedMode)
    } else {
      await AsyncStorage.multiSet([
        [ASYNC_STORAGE_KEY_THEME, themeDevice],
        [ASYNC_STORAGE_KEY_MODE_SCHEME, selectedMode],
      ])
      setData(themeDevice)
      setMode('system')
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(
        data === 'dark' ? dark.colors.background : light.colors.background,
      )
    }
    StatusBar.setBarStyle(data === 'dark' ? 'light-content' : 'dark-content')
  }, [data])

  async function toggleTheme(selectedTheme: ThemeProps) {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY_THEME, selectedTheme)
    setData(selectedTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ mode, theme: data, setTheme: toggleTheme, setMode: toggleMode }}>
      <ThemeProvider theme={data === 'dark' ? dark : light}>
        <NavigationContainer
          theme={data === 'dark' ? dark.navigation : light.navigation}>
          {children}
        </NavigationContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
