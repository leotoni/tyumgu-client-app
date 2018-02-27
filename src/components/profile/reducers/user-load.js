

const current_user_data = (state= {} ,action) => {
	switch(action.type) {
		case "LOAD_USER": 
			return action.data
		default:
			return state
	}
}
export default current_user_data