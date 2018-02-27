// import * as Pnotify from "../../../helper-modules/pnotify/pnotify";
import React from 'react';
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import Cookies from 'universal-cookie';
import Profile from '../../profile'
import Review from './review';
import Edit from './edit';

import ViewTabs from '../view-tabs';

const ProfileEdit = React.createClass({
  cookies : new Cookies(),

  componentWillMount() {
    this.state={
      notify:"",
      location:"",
      mustRender:false
		}
  },

  mustRend(value){
      this.setState({mustRender:true});
      this.shouldComponentUpdate(this.state,null);
      this.setState({mustRender:false});
  },
  
  shouldComponentUpdate(nextProps, nextState){
    var b = this.state.location!==nextProps.location||this.state.mustRender;
    this.setState({location:nextProps.location});
    return b;
  },
  render() {
    return (
    <div>
         <Profile location={this.props.location.pathname} log={this.props.params.log} mustRender={this.state.mustRender} />
          <div className="navbar navbar-default navbar-xs content-group">
            <ul className="nav navbar-nav visible-xs-block">
              <li className="full-width text-center"><a data-toggle="collapse" data-target="#navbar-filter"><i className="icon-menu7"></i></a></li>
            </ul>

            <div className="navbar-collapse collapse" id="navbar-filter">
              <ul className="nav navbar-nav">
                
              <ViewTabs location={this.props.location.pathname} />

              </ul>

            </div>
          </div>

          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="tabbable">
                  <div className="tab-content">

                    <Review />
                    <Edit rendPage={this.mustRend} />

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
    store: state,
		lang: state.lang
  }),
  userActions
)(ProfileEdit)