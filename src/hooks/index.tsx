import { ReactNode } from 'react'

import { ThemeContextProvider } from '@contexts/ThemeContext'
import { AuthContextProvider } from '@contexts/AuthContext'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { ViewRoot, ViewSafeAreaProvider } from '@components/Views'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <ViewSafeAreaProvider>
          <ViewRoot>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </ViewRoot>
        </ViewSafeAreaProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export { AppProvider }
