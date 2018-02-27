import axios from "axios";
import { browserHistory } from 'react-router';
import Cookies from 'universal-cookie';
import {conf} from "../../../config";;

//-------------------------GET, POST REQUEST ----------------------------//

// function GetRequest(api,hedr) {
// 	var config = {
// 		headers: {'Authorization':hedr}
// 	};
// 	return  axios.get(api,config)
// }

function PostRequest(method, data, api) {
	return axios({
		method: method,
		url: api,
		data: data
	})
}

//----------------------------------------------------------------------//


export function changeLanguage(langObject) {
	return dispatch => {
	  dispatch({
		type: "CHANGE_LANGUAGE",
		data: langObject
	  });
	}
}

export function login(data, successPath) {
	return dispatch => {
		return PostRequest("post", data, conf.server_api_url+"api/v1/auth/signin")
			.then(answ => {

				var obj ={
					displayName :answ.data.response.displayName ,
					deprName :answ.data.response.department.name ,
					deprTitle :answ.data.response.department.title ,
					profileImageURL: answ.data.response.profileImageURL,
					profileLayoutURL: answ.data.response.profileLayoutURL,
					username :answ.data.response.username,
					roles:answ.data.response.roles
				}

					const cookies = new Cookies();
					cookies.set('token', answ.data.response.token, { path: '/' });
					cookies.set('staticToken', answ.data.response.staticToken, { path: '/' }); // токен для статических файлов
					cookies.set('user', obj, { path: '/' });
					browserHistory.push(successPath);
			})
			.catch(error => {
				var s = ""+error;
				if (s.includes('Network Error')){
					return 420;
				}
				if (error instanceof Error) {
					return 422;
				}
			})
	}
}



