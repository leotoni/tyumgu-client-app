import React from "react";
import { connect } from "react-redux";
//import { conf } from "../../config";
//import { Link } from 'react-router';
import Cookies from 'universal-cookie';
import * as postActions from "./actions/post-load";

import Parser from 'html-react-parser';
//import { render } from 'react-dom';


const Post = React.createClass({
    cookies : new Cookies(),
    componentDidMount() { 
        var token = this.cookies.get('token');
        this.props.getPostByName(token,this.props.name)
        .then(()=>{console.log(this.props.store)});

    },
        
    render() {
            let posts=this.props.posts;
            //console.log(posts[0]&&posts[0].what.content);
            return (  
            <div>                            
                {posts[0]&&Parser(posts[0].what.content)}
            </div>
            
)}})


export default connect(
	state => ({
        posts: state.posts,
		lang: state.lang
    }),postActions
)(Post)
