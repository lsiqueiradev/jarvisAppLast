import defaultTheme from './default'

export default {
  ...defaultTheme,
  status_bar: {
    background: '#121212',
    style: 'light-content',
  },
  colors: {
    dark: true,
    background: '#010101',
    card: '#121212',
    text: '#e5e5e7',
    border: '#272729',
    button_background: '#f2f2f2',
    button_text: '#121212',
    button_text_outline: '#f2f2f2',
    ...defaultTheme.colors,
  },
  navigation: {
    dark: true,
    colors: {
      primary: defaultTheme.colors.primary,
      background: '#010101',
      card: '#010101',
      text: '#e5e5e7',
      border: '#272729',
      notification: defaultTheme.colors.primary,
    },
  },
}
