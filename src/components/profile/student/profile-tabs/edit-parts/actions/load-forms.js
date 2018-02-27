import axios from "axios";
import {conf} from "../../../../../../config";


//-------------------------GET, POST REQUEST ----------------------------//


function getRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}

//----------------------------------------------------------------------//

function loadForm(data) {
	return {
		type: "LOAD_FORM", data
	}
}

export function loadJsonSchemaKind(token,kind) {
    return dispatch => {
            return getRequest(conf.server_api_url+"api/v1/jsonschema/"+kind,token)
            .then(answ => { 
                let { jsonSchema: schema } = answ.data.response
                dispatch(loadForm({ [kind] : schema }));	
            })
            .catch(error => {
                var s = ""+error;
                if (s.includes('Network Error')){
                    return 420;
                }
        })	
    }
}