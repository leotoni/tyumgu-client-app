import React from 'react';
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import Cookies from 'universal-cookie';
import Profile from '../../profile';
import Timetable from './timetable';
import Portfolio from './portfolio';
import Progress from './progress';
import Grouplearning from './grouplearning';

const Learning = React.createClass({
  cookies : new Cookies(),
  componentWillMount() {
    this.state={
        notify:"",
        count:0,
		}
  },
  tabsEvent(i){
   
  },
  setTabs(p){
    var tl = document.getElementById('tab-links');
    if (p.includes('timetable')) tl.childNodes[0].children[0].click();
    if (p.includes('progress')) tl.childNodes[1].children[0].click();
    if (p.includes('portfolio')) tl.childNodes[2].children[0].click();
    if (p.includes('grouplearning')) tl.childNodes[3].children[0].click();
  },
  componentDidMount() { 
    this.setTabs(this.props.route.path);
    
    
      // var tl = document.getElementById('upd');
      // var  v = tl.children[3].children[1];

      // //---------for learning-tabs-------------//
      
      //     v.children[0].addEventListener('click', ()=> {
      //         var tl = document.getElementById('tab-links');
      //         if (tl) tl.childNodes[0].children[0].click();  
      //     });
      //     v.children[1].addEventListener('click', ()=> {
      //         var tl = document.getElementById('tab-links');
      //         if (tl) tl.childNodes[1].children[0].click();  
      //     });
      //     v.children[2].addEventListener('click', ()=> {
      //         var tl = document.getElementById('tab-links');
      //         if (tl) tl.childNodes[2].children[0].click();  
      //     });
      
      //     v.children[3].addEventListener('click', ()=> {
      //         var tl = document.getElementById('tab-links');
      //         if (tl) tl.childNodes[3].children[0].click();  
      //     });
  
              

    var div= document.getElementById('brbr')
    div.addEventListener('click', (i)=> {
      var tl = document.getElementById('tab-links');
      if (tl) tl.childNodes[0].children[0].click()
    })

  },
  render() {
    
    return (
      <div>
        <Profile location={this.props.location.pathname} log={this.props.params.log}/>
        <div className="navbar navbar-default navbar-xs content-group">
          <ul className="nav navbar-nav visible-xs-block">
            <li className="full-width text-center"><a data-toggle="collapse" data-target="#navbar-filter"><i className="icon-menu7"></i></a></li>
          </ul>

          <div className="navbar-collapse collapse" id="navbar-filter">
            <ul id="tab-links" className="nav navbar-nav">
              <li><a href="#timetable" data-toggle="tab">Расписание</a></li>
              <li><a href="#progress" data-toggle="tab"> Успеваемость </a></li>
              <li><a href="#portfolio" data-toggle="tab"> Портфолио </a></li>
              <li><a href="#grouplearning" data-toggle="tab"> Учебная группа </a></li>
            </ul>

          
          </div>
        </div>

         <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">

                  <Timetable />
                  <Portfolio />
                  <Progress  />
                  <Grouplearning />
  
                </div>
              </div>
            </div>
          </div>
        </div>
       

        {this.state.notify}
      
        <br id="brbr" />
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
)(Learning)

