
const menu = (state=0, action) => {

	switch(action.type) {
		case "MENU_TREE":
			return action.data
		case "MENU_REMOVE":
			return {}
		default:
			return state
	}
}
export default menu