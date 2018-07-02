import { combineReducers } from 'redux'
import user from './user'
import token from './token'

// state currently looks like: { token: string, user: User }
export default combineReducers({
	user, token
})
