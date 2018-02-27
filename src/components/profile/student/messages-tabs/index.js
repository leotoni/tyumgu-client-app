import React from 'react';
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import Cookies from 'universal-cookie';

import Profile from '../../profile'
import InBox from './inbox';
import Highlight from './highlight';
import Sentbox from './sentbox';
import Compose from './compose';

const Messages = React.createClass({
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
          
        <Profile location={this.props.location.pathname}  />

        <div className="navbar navbar-default navbar-xs content-group">
          <ul className="nav navbar-nav visible-xs-block">
            <li className="full-width text-center"><a data-toggle="collapse" data-target="#navbar-filter"><i className="icon-menu7"></i></a></li>
          </ul>

          <div className="navbar-collapse collapse" id="navbar-filter">
            <ul className="nav navbar-nav">


              <li className="active"><a href="#inbox" data-toggle="tab">Входящие</a></li>
              <li><a href="#highlight" data-toggle="tab"> Помеченные </a></li>
              <li><a href="#sentbox" data-toggle="tab"> Отправленные </a></li>
              <li><a href="#compose" data-toggle="tab"> Написать</a></li>
            </ul>

       
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">

                  <InBox />
                  <Highlight />
                  <Sentbox />
                  <Compose />

  
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
)(Messages)

