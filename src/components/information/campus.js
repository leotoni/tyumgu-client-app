import React from "react";
//import { conf } from "../../config";
//import { connect } from "react-redux";
import Post from '../post/post';
import CampusHeader from '../helper-modules/header-breadcrumbs/headr';

const Campus = React.createClass({
    
    breadcrumbs: [
        { title: 'Главная', target: '/desktop' }
       ,{ title: 'Кампус', target: '/'}
    ],
    titles: [
        'Кампус'
    ],

	render() {
		return (
			<div>
                <CampusHeader breadcrumbs={this.breadcrumbs} titles={this.titles} />
                <div className="content">
                    <div className="panel panel-white">
                        <div className="panel-heading">
                            <h6 className="panel-title"> Кампус</h6>
                        </div>    
                        <div className="panel-body">
                                <Post name="campus" />
                        </div>
                    
                    </div>
                </div>
            </div>        
		)
	}
})


export default (Campus)


