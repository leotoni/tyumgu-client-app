import React from "react";
//import { conf } from "../../config";
//import { connect } from "react-redux";
import Post from '../post/post';
import WelcomeHeader from '../helper-modules/header-breadcrumbs/headr';

const Welcome = React.createClass({
    
    breadcrumbs: [
        { title: 'Главная', target: '/desktop' }
        ,{ title: 'Университет', target: '/confidential'}
    ],
    titles: [
        'Университет'
    ],

	render() {
		return (
            <div>
                <WelcomeHeader breadcrumbs={this.breadcrumbs} titles={this.titles} />
                <div className="content">
                    <div className="panel panel-white">
                        <div className="panel-heading">
                            <h6 className="panel-title"> Университет</h6>
                        </div>
                        <div className="panel-body">
                            <Post name="welcome" />
                        </div>
                    </div>
                </div>
            </div>

		)
	}
})


export default (Welcome)



