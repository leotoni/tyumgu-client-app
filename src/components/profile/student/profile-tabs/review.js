import React from "react";
import {connect } from "react-redux";
import * as userActions from "../../actions/user-load";
import moment from 'moment';
import _ from 'lodash'

const Review = React.createClass({

 componentWillMount() {
    this.state={
      myUser:"",
      mass:""
	}
  },

componentWillReceiveProps(nextProps) {
   // this.props.renderPage(false);  
   // return this.componentDidMount();
},

findValueInObject(obj){
    var b= false;
     Object.keys(obj).forEach(key => {
        if(obj[key]!==null){ b = true}
    })
    return b;
},

viewValues(elem) {
    return Array.isArray(elem)?elem.map((obj, index) => {
            return typeof obj === 'object'? Object.entries(obj).map(([key, value]) => {
                    return value&&(<li key={key}>{value}</li>)
                }): <li key={index}>{obj}</li>
        }): elem
},

render(){
    var user = this.props.user;
    var lang = this.props.lang;
  
return(
    <div className="tab-pane fade in active" id="review">
    
       <div className="profile">
           <div className="panel panel-flat">
               <div className="panel-heading">
                 
                   <div className="heading-elements"></div>
               </div>
               <div className="panel-body">
                   <div className="tabbable">
                       
                       <ul className="hui nav nav-tabs nav-tabs-highlight">
                            {user.id&&Object.keys(user).map((property,i) => {
                                let props = property;
                                property = property.charAt(0).toUpperCase() + property.slice(1);        
                                const isEmptyObject = !_.values(user[props]).some(item => !!item);
                                var r = true;
                                /**
                                * Не рендерим лишние вкладки
                                * 
                                */
                                
                                if (['Id', 'User'].indexOf(property) !== -1 || isEmptyObject) r = false;
                                const tabName = (lang.lg==='ru' && lang[property]) || property;

                                return r&&( <li className={i===2?"active":""} key={i}>
                                        <a href={`#fade-tab${i}`} data-toggle="tab" aria-expanded="true">{tabName}</a>
                                    </li>
                                    );
                                })
                            }
                       </ul>
                       <div className="tab-content ">                        
                       {
                           user.id&&Object.keys(user).map((property,i) => {
                                let props = property;
                                const isEmptyObject = !_.values(user[props]).some(item => !!item);
                                var b = true;
                                if (['id', 'user'].indexOf(property) !== -1 || isEmptyObject) b = false;
                                let counter = 0;    
                                return b&&(
                                    <div className={i===2?"tab-pane fade active in":"tab-pane fade"} id={`fade-tab${i}`} key={i}>
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <tbody>
                                                {Object.keys(user[property]).map((params,j)=>{
                                                        //console.log(params);
                                                        var obj = user[property];
                                                        var par_to_upper = params.charAt(0).toUpperCase() + params.slice(1);
                                                        
                                                        if (par_to_upper==='Birthday') {
                                                            var d = moment(obj[params]);
                                                            obj[params] = d.format('MM.DD.YYYY');
                                                        }
                                                        b = true;

                                                        if (!obj[params]||obj[params]===null) b=false;
                                                        
                                                        if (par_to_upper==='GraduateStudent'&&par_to_upper==='Roles') b=false;
                                                        
                                                        b&&counter++;
                                                        
                                                        return b&&(<tr key={j}>
                                                        <td width='40%' className={counter===1&&'no_border'}>{lang[par_to_upper]?lang[par_to_upper]:par_to_upper}</td>
                                                        <td width='60%' className={counter===1&&'no_border'}><ul>{this.viewValues(obj[params])}</ul></td>
                                                        </tr>)})}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       </div>
                   </div>
               </div>
           </div>
      
   </div>
    </div>
)}})

export default connect(
    state => ({
      user: state.user,
      lang: state.lang
    }),
    userActions
)(Review)
  
  
  
