import defaultTheme from './default'

export default {
  ...defaultTheme,
  colors: {
    background: '#ffffff',
    card: '#f2f2f2',
    text: '#1c1c1e',
    border: '#d8d8d8',
    ...defaultTheme.colors,
  },
  navigation: {
    dark: false,
    colors: {
      primary: defaultTheme.colors.primary,
      background: '#ffffff',
      card: '#ffffff',
      text: '#1c1c1e',
      border: '#d8d8d8',
      notification: defaultTheme.colors.primary,
    },
  },
}
