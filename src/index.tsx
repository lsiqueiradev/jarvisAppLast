import { useState } from 'react'

import { AppProvider } from './hooks'

import { Routes } from './routes'

import { AnimatedBootSplash } from '@components/AnimatedBootSplash'

export function App() {
  const [visible, setVisible] = useState(true)
  return (
    <AppProvider>
      <Routes />
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false)
          }}
        />
      )}
    </AppProvider>
  )
}
