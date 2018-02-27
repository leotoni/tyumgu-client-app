
const current_user = (state= {} ,action) => {
	switch(action.type) {
		case "SET_ID":
			return action.data
		default:
			return state
	}
}
export default current_user	