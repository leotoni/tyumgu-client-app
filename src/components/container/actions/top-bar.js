

export function removeMenu() {
	return dispatch => {
	  dispatch({
		  type: "MENU_REMOVE",
		  data: {}
		});
	}
}

export function removeUser() {
	return dispatch => {
	  dispatch({
		  type: "LOAD_USER",
		  data: {}
		});
	}
}

export function changeLanguage(langObject) {
	return dispatch => {
	  dispatch({
		type: "CHANGE_LANGUAGE",
		data: langObject
	  });
	}
}