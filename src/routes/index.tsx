import { useEffect } from 'react'

import { useColorScheme } from 'react-native'

import { useTheme } from '@hooks/useTheme'
import { useAuth } from '@hooks/useAuth'

import { Loading } from '@components/Loading'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const schemeColor = useColorScheme()
  const { mode, setTheme } = useTheme()
  const { user, isUserLoading } = useAuth()

  useEffect(() => {
    if (mode === 'system') {
      setTheme(schemeColor === 'dark' ? 'dark' : 'light')
    }
  }, [schemeColor])

  if (isUserLoading) {
    return <Loading />
  }

  return user ? <AppRoutes /> : <AuthRoutes />
}
