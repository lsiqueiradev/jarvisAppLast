import { AppProvider } from './hooks'

import { Routes } from './routes'

export function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}
