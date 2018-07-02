
const token = (state = null, action: any) => {
	switch (action.type) {
		case 'LOGIN':
			return action.token
		case 'LOGOUT':
			return null
		default:
			return state
	}
}

export default token