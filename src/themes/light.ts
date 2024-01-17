import defaultTheme from './default'

export default {
  ...defaultTheme,
  status_bar: {
    background: '#ffffff',
    style: 'dark-content',
  },
  colors: {
    dark: false,
    background: '#ffffff',
    card: '#f2f2f2',
    text: '#1c1c1e',
    border: '#d8d8d8',
    button_background: '#121212',
    button_text: '#f2f2f2',
    button_text_outline: '#121212',
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
