import { createContext, ReactNode, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { dark, light } from '../themes'
import { ThemeProvider } from 'styled-components'
import { StatusBar, StatusBarStyle, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const ASYNC_STORAGE_KEY_THEME = '@jarvisApp:theme'
const ASYNC_STORAGE_KEY_MODE_SCHEME = '@jarvisApp:modeScheme'

type ThemeProps = 'light' | 'dark' | null
type ModeSchemeProps = 'system' | 'dark' | 'light'

export interface ThemeContextDataProps {
  theme: ThemeProps
  mode: ModeSchemeProps
  setTheme: (themes: ThemeProps) => void
  setMode: (themes: ModeSchemeProps) => void
  isThemeLoading: boolean
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextDataProps)

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const schemeColor = useColorScheme()
  const [data, setData] = useState<ThemeProps>(null)
  const [mode, setMode] = useState<ModeSchemeProps>('system')
  const [isThemeLoading, setIsThemeLoading] = useState(false)
  const [colorStatusBar, setColorStatusBar] = useState('')
  const [tintStatusBar, setTintStatusBar] = useState<StatusBarStyle>(
    schemeColor === 'dark' ? 'light-content' : 'dark-content',
  )

  const themeDevice = schemeColor === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    async function loadStorageTheme(): Promise<void> {
      setIsThemeLoading(true)
      const [theme, modeScheme] = await AsyncStorage.multiGet([
        ASYNC_STORAGE_KEY_THEME,
        ASYNC_STORAGE_KEY_MODE_SCHEME,
      ])

      if (theme[1] && modeScheme[1]) {
        setData(theme[1] as ThemeProps)
        setMode(modeScheme[1] as ModeSchemeProps)
      }

      setIsThemeLoading(false)
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

  async function toggleTheme(selectedTheme: ThemeProps) {
    if (selectedTheme) {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY_THEME, selectedTheme)
      setData(selectedTheme)
    }
  }

  useEffect(() => {
    if (mode === 'system') {
      setColorStatusBar(
        schemeColor === 'dark'
          ? dark.colors.background
          : light.colors.background,
      )
      setTintStatusBar(
        schemeColor === 'dark' ? 'light-content' : 'dark-content',
      )
    } else {
      setColorStatusBar(
        data === 'dark' ? dark.colors.background : light.colors.background,
      )
      setTintStatusBar(data === 'dark' ? 'light-content' : 'dark-content')
    }
  }, [data, schemeColor])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: data,
        setTheme: toggleTheme,
        setMode: toggleMode,
        isThemeLoading,
      }}>
      <ThemeProvider theme={data === 'dark' ? dark : light}>
        <NavigationContainer
          theme={data === 'dark' ? dark.navigation : light.navigation}>
          <StatusBar
            backgroundColor={colorStatusBar}
            barStyle={tintStatusBar}
          />
          {children}
        </NavigationContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
