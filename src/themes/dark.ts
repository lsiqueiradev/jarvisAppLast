import defaultTheme from './default'

export default {
  ...defaultTheme,
  colors: {
    background: '#010101',
    card: '#121212',
    text: '#e5e5e7',
    border: '#272729',
    ...defaultTheme.colors,
  },
  navigation: {
    dark: true,
    colors: {
      primary: defaultTheme.colors.primary,
      background: '#121212',
      card: '#121212',
      text: '#e5e5e7',
      border: '#272729',
      notification: defaultTheme.colors.primary,
    },
  },
}
