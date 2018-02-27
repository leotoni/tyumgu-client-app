import React from 'react';
import {conf } from "../../config";
import {connect } from "react-redux";
import * as Pnotify from "../helper-modules/pnotify/pnotify";
import TimeOut from '../helper-modules/timeout-sessions/timeout-sessions';
//import SideBarUser from './sidebar-user';
import Menu from'./sidebar-menu';
import TopBar from './top-bar';


window.onresize = function(){
	var m= document.getElementsByClassName("page-content");
	m[0].style.height =  (window.innerHeight-48)+'px';
}

const App = React.createClass({
	yearsFooter(){
		var now = new Date();
		if (conf.footer_label.start_years===now.getFullYear()) return now.getFullYear();
		else return conf.footer_label.start_years+" - "+now.getFullYear();
	},
	
	componentWillMount() {
		this.state={
			counter:1,
			notify:"",
			ds:"",
			start:false,
			rendTopBar:false
		}
	},
	componentDidMount() {

		if (this.props.lang.success)
		this.setState({notify:Pnotify.Success(this.props.lang.success,this.props.lang.success_login)});
		

		//----------------------------Change design--------------------------//
		
		var m= document.getElementsByClassName("page-content");
		m[0].style.height = (window.innerHeight-48) + 'px'; 
 		document.body.style.backgroundImage = "";
		

		//------------------------Page refresh we get clinetinfo again -----------------//

		var tmp = document.getElementById("bl");
		tmp.addEventListener('click', ()=> {
			this.setState({rendTopBar:!this.state.rendTopBar});
		});
	},
	render() {
		return (
			<div >
				<TopBar forRend={this.state.rendTopBar} />
				<div className="page-container " >
				
					<div className="page-content ">
						<div className="sidebar sidebar-main ">
							<div className="sidebar-content">
								{/*<SideBarUser />*/}
								<Menu /> 
							</div>
						</div>
						<div className="content-wrapper">
							{this.props.children}
 
							<div className="footer text-muted">
							 © {this.yearsFooter()}. <a href="#">{conf.footer_label.text}</a>
     					    </div>


						</div>
					</div>
				</div>
				<TimeOut />
				<div id="bl" ></div>				
				{this.state.notify}
			</div>
		)
	}
})


export default connect(
	state => ({
		store: state,
		lang:state.lang
	})
)(App)


