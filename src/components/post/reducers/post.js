
const post = (state= {} ,action) => {
	switch(action.type) {
		case "LOAD_POSTS":
			return action.data
		default:
			return state
	}
}
export default post	