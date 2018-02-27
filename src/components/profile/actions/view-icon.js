
import axios from "axios";
import {conf} from "../../../config";


//-------------------------GET, POST REQUEST ----------------------------//

function GetRequest(api,hedr) {
	var config = {
		headers: {'Authorization':hedr}
	};
	return  axios.get(api,config)
}


function loadIcons(data) {
	return {
		type: "LOAD_ICONS", data
	}
}

const build = (data, topElement) => {
    topElement.id = topElement._id
    
    data = data.map(item => {
        item.id = item.id || item._id
        return item
    })

    const buildTree = ( array, parent, tree ) => {
        tree = tree || []
        parent = parent || { id: topElement.id }
    
        let children = array.filter( item => item.parent === parent.id )
        if (children && children.length) {
            if (parent.id === topElement.id) {
                tree = children
            } else {
                parent['children'] = children
            }
            
            children.map(item => buildTree(array, item))
        }
    
        return tree
    }

    return buildTree(data)
}

export function getUserIcons(token,id) {
    return dispatch => {
            return GetRequest(conf.server_api_url+"api/v1/menu?type=profile&visibleFor="+id, token)
            .then(answ => { 

                const data = answ.data.response
                const topElement = data.find(item => item.parent === null)
                const tree = build( data, topElement )
                
                dispatch(loadIcons(tree));	
            })
            .catch(error => {
                var s = ""+error;
                if (s.includes('Network Error')){
                    return 420;
                }
            })	
    }
}
