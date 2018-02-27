import React from "react";
import { conf } from "../../config";
import { connect } from "react-redux";
import * as userActions from "./actions/users";
import * as Pnotify from "../helper-modules/pnotify/pnotify";
import Cookies from 'universal-cookie';


const Login = React.createClass({

	componentWillMount() {		
		this.state={
			res: "",
			notify:"",
		  }
		this.setLanguage(conf.def_language);
	},

	setLanguage(language) {
		var t = require(`../helper-modules/languages/${language}.json`);
		this.props.changeLanguage(t)
	},
	
	componentDidMount() {

		document.title = conf.app_title; 
		var link = document.querySelector("link[rel*='icon']"); 
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = conf.app_favicon;
		document.getElementsByTagName('head')[0].appendChild(link);
		
		this.capthafunk();
		document.body.style.backgroundImage = "url(" + conf.login_cover_img + ")";

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
		})
		this.logtext();

	},
	
	loginSubmit(event) {
		event.preventDefault();
		this.setState({notify:null});
		var cap =  Number(document.getElementById('capt').value);
		var txt="";
		var titl=this.props.lang.error;
		var password="";
		var usernameOrEmail="";
		const cookies = new Cookies();
	    cookies.set('lg',this.props.lang.lg , { path: '/' });

		if (cap === this.state.res) {
			usernameOrEmail = this.email.value;
			password = this.password.value;
			
		}
		else{
			txt = this.props.lang.wrong_ans_calc;
			if (cap.value==="") txt = this.props.lang.emp_value;			
		}

		return this.props.login({ usernameOrEmail, password }, '/desktop')
			.then((res) => { 
				    if (res===420){this.setState({notify:Pnotify.Error(this.props.lang.error, this.props.lang.error_net_conn)})} 
				    if (res===422) 
				    if (txt ==="") this.setState({notify:Pnotify.Error(this.props.lang.wrong_ans)});
				    else this.setState({notify:Pnotify.Error(titl,txt)});
			});
	},
	logtext() {
		return (
			<div>
				<p>{this.props.lang.text_log}:</p>
				<ul>
					<li>{this.props.lang.text_log_li1}</li>
					<li>{this.props.lang.text_log_li2}</li>
				</ul>
			</div>)
	},
	randomNumber(m, n) {
		m = Number(m);
		n = Number(n);
		return Math.floor(Math.random() * (n - m + 1)) + m;
	},
	capthafunk() {
		var i = this.randomNumber(1, 3); // генерируем число
		var oper=[];
		oper[1]="×";
		oper[2]="—";
		oper[3]="+";
		var one = this.randomNumber(10, 20);
		var two = this.randomNumber(0, 10);
		var res=0;
		if (i===1) {
			
			one = Math.round(one /5);
			two = Math.round(two /5);
			res= one * two;
		}else if (i===2){ res= one - two;}
		else res = one + two;
		this.setState({ res:res}); 
		var cap = document.getElementById('capt');
		cap.placeholder = one+" "+oper[i]+" "+two+" ="; 	 	
	},
	render() {
		return (

			<div>

				<div className="login-container my-login-container ">
					<div className="navbar navbar-inverse">
						<div className="navbar-header">


						<div className="navbar topbarlogo">
							<img alt="" src={conf.topbar_logo_img}  />
							
							<span className="text-semibold">{conf.app_title}</span> 
						</div>
						
							<ul className="nav navbar-nav visible-xs-block">
								<li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a>
								</li>

							</ul>
						</div>
						<div className="navbar-collapse collapse" id="navbar-mobile">

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

							</ul>
						</div>
					</div>

					<div className="page-container  ">
						<div className="page-content">
							<div className="content-wrapper">
								<div className="content">
									<form onSubmit={this.loginSubmit} >
										<div className="panel panel-body login-form my-body-login" id="loginform">
											<div className="text-center">
												
													<img alt="" className="login_logo" src={conf.login_logo_img}/>
												
												<h5 className="content-group">{this.props.lang.log_label}<small className="display-block">&nbsp;{this.state.message}</small></h5>
											</div>
											<div className="form-group has-feedback has-feedback-left">
												<input type="text" ref={(input) => { this.email = input; }} className="form-control" placeholder="login" />	<div className="form-control-feedback">
													<i className="icon-user text-muted"></i>
												</div>
											</div>

											<div className="form-group has-feedback has-feedback-left">
												<input type="password" ref={(input) => { this.password = input }} className="form-control" placeholder="Password" />
												<div className="form-control-feedback">
													<i className="icon-lock2 text-muted"></i>
												</div>
											</div>
											<div className="form-group has-feedback  has-feedback-left">
											<input type="text" id="capt" className="form-control" placeholder="" />
											<div className="form-control-feedback ">
													<i className="icon-calculator text-muted"></i>
										 		</div>
											
											</div>
											<div className="form-group">
												<button type="submit" className="btn btn-primary btn-block">{this.props.lang.btn_label} <i className="icon-circle-right2 position-right"></i></button>
											</div>
											{this.logtext()}
											<div className="text-center">
												<a href={conf.fogot_password_link} target="_blank">{this.props.lang.fog_pass}</a>
												{/* <a href="login_password_recover.html" onClick={()=>{window.open(conf.fogot_password_link)}} >{this.props.lang.fog_pass}</a> */}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

			
				{this.state.notify}


			</div>
		)
	}
})

export default connect(
	state => ({
		store: state,
		lang: state.lang
	}),
	userActions
)(Login)
