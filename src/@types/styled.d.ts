import 'styled-components'
import dark from '../themes/dark'
import { StatusBarStyle } from 'react-native'

declare module 'styled-components' {
  type ThemeType = typeof dark

  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components/native' {
  type ThemeType = typeof dark

  export interface DefaultTheme extends ThemeType {}
}
