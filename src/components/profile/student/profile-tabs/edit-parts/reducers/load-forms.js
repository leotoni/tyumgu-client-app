
const load_forms_data = (state= {} ,action) => {
	switch(action.type) {
		case "LOAD_FORM": 
			return action.data
		default:
			return state
	}
}
export default load_forms_data