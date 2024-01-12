import { createContext, ReactNode, useEffect, useState } from 'react'

import * as auth from '../services/auth'
import { api } from '@services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ASYNC_STORAGE_KEY_USER = '@jarvisApp:user'
const ASYNC_STORAGE_KEY_TOKEN = '@jarvisApp:token'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextDataProps {
  user: User
  isFetchUserLoading: boolean
  isUserLoading: boolean
  signOut: () => Promise<void>
  signIn: (crenditals: SignInCredentials) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [isFetchUserLoading, setIsFetchUserLoading] = useState(false)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      setIsUserLoading(true)
      const [token, user] = await AsyncStorage.multiGet([
        ASYNC_STORAGE_KEY_TOKEN,
        ASYNC_STORAGE_KEY_USER,
      ])

      if (token[1] && user[1]) {
        api.defaults.headers.common.Authorization = `${token[1]}`

        setData({ token: token[1], user: JSON.parse(user[1]) })
      }

      setIsUserLoading(false)
    }

    loadStorageData()
  }, [])

  // async function signIn({ email, password }: SignInCredentials) {
  //   try {
  //     setIsFetchUserLoading(true)

  //     const response = await api.post('/login', {
  //       email,
  //       password,
  //     })

  //     const { user, token } = response.data

  //     api.defaults.headers.common.Authorization = `Bearer ${token}`

  //     await AsyncStorage.multiSet([
  //       [ASYNC_STORAGE_KEY_TOKEN, token],
  //       [ASYNC_STORAGE_KEY_USER, JSON.stringify(user)],
  //     ])

  //     setData({
  //       token,
  //       user,
  //     })
  //   } catch (err: any) {
  //     console.log('err', err.response.data)
  //     Alert.alert('Invalid credentials', 'danger')
  //     // throw err
  //   } finally {
  //     setIsFetchUserLoading(false)
  //   }
  // }

  async function signIn() {
    setIsFetchUserLoading(true)
    const response = await auth.signIn()

    api.defaults.headers.Authorization = `Baerer ${response.token}`

    await AsyncStorage.setItem(
      ASYNC_STORAGE_KEY_USER,
      JSON.stringify(response.user),
    )
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY_TOKEN, response.token)
    setData({
      token: response.token,
      user: response.user,
    })
    setIsFetchUserLoading(false)
  }

  async function signOut() {
    setData({} as AuthState)
    await AsyncStorage.multiRemove([
      ASYNC_STORAGE_KEY_USER,
      ASYNC_STORAGE_KEY_TOKEN,
    ])
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isFetchUserLoading,
        isUserLoading,
        user: data.user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
