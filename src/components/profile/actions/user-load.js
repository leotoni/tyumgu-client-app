import axios from "axios";
import {conf} from "../../../config";


//-------------------------GET, POST REQUEST ----------------------------//


function GetRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}

//----------------------------------------------------------------------//

function userLoad(data) {
	return {
		type: "LOAD_USER", data
	}
}

export function getUserInfo(token) {
    return dispatch => {
            return GetRequest(conf.server_api_url+"api/v1/users/me",token)
            .then(answ => { 
                //console.log(answ);
                dispatch(userLoad(answ.data.response));	
            })
            .catch(error => {
                var s = ""+error;
                if (s.includes('Network Error')){
                    return 420;
                }
                //else console.log('ошибка загрузки пользователя')
        })	
    }
}

export function reviewUserInfo( token, id, by = 'id' ) {
    return dispatch => {
        const api = by === "username" ? "api/v1/users/username/" : "api/v1/users/"
        return GetRequest(
            conf.server_api_url + api + id
            , token
        )
            .then(answ => { dispatch(userLoad(answ.data.response)) })
            .catch(error => {
                var s = ""+error;
                if (s.includes('Network Error')){
                    return 420;
                }
            })	
    }
}

function setID(data) {
	return {
		type: "SET_ID", data
	}
}

export function setUserID(id) {
    return dispatch => {
        return dispatch(setID(id));	   	
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