import axios from "axios";
// import { browserHistory } from 'react-router';
// import Cookies from 'universal-cookie';
import {conf} from "../../../config";

//-------------------------GET, POST REQUEST ----------------------------//

function GetRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}


//----------------------------------------------------------------------//


function postLoad(data) {
	return {
		type: "LOAD_POSTS", data
	}
}


// http://nova.utmn.ru/api/v1/posts?code=campus
// http://nova.utmn.ru/api/v1/posts?code=cookies
// http://nova.utmn.ru/api/v1/posts?code=confidential
// http://nova.utmn.ru/api/v1/posts?code=terms
// http://nova.utmn.ru/api/v1/posts?code=welcome 


export function getPostByName(token,name) {
    return dispatch => {
            return GetRequest(conf.server_api_url+"api/v1/posts?code="+name,token)
            .then(answ => { 
               // console.log(answ);
                dispatch(postLoad(answ.data.response));	
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

export function getPosts(token) {
    return dispatch => {
        return GetRequest(conf.server_api_url+"api/v1/users/me",token)
        .then(answ => { 
            //console.log(answ);
            dispatch(postLoad(answ.data.response));	
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


export function changeLanguage(langObject) {
	return dispatch => {
	  dispatch({
		type: "CHANGE_LANGUAGE",
		data: langObject
	  });
	}
}



