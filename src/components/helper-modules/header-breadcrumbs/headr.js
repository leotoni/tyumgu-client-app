import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';



class HeaderBreadcrums extends Component {

    static PropTypes = {
        breadcrumbs: PropTypes.array.isRequired,
        titles: PropTypes.array.isRequired
    }

    renderLinks(links) {
        if (!Array.isArray(links)) return

        links = links.map((link, index) => {
            if (links.length - 1 === index) {
                return (<li key={index} className="active">{link.title}</li>)
            } else {
                return (
                    <li key={index}>
                        <Link to={link.target}> <i className="icon-home2 position-left"></i>{link.title}</Link>
                    </li>
                )
            }
        })

        return (
            <div className="breadcrumb-line">
                <a className="breadcrumb-elements-toggle"><i className="icon-menu-open"></i></a>
                <ul className="breadcrumb">{links}</ul>
            </div>
        )
    }

    renderHeader(titles) {
        if (!Array.isArray(titles)) return

        let shifted = titles.shift()
        shifted = (<span className="text-semibold">{shifted}</span>)

        return (
            <div className="page-title">
                <h4><i className="icon-arrow-left52 position-left"></i>{shifted}</h4>
                <a className="heading-elements-toggle"><i className="icon-more"></i></a>
            </div>
        )
    }
    render() {
        return (
            <div className="page-header" >
                <div className="page-header-content">
                    {this.renderHeader(this.props.titles)}
                    <div className="heading-elements">
                        <div className="heading-btn-group"></div>
                    </div>
                </div>
                {this.renderLinks(this.props.breadcrumbs)}
            </div>
        )
    }
}

export default connect()(HeaderBreadcrums)