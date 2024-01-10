import { ReactNode } from 'react'

import { AuthContextProvider } from '@contexts/AuthContext'
import { ThemeContextProvider } from '@contexts/ThemeContext'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthContextProvider>
  )
}

export { AppProvider }
