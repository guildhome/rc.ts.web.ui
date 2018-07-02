import User from '../login/User'

export const login = (user: User, token: string) => ({
  type: 'LOGIN',
  user: user,
  token: token
})

export const logout = () => ({
	type: 'LOGOUT'
})