

const user_massive =(state=[],action) =>{

    if (action.type ==="LOGIN_USER_LIST")
    {
    	return action.data
    }
    else
    return state
}
export default user_massive
