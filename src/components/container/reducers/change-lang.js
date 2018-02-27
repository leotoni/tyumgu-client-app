
  
const words_massive =(state=[],action) =>{

  if (action.type ==="CHANGE_LANGUAGE")
  {
    return action.data
  }
  else
  return state
}
export default words_massive
