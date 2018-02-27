import React, { Component } from 'react';
import { connect } from "react-redux";
import PolicyHeader from '../helper-modules/header-breadcrumbs/headr';
import Post from '../post/post';


class Terms extends Component {
    render() {
        const breadcrumbs = [
            { title: 'Главная', target: '/desktop' }
            , { title: 'Правила и условия', target: '/terms'}
        ]

        const titles = [
            'Правила и условия'
        ]
        return (
            <div>
                <PolicyHeader breadcrumbs={breadcrumbs} titles={titles} />
                    <div className="content">
                        <div className="panel panel-white">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    Правила и условия
                                    <a className="heading-elements-toggle"><i className="icon-more"></i></a>
                                </h6>
                                <div className="heading-elements"></div>
                            </div>
                            <div className="panel-body">
                            <Post name="terms" />
                            </div>
                        </div>
                    </div>
                </div>
    
        )
    }
}

export default connect()(Terms)