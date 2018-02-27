import React from 'react';
import * as Pnotify from "../helper-modules/pnotify/pnotify";
import * as userActions from "./actions/user-load";
import ProfileImage from '../helper-modules/profile-image';
import ViewIcons from './view-icons';
import { connect } from "react-redux";
import { conf } from "../../config";
import { Link } from 'react-router';
import Cookies from 'universal-cookie';

const Profile = React.createClass({
  cookies : new Cookies(),
  componentWillMount() {
    this.state={
      notify:"",
      location:"",
      visibleID:"",
    
		}
  },

  checkErrors(res){
    if (res === 420){
      this.setState({ notify: Pnotify.Error(this.props.lang.error,this.props.lang.error_net_conn) })
    }
  },
  
  componentWillReceiveProps(nextProps) {  

    var b = this.state.location!==nextProps.location||nextProps.mustRender===true;
    return b&&this.componentDidMount();
},

  componentDidMount() { 
    //console.log('RENDER PROFILE');
    this.setState({location:this.props.location});
    var otherUserID = this.props.store.catchUser;
    var token = this.cookies.get('token');
    var cacheUser = this.cookies.get('user'); 

    if (cacheUser && cacheUser.username === this.props.log) {
      return this.props.getUserInfo(token)
        .then(response => {
          this.checkErrors(response);
          this.setState({ visibleID: this.props.store.user.id });
        })
    } else {
      const by = typeof otherUserID === 'string' ? 'id' : 'username'
      const identificator = by === 'id' ? otherUserID : this.props.log
      
      return this.props.reviewUserInfo(token, identificator, by)
        .then(response => {
          this.props.setUserID(""); 
          this.checkErrors(response);
          
          this.setState({ visibleID: this.props.store.user.id })
        })
    }
  },

  componentWillUnmount(){
    this.props.removeUser();
  },

  checkImg() {

    var images = this.props.store.user.user,
        user = this.props.store.user,
        staticToken = this.cookies.get('staticToken'),  
        src = (images && images.profileImageURL) || null
		return (
      <ProfileImage opts={
        {
          src,
          basePath: conf.server_api_url,
          token: staticToken,
          className: "avat2",
          name: user.main && user.main.displayName[0],
          size: 100,
          radius: 50,
          isReactLetterAvatar: src === null,
        }
      } />
    )
  },

  checkCoverImg() {
    var images = this.props.store.user.user,
        staticToken = this.cookies.get('staticToken');
        // user = this.props.store.user,
       
		return (
      <ProfileImage opts={
        {
          src : images && images.profileLayoutURL,
          basePath: conf.server_api_url,
          baseCover: conf.def_cover_img,
          token: staticToken,
          className: "newimg",
          isReactLetterAvatar: false,
          from: 'profile'
        }
      } />
    )
  },
 
  render() { 
    
    var user = this.props.user;
    console.log(this.props.user);
     return (
      <div >

         
        <div className="page-header no-padding">
          <div className="page-header-content">
            <div className="page-title">
              <h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">Профиль</span> </h4>
              <a className="heading-elements-toggle"><i className="icon-more"></i></a>
            </div>
            <div className="heading-elements">

            {this.state.visibleID&&(<ViewIcons location={this.state.location} visibleID={this.state.visibleID} />)} 
            
            </div>
          </div>
          <div className="breadcrumb-line no-margin"><a className="breadcrumb-elements-toggle"><i className="icon-menu-open"></i></a>
            <ul className="breadcrumb">
              <li> <Link to='/desktop'> <i className="icon-home2 position-left"></i> Главная </Link></li>
              <li> <a href="#">Профиль</a></li>
              <li className="active">
                {user.main&&user.main.displayName} </li>
            </ul>

          </div>
        </div>

        
        <div className="profile-cover">
          <div className="profile-cover-img">
            {this.checkCoverImg()}
          </div>
          <div className="media">
            <div className="media-left">
              <a href="#" className="profile-thumb" >
                {this.checkImg()}
              </a>
            </div>
            <div className="media-body">
              <h1>
                
                {user.main&&user.main.displayName}<small className="display-block">{user.main&&user.main.department} <br/> {user.main&&user.main.group} </small></h1>
            </div>

            <div className="media-right media-middle">



            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default connect(
  state => ({
    store: state,
    user: state.user,
		lang: state.lang
  }),
  userActions
)(Profile)


