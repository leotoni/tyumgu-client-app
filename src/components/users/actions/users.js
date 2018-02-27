import axios from "axios";
import {conf} from "../../../config";


//-------------------------GET,POST REQUEST ----------------------------//

function GetRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}

// function PostRequest(method, data, api) {
// 	return axios({
// 		method: method,
// 		url: api,
// 		data: data
// 	})
// }

//----------------------------------------------------------------------//


function userLoadList(data) {
	return { 
		type: "LOGIN_USER_LIST", data 
	}
}


export function getUsers(token,limit,offset,dispName,institut,position,group,entered ) {

    return dispatch => {
        var params ="";
        params+=`limit=${limit}&offset=${offset}&displayName=${dispName}`;
        params+=`&department=${institut}&position=${position}&group=${group}&entered=${entered}`;

        return GetRequest(conf.server_api_url+`api/v1/users?`+params,token)
        .then(answ => {
            if (answ != null) {    
                //console.log(answ);
                var md=answ.data.response;
                dispatch(userLoadList(md));
            } else return;
        })
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

