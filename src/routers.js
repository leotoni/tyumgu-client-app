import React from "react";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import app from './components/container/app';
import login from './components/login/login';
import userlist from './components/users/user-list';
import profileLearn from './components/profile/student/learning-tabs/index';
import profileSetti from './components/profile/student/setting-tabs/index';
import profileEdit from './components/profile/student/profile-tabs/index';
import profileNotify from './components/profile/student/notifications-tabs/index';
import profileMess from './components/profile/student/messages-tabs/index';
import profilePublications from './components/profile/student/publications-tabs';

import notfound from './components/notfound';
import desktop from './components/desktop/desktop';
import Cookies from 'universal-cookie';
import PolicyConfidential from './components/policy/confidential'
import PolicyCookies from './components/policy/cookies'
import PolicyTerms from './components/policy/terms'
import welcome from './components/information/welcome';
import campus from './components/information/campus';

import NewsFeed from "./components/сommunication/news-feeds";

export default (store, history) => {

	function requireAuth(nextState, replace, callback) {
		
		const cookies = new Cookies();
		var token = cookies.get('token');
		if (!token) replace('/login');
		// if (!store.getState().user.authenticated) replace('/login'); 
		callback(); 
	}

	function notfoundd(nextState, replace, callback) {
		const cookies = new Cookies();
		var token = cookies.get('token');
		if (token) 	replace('/notfound')
		else replace('/login')
		callback();
	}

	return (
		<Router history={browserHistory}>
			<Route path='/' component={login} />
			<Route path='/login' component={login} />
				<Route path='/desktop' component={app} onEnter={requireAuth}>
					<IndexRoute component={desktop} />
					<Route path='/desktop' component={desktop} />

					<Route path='/profile/:log' component={profileEdit} />
					<Route path='/profile/:log/education' component={profileLearn} />
					<Route path='/profile/:log/education/timetable' component={profileLearn} />
					<Route path='/profile/:log/education/progress' component={profileLearn} />
					<Route path='/profile/:log/education/portfolio' component={profileLearn} />
					<Route path='/profile/:log/education/grouplearning' component={profileLearn} />
					<Route path='/profile/:log/settings' component={profileSetti} />
					<Route path='/profile/:log/profile' component={profileEdit} />
					<Route path='/profile/:log/publications' component={profilePublications} />
					<Route path='/profile/:log/notifications' component={profileNotify} />	
					<Route path='/profile/:log/messages' component={profileMess} />
					
					
					<Route path='/users' component={userlist} />
					<Route path='/terms' component={PolicyTerms} />
					<Route path='/confidential' component={PolicyConfidential} />
					<Route path='/cookies' component={PolicyCookies} />
					<Route path='/university' component={welcome} />
					<Route path='/campus' component={campus} />
					<Route path='/feed' component={NewsFeed} />


					<Route path='/notfound' component={notfound} />
				</Route>
			
			<Route path='*' component={login} onEnter={notfoundd} />
		</Router>
	)
}
