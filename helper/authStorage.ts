interface IAuthStorage {
  accessToken?: string

}

interface IResponseAuthStorage {
  token: string | null

}

export const setAuthStorage = (accessToken) => {
  if (accessToken) localStorage.setItem('token', accessToken)
}

export const getAuthStorage = (): IResponseAuthStorage => {
  const token = localStorage.getItem('token')

  return { token }
}

export const removeAuthStorage = () => {
  localStorage.removeItem('token')

}
