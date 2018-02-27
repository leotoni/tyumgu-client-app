
const postnewsme = (state= {} ,action) => {
	switch(action.type) {
		case "LOAD_ME_NEWSPOST":
			return action.data
		default:
			return state
	}
}
export default postnewsme