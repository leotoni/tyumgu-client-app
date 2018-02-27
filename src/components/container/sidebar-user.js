import React from "react";
import { Link } from 'react-router';
import { connect } from "react-redux";
import ProfileImage from '../helper-modules/profile-image';
import Cookies from 'universal-cookie';
import { conf } from "../../config";

const SideBarUser = React.createClass({
    cookies : new Cookies(),
componentWillMount() {
	this.state={
        displayName:"",
		name:"",
        title:"",
        username:"",
    }
},

checkImg() {
    let user = this.cookies.get('user')
        , staticToken = this.cookies.get('staticToken')
    if (!user) return;
    let src = user && user.profileImageURL;
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
                isReactLetterAvatar: src === null,
            }
        } />
    )
},
componentDidMount(){
    var t_user = this.cookies.get('user');
	this.setState({displayName : t_user.displayName},
                  {username    : t_user.username},
                  {name        : t_user.deprName},
	              {title       : t_user.deprTitle});
},
render(){
        return (
            <div className="sidebar-user">
                <div className="category-content">
                    <div className="media">
                        <div className="media-left">
                            <Link to={`/profile/${this.state.username}`}>
                                {this.checkImg()}
                            </Link>
                        </div>
                        <div className="media-body"> <span className="media-heading text-semibold">{this.state.displayName} </span>
                            <div className="text-size-mini text-muted">{this.state.name}</div>
                            <div className="text-size-mini text-muted">{this.state.title}</div>
                        </div>
                        <div className="media-right media-middle">
                            <ul className="icons-list">
                                <li> <a href="#">
                                    <i className="icon-cog3"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
})
        
export default connect(
	state => ({
		store:state
	})
)(SideBarUser)