import React, { Component } from 'react';
import { connect } from "react-redux";
import PolicyHeader from '../helper-modules/header-breadcrumbs/headr';
import Post from '../post/post';

class Confidential extends Component {
    render() {
        const breadcrumbs = [
            { title: 'Главная', target: '/desktop' }
            , { title: 'Политика конфиденциальности', target: '/confidential'}
        ]

        const titles = [
            'Политика конфиденциальности'
        ]
        return (
            <div>
                <PolicyHeader breadcrumbs={breadcrumbs} titles={titles} />
                
                    <div className="content">
                        <div className="panel panel-white">
                            <div className="panel-heading">
                                <h6 className="panel-title">
                                    Политика конфиденциальности
                                    <a className="heading-elements-toggle"><i className="icon-more"></i></a>
                                </h6>
                                <div className="heading-elements"></div>
                            </div>
                            <div className="panel-body">
                            <Post name="confidential" />
                            </div>  
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default connect()(Confidential)