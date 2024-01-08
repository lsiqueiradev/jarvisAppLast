import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const isLogged = true
  return (
    <NavigationContainer>
      {isLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
