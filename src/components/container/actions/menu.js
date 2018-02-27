import axios from "axios";
import {conf} from "../../../config";

//MENU_TREE
function menuTree(data) {
	return {
		type: "MENU_TREE", data
	}
}

export function getRequest(api,hedr) {
	var config = {
		headers: {
			'Authorization':hedr
		}};
	return  axios.get(api,config)
}

export function menuRemove() {
    return dispatch => {
       return dispatch({
		type: "MENU_REMOVE"
        })
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

export function getMenu(token) {
    return dispatch => {
        return getRequest(conf.server_api_url+"api/v1/menu?type=main",token)
        .then(answ => {
            //console.log(answ)
            const data = answ.data.response

            let topElement = data.find(item => item.parent === null)
            let tree = build( data, topElement )

            dispatch(menuTree(tree));
        })
        .catch(function (response) {
            if (response instanceof Error) {
                return response.message;
            }
        })	
    }
}
  