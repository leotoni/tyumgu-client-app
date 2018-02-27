import React, { Component } from 'react';
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import Cookies from 'universal-cookie';
import Profile from '../../profile'

import ViewTabs from '../view-tabs';
import ReviewPublications from './review'
import AddPublication from './add'

/**
 * Компонент публикаций пользователя
 */
class PublicationTabs extends Component {
  constructor(props) {
    super(props)

    this.cookies = new Cookies()
  }

  /**
   * @inheritDoc
   */
  componentWillMount() {
    this.setState({ notify : "", location: "" })
    this.state={
      notify:"",
      location:""
		}
  }

  shouldComponentUpdate(nextProps, nextState){
    var b = true;
    b = this.state.location!==nextProps.location;
    this.setState({location:nextProps.location});

    return b;
  }

  render() {
    return (
    <div>
         <Profile location={this.props.location.pathname} log={this.props.params.log} />
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
                    <ReviewPublications />
                    <AddPublication />
                  </div>
                </div>
              </div>   
            </div>
          </div>

        {this.state.notify}
    </div>
    )
  }
}

export default connect(
  state => ({
    store: state,
		lang: state.lang
  }),
  userActions
)(PublicationTabs)