// /api/v1/feed/me

import axios from "axios";
import {conf} from "../../../config";


//-------------------------GET, POST REQUEST ----------------------------//


function getRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}

//----------------------------------------------------------------------//

function loadPostsData(data) {
	return {
		type: "LOAD_ME_NEWSPOST", data
	}
}

export function loadPostData(token) {
    return dispatch => {
            return getRequest(conf.server_api_url+"api/v1/feed/me?offset=0&limit=15",token)
            .then(answ => { 
                dispatch(loadPostsData(answ.data.response));	
            })
            .catch(error => {
                var s = ""+error;
                if (s.includes('Network Error')){
                    return 420;
                }
        })	
    }
}

export function loadUserByID(token,id) {

        return dispatch => {
            return getRequest(conf.server_api_url+'api/v1/users/'+id,token)
            .then(answ => {
                if (answ != null) {    
                //  console.log(answ);
                    return answ.data.response;
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
