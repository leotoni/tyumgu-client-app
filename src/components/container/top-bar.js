import React from "react";
import { Link } from 'react-router';
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import { browserHistory } from 'react-router';
import * as userActions from "./actions/top-bar";
import ProfileImage from '../helper-modules/profile-image';
import { conf } from "../../config";

const TopBar = React.createClass({
    cookies : new Cookies(),
	
	componentWillMount() {
		this.state = {
			displayName: "",
            username:"",
			isrender:false,
			counter:0
		}
	},
	setLanguage(language) {
		var t = require(`../helper-modules/languages/${language}.json`);
		this.props.changeLanguage(t)
		
	},
	componentWillReceiveProps(nextProps) {  
		var b = this.state.isrender!== nextProps.forRend;
		 this.setState({isrender:nextProps.forRend});
		 console.log(b);
		 return b;
	},
	checkImg() {
		
		var user = this.cookies.get('user'),
	 		staticToken = this.cookies.get('staticToken')
		
		if (!user) return;

		var src = user && user.profileImageURL;
		return (
			<ProfileImage opts={
				{
					src,
					basePath: conf.server_api_url,
					token: staticToken,
					className: "avat",
					name: this.state.displayName[0],
					size: 30,
					radius: 15,
					border: 0,
					isReactLetterAvatar: src === null,
					letterAvatarClassName: "lettrAva"
				}
			} />
		)
	},

	componentDidMount() {
		var t_user = this.cookies.get('user');
		this.setState({displayName : t_user.displayName,
						username : t_user.username,
						user: t_user });

		var div = document.getElementById('targlink');
		div.addEventListener('click', function () {
			if (document.body.className.includes('sidebar-xs')) { document.body.className = document.body.className.replace('sidebar-xs', ''); }
			else document.body.className = 'pace-done sidebar-xs';
		});
		div = document.getElementById('targlink-mobile');
		div.addEventListener('click', function () {
			if (document.body.className.includes('sidebar-xs-indicator') || window.screen.availWidth > 768) {
				if (document.body.className.includes('sidebar-mobile-main'))
					document.body.className = document.body.className.replace('sidebar-mobile-main', '');
				else document.body.className = 'pace-done sidebar-xs-indicator sidebar-mobile-main';
			}
		});

		div = document.getElementById('exit');
		div.addEventListener('click', () => {
			this.cookies.remove('token', { path: '/' });
			this.cookies.remove('user', { path: '/' });
	    	this.props.removeMenu();
		    this.props.removeUser();
		    browserHistory.push('/login');
		})
		var dv  = document.getElementById('bl');
		var li1 = document.getElementById('li1');
		var li2 = document.getElementById('li2');
		var eng = document.getElementById('english');
		var rus = document.getElementById('russian');
		li1.addEventListener('click', () => {
			this.setLanguage('en');
			if (li1.className.includes('active')) li1.className = '';
			else {
				eng.style.display = 'block';
				rus.style.display = 'none';
				li1.className = "active";
				li2.className = "";
			}
			dv.click();
		})
		li2.addEventListener('click', () => {
			this.setLanguage('ru');
			if (li2.className.includes('active')) li2.className = '';
			else {
				eng.style.display = 'none';
				rus.style.display = 'block';
				li2.className = "active";
				li1.className = '';
			};
			dv.click();
		})

		var t = this.cookies.get('lg');
		if (t)  this.setLanguage(t); 
		else this.setLanguage(conf.def_language); 
		switch (t) {
			case "en":
				li1.click()
				break;
			case "ru":
				li2.click()
				break;
			default: break;
		}
	},
	render() {
		return (

			<div className="navbar navbar-inverse">
				<div className="navbar-header">
				<div className="navbar topbarlogo">
				<img alt=""  src={conf.topbar_logo_img}  />
				<span className="text-semibold">{conf.app_title}</span> 
				</div>
					
					<ul className="nav navbar-nav visible-xs-block">
						<li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a>
						</li>
						<li><a className="sidebar-mobile-main-toggle" id="targlink-mobile"  ><i className="icon-paragraph-justify3"> </i> </a>
						</li>
					</ul>
				</div>
				<div className="navbar-collapse collapse" id="navbar-mobile">
					<ul className="nav navbar-nav">
						<li> <a className="sidebar-control sidebar-main-toggle hidden-xs" id="targlink" ><i className="icon-paragraph-justify3"> </i> </a>
						</li>
					</ul>
					<p className="navbar-text"> <span className="label bg-success">Онлайн</span> </p>
					<ul className="nav navbar-nav navbar-right">

						<li className="dropdown language-switch">

							<a className="dropdown-toggle" data-toggle="dropdown">
								<div id="english">English	<img src="assets/images/flags/gb.png" alt="" /></div>
								<div id="russian">Русский	<img src="assets/images/flags/ru.png" alt="" /> </div>
								<span className="caret"></span></a>
							<ul className="dropdown-menu">
								<li id="li1"><a className="english"  ><img src="assets/images/flags/gb.png" alt="" /> English</a></li>
								<li id="li2"><a className="russian"><img src="assets/images/flags/ru.png" alt="" /> Русский</a></li>
							</ul>
						</li>


						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								<i className="icon-bubbles4"></i><span className="visible-xs-inline-block position-right">Уведомления</span> </a>
							<div className="dropdown-menu dropdown-content width-350">
								<div className="dropdown-content-heading"> Уведомления</div>
								<ul className="media-list dropdown-content-body">
									<li className="media">
										<div className="media-body">
											<span className="text-muted"> Уведомлений нет </span>
										</div>
									</li>
								</ul>

								<div className="dropdown-content-footer">
									<a href="#" data-popup="tooltip" title="" data-original-title="Все уведомления">
										<i className="icon-menu display-block"> </i> </a> </div>
							</div>
						</li>
						<li className="dropdown dropdown-user">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">

								{this.checkImg()}
								<span> {this.state.displayName} </span>
								<i className="caret"> </i> </a>
								<ul className="dropdown-menu dropdown-menu-right">
							
								<li>
									<Link to={`/profile/${this.state.username}`}> <i className="icon-user"></i> Профиль</Link>
								</li>
								<li>
 								<Link id="user-messages" to={`/profile/${this.state.username}/messages`}>	
									<span className="badge bg-teal-400 pull-right"> 0 </span>
									<i className="icon-envelop4"> </i> Сообщений 	
								</Link>

								</li>
								<li className="divider"> </li>
								<li> <a href="#"> <i className="icon-cog5"></i> Настройки</a> </li>
								<li>
									<a id="exit" > <i className="icon-switch2"> </i> Выход</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})

export default connect(
	state => ({
		store: state
	}),(
		userActions
))(TopBar)
