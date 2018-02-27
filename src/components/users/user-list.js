import React from "react";
//import { conf } from "../../config";
//import ReactLetterAvatar from '../helper-modules/letter-avatar';
//import { Link } from 'react-router';
import { connect } from "react-redux";
import * as userActions from "./actions/users";
import Cookies from 'universal-cookie';
import Hedr from "./hedr";
import List from "./list";

const UserList = React.createClass(  {
cookies: new Cookies(),
 componentDidMount() {
    
 },
render() {
return(

<div>
	<Hedr />
	<div className="content my-content ">
		<List filter={true} nameList="Каталог пользователей" />
	</div>
</div>

)}})
export default connect(
	state => ({
		store:state.userMass.users,
		total:state.userMass.total
  }),(
	userActions
)
)(UserList)
	