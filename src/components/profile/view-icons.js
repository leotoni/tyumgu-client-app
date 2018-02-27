import React, { Component } from 'react';
import {connect } from "react-redux";
import { Link } from 'react-router';
import Cookies from 'universal-cookie';
import * as iconsActions from "./actions/view-icon";


class Icons extends Component {
  
    constructor(props) {
        super(props)
        this.cookies = new Cookies()
        this.linkList = this.linkList.bind(this)
    }

    componentWillMount() {
        this.setState({ icons: {} })
    }

    componentDidMount() {
        this.setState({visibleID:this.props.visibleID})

        let token = this.cookies.get('token')
        
        this.props.getUserIcons(
            token
            , this.props.visibleID
                ? this.props.visibleID
                : this.props.userID
        )
    }
    
    componentWillReceiveProps(nextProps) {
        var b = this.state.visibleID!==nextProps.visibleID;
        this.setState({visibleID:nextProps.visibleID});
        return b && this.componentDidMount();
    }

    linkList(icons, user) {
        if (!Array.isArray(icons) || !user) return

        return icons.map((item, index) => {
            item.target = item.target.replace('###username###', user.username);
            const description = item.description[this.props.lang.lg] || ""
            return (
                <Link id="education" to={item.target} className="btn btn-link btn-float has-text " key={index}>
                    <i className={`${item.icon} text-primary`}></i>
                    <span>{description}</span>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="heading-btn-group">{this.linkList(this.props.store.icons, this.props.store.user.main)}</div>
        )
    }
}

export default connect(
  state => ({
    store: state,
    lang: state.lang
  }),
  iconsActions
)(Icons)


            