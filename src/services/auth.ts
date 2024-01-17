interface ResponseSignIn {
  token: string
  user: {
    id: string
    name: string
    email: string
    avatar_url: string
  }
}

const mockedApiData: ResponseSignIn = {
  token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
  user: {
    id: 'adadadasdr23409hr7238hubsdusabd',
    name: 'Lucas Siqueira',
    email: 'lucas@lsiqueira.dev',
    avatar_url: 'https://avatars.githubusercontent.com/u/33165370?v=4',
  },
}

export function signIn({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<ResponseSignIn> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'lucas@lsiqueira.dev' && password === 'Password10') {
        resolve(mockedApiData)
      } else {
        reject(new Error('credenciais inválidas'))
      }
    }, 1000)
  })
}
