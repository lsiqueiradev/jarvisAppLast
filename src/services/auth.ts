interface ResponseSignIn {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

export function signIn(): Promise<ResponseSignIn> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          id: 'adadadasdr23409hr7238hubsdusabd',
          name: 'Lucas Siqueira',
          email: 'lucas@lsiqueira.dev',
        },
      })
    }, 2000)
  })
}
