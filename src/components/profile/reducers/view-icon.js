

const view_icon = (state= {} ,action) => {
	switch(action.type) {
		case "LOAD_ICONS": 
			return action.data
		default:
			return state
	}
}
export default view_icon