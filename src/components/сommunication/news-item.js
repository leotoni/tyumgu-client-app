import React from "react";
import { connect } from "react-redux";
import ProfileImage from '../helper-modules/profile-image';
import * as UserActions from "./actions/data-load";
import { conf } from "../../config";
//import { Link } from 'react-router';
import Cookies from 'universal-cookie';
import moment from 'moment';


const NewsItem = React.createClass({
    cookies: new Cookies(),
    componentWillMount() {
        this.state = {

            notify: "",
            location: "",
            user:"",
            updateLang:""
        }
    },

    componentDidMount() {
       // console.log(this.props.language);
        var token = this.cookies.get('token');
        console.log(token);
        this.props.loadUserByID(token,this.props.record.entity.id)
        .then((res)=>{
            this.setState({user:res});
       })
    },
    componentWillReceiveProps(nextProps) {  
        console.log('rend');
        //var b = this.state.location!==nextProps.location;
        return this.componentDidMount()
    },
    checkImg() {
       var u = this.state.user&&this.state.user.user.profileImageURL;
        return (
            <ProfileImage opts={{
                src:u,
                basePath: conf.server_api_url,
                token: this.cookies.get('staticToken'),
                class: "avat",
                name: this.state.user&&this.state.user.main.displayName[0],
                size: 40,
                radius: 25,
                isReactLetterAvatar: u === null,
            }} />
        )
    },
    momentDateSet(){
        moment.locale(this.props.lang.lg);
        var d = moment(this.props.record.updated);
        d = d.format("YYYYMMDDHHMM");
        return moment(d, "YYYYMMDDHHMM").fromNow();
    },
    render() {
        return (
            <div className="timeline-row">
                <div className="timeline-icon">
                    <a href="#">
                        {this.checkImg()}
                    </a>
                </div>
                <div className="panel panel-flat timeline-content">
                    <div className="panel-heading">
                        <h6 className="panel-title">
                            <p>
                                {this.state.user&&this.state.user.main.displayName}

                            <a href="#" className="">
                                <img alt="" />
                            </a>
                               {/* <span>&nbsp;<b> Тюменский государственный университет (ТюмГУ)</b></span> */}
                            </p>
                        </h6>
                
                        <div className="heading-elements">
                            <span className="heading-text">
                                <i className="icon-calendar position-left"></i>{this.momentDateSet()} </span>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="activity-inner">
                            <p>
                                
                                <span>{this.props.record.message}</span>
                                
                            </p>
                        </div>
                        <div className="activity-comments">
                            <form action="#" method="post" id="ac-form-31860" className="ac-form form-horizontal root">
                                <div className="ac-textarea">
                                    <textarea id="ac-input-31860" className="ac-input bp-suggestions" name="ac_input_31860"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="btn btn-default ac-reply-cancel">Отменить</a>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <button type="submit" name="ac_form_submit" className="btn btn-primary">Опубликовать</button></div>
                                    <input type="hidden" name="comment_form_id" value="31860" />
                                </div>
                                <input type="hidden" name="_wpnonce_new_activity_comment" value="c79bca5e8a" />
                                <input type="hidden" name="_wp_http_referer" value="/users/leonrov/" />
                            </form>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="heading-elements">
                            <span className="heading-text text-muted">
                                <a href="#" className="acomment-reply text-muted" id="acomment-comment-32145">
                                    <i className="icon-comments"></i> Комментарии:
                                        <span className="badge badge-default">0</span>
                                </a>
                            </span>
                            <span className="heading-text pull-right">
                                <a href="#" className="text-muted">
                                    <i className="icon-star-full2"></i> В избранное
                                    </a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
})

export default connect(
    state => ({
        store: state.myNewsLine,
        lang: state.lang
    }),UserActions
)(NewsItem)



