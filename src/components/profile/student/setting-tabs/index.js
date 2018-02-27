import React from 'react';
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import Cookies from 'universal-cookie';

import Profile from '../../profile';
import Email from './email';
import Private from './private';
import ViewTabs from '../view-tabs';

const Setting = React.createClass({
  cookies : new Cookies(),
  componentWillMount() {
    this.state={
		  	notify:""
		  }
  },
  
  componentDidMount() { 
  },
  render() {
    return (
      <div>
          
        <Profile location={this.props.location&&this.props.location.pathname} log={this.props.params.log} />

        <div className="navbar navbar-default navbar-xs content-group">
          <ul className="nav navbar-nav visible-xs-block">
            <li className="full-width text-center"><a data-toggle="collapse" data-target="#navbar-filter"><i className="icon-menu7"></i></a></li>
          </ul>

          <div className="navbar-collapse collapse" id="navbar-filter">
            <ul className="nav navbar-nav">

              <ViewTabs location={this.props.location&&this.props.location.pathname} />

           
            </ul>

          
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">

                  <Email />
                  <Private />
                 
  
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {this.state.notify}
        
      </div>

    )
  }
})
export default connect(
  state => ({
    store: state.user,
		lang: state.lang
  }),
  userActions
)(Setting)

