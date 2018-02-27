import React, { Component } from 'react';
import {connect } from "react-redux";
//import { Link } from 'react-router';
import Cookies from 'universal-cookie';


class ViewTabs extends Component {
    

    constructor(props) {
        super(props)
        this.cookies = new Cookies()
        this.linkList = this.linkList.bind(this)
    }

    
    componentWillMount() {
        this.setState({ icons:{}, groupsTabs:{} })
    }
    
    linkList(icons, target, user = {}) {
        if (!Array.isArray(icons) || user.username) return;
        
        var menu = icons.find(item => item.target === target)
        
        if (!menu || !Array.isArray(menu.children)) return;

        return menu.children.map((item, index) => {
            item.target = item.target.replace('###username###', user.username)
            var description = item.description[this.props.lang.lg] || ""
            return (
                <li className={index===0?'active':''} key={index}>
                    <a href={item.target} data-toggle="tab">{description}</a>
                </li>
            )
        })
    }

    render() {
        return (<ul className="nav navbar-nav">{this.linkList(this.props.store.icons, this.props.location, this.props.store.user.main)}</ul>)
    }
}
export default connect(
  state => ({
    store: state,
    lang: state.lang
  })
)(ViewTabs)


   
            