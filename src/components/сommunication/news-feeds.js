import React from "react";
import { connect } from "react-redux";
//import Post from '../post/post';
import LineNewsHeader from '../helper-modules/header-breadcrumbs/headr';
import CKEditor from "react-ckeditor-component";
import ProfileImage from '../helper-modules/profile-image';
import * as postActions from "./actions/data-load";
import { conf } from "../../config";
//import { Link } from 'react-router';
import Cookies from 'universal-cookie';
import NewsItem from './news-item'

const NewsFeed = React.createClass({
    cookies: new Cookies(),
    breadcrumbs: [
        { title: 'Главная', target: '/desktop' },
        { title: 'Живая лента', target: '/' }
    ],
    titles: ['Живая лента'],

    
    componentWillMount() {
        this.state = {
            username: "",
            displayName: "",
            content: 'content'
        }
    },

    componentDidMount() {
        var user = this.cookies.get('user'),
            token = this.cookies.get('token');
        this.setState({
            username: user.username,
            displayName: user.displayName
        });
        this.props.loadPostData(token).then(() => {
           // console.log(this.props.store);
        })
    },


    onChange(evt){
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
          content: newContent
        })
        //console.log(newContent);
    },

    onBlur(evt) {
      //  console.log("onBlur event called with event info: ", evt);
    },

    afterPaste(evt) {
      //  console.log("afterPaste event called with event info: ", evt);
    },
    postPublish(){
     //   list
        
     
        console.log(this.state.content);
    
    },
    checkImg() {
        var user = this.cookies.get('user')
            , staticToken = this.cookies.get('staticToken')
        if (!user) return;
        var src = user && user.profileImageURL;
        return (
            <ProfileImage opts={
                {
                    src,
                    basePath: conf.server_api_url,
                    token: staticToken,
                    class: "avat",
                    name: this.state.displayName[0],
                    size: 40,
                    radius: 25,
                    isReactLetterAvatar: src === null,
                }
            } />
        )
    },
    render() {
        var records = this.props.records;
        return (
            <div>
                <LineNewsHeader breadcrumbs={this.breadcrumbs} titles={this.titles} />
                <div className="content">
                    <div className="timeline timeline-left">
                        <div className="timeline-container">
                            <div id="buddypress">
                                <div className="timeline-row" id="message">
                                    <div className="timeline-icon">
                                        <div>
                                            {this.checkImg()}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="panel panel-flat timeline-content">
                                                <div className="panel-body">
                                                    <CKEditor
                                                        activeClass="p10"
                                                        content={this.state.content}    
                                                        events={{
                                                            "blur": this.onBlur,
                                                            "afterPaste": this.afterPaste,
                                                            "change": this.onChange
                                                        }} />
                                                        <br/>
                                                    <div className="col-xs-12 text-right">
                                                        <button onClick={this.postPublish} className="btn bg-teal-400 btn-labeled btn-labeled-right">
                                                            <b><i className="icon-circle-right2"></i></b>
                                                            Опубликовать
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <div id="template-notices" role="alert" aria-atomic="true">
                                </div> */}

                                {records.length>0&&records.map((record,i)=>(<NewsItem key={i} record={record} language={this.props.lang.lg} />))}
                                
                                <div className="load-more timeline-row">
                                 <button href="" className="btn btn-info form-control">Загрузить еще</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default connect(
    state => ({
        records: state.myNewsLine,
        lang: state.lang
    }),
    postActions
)(NewsFeed)


