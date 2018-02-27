import React, { Component } from 'react'
import { connect } from "react-redux"
import PolicyHeader from '../helper-modules/header-breadcrumbs/headr';
import Post from '../post/post';

class Cookies extends Component {
    render() {
        const breadcrumbs = [
            { title: 'Главная', target: '/desktop' }
            , { title: 'Политика в отношении файлов cookie', target: '/cookies'}
        ]

        const titles = [
            'Политика в отношении файлов cookie'
        ]
        return (
            <div>
                <PolicyHeader breadcrumbs={breadcrumbs} titles={titles} />
               
                    <div className="content">
                        <div className="panel panel-white">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    Политика в отношении файлов cookie
                                    <a className="heading-elements-toggle"><i className="icon-more"></i></a>
                                </h6>
                                <div className="heading-elements"></div>
                            </div>
                            <div className="panel-body">
                          <Post name="cookies" />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default connect()(Cookies)