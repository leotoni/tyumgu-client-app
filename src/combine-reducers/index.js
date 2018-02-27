import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import user from '../components/profile/reducers/user-load';
import userMass from '../components/users/reducers/users';
import lang from '../components/container/reducers/change-lang';
import menu from '../components/container/reducers/menu';
import icons from '../components/profile/reducers/view-icon';
import catchUser from '../components/profile/reducers/user-id';
import posts from '../components/post/reducers/post';
import myNewsLine from '../components/сommunication/reducers/data-load';
import forms from '../components/profile/student/profile-tabs/edit-parts/reducers/load-forms';


export default combineReducers({
    routing: routerReducer,
    user,
    userMass,
    lang,
    menu,
    catchUser,
    icons,
    posts,
    forms,
    myNewsLine
})
