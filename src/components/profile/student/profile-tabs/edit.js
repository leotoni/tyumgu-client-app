import React from "react";
import EditPartComponent from "./edit-parts/edit-part";
import EditPartFileComponent from "./edit-parts/edit-part-file";
import Cookies from 'universal-cookie';
import { connect } from "react-redux";
import { conf } from "../../../../config";
import * as Pnotify from "../../../helper-modules/pnotify/pnotify";

const Edit = React.createClass({
  cookies: new Cookies(),

    componentWillMount() {
        this.state={
            notify: "",
            options:""
        }
    },

    componentDidMount(){
        var token = this.cookies.get('token');
           
        this.setState({options:{
                replacement: '#API_URL#'
                , api: conf.server_api_url.replace('api/v1', '') + 'api/v1'
                , headers: { authorization: token, 'content-type': 'application/json;charset=UTF-8' }
                , responseType: 'json'
                , token
            }})
    },
   
    notifyEvent(answ){

		this.setState({notify:null});
        if (!answ&&answ.status) return;
        if (answ&&answ.status === 200) { 

            this.setState({notify:Pnotify.Success(this.props.lang.success,this.props.lang.data_saved)});
            this.props.rendPage();
            
             var obj =  this.cookies.get('user');
             obj.profileImageURL= this.props.store.user.user.profileImageURL;
             this.cookies.set('user', obj, { path: '/' });
             var tmp = document.getElementById("bl");
             tmp.click();
             console.log(obj.profileImageURL);
            return; 
        }
        if (answ.status === 422||answ.status === 500) {
            this.setState({ notify: Pnotify.Error(this.props.lang.error,this.props.lang.error_net_conn) })
            return;
        }

        

  },

  render() {
    var user = this.cookies.get('user');
    var opts = this.state.options;

    

    return (
        <div className="tab-pane fade" id="edit">
            <div className="profile">
            <div className="panel panel-flat">
            <div className="panel-heading">
                <h6 className="panel-title"> Изменить
                    <a className="heading-elements-toggle">
                        <i className="icon-more"></i>
                    </a>
                </h6>
                <div className="heading-elements"></div>
            </div>
            <div className="panel-body">
                <div className="tabbable">
                    <ul className="nav nav-tabs nav-tabs-highlight">
                        <li className="active"><a href="#social-net-edit" data-toggle="tab" aria-expanded="true">Социальный профиль</a></li>
                        <li className=""><a href="#messenger-edit" data-toggle="tab" aria-expanded="true">Мессенджер</a></li>
                        <li className=""><a href="#contacts-edit" data-toggle="tab" aria-expanded="true">Контактная информация</a></li>
                        <li className=""><a href="#avatar-edit" data-toggle="tab" aria-expanded="true">Аватар</a></li>
                        <li className=""><a href="#layout-edit" data-toggle="tab" aria-expanded="true">Обложка</a></li>
                        {user&&user.roles.indexOf('employee') !== -1 &&(
                            <li className="">
                                <a href="#additional-edit" data-toggle="tab" aria-expanded="true">Дополнительно</a>
                            </li>
                        )}
                        
                    </ul>
                    <div className="tab-content">
                            { /* социальный профиль */ }
                            {opts&&<EditPartComponent
                                id={'social-net-edit'}
                                property={'social'}
                                kind={'profile_social'}
                                api={opts.api}
                                replacement={opts.replacement}
                                headers={opts.headers}
                                responseType={opts.responseType}
                                token={opts.token}
                                enctype={opts.enctype}
                                className={"tab-pane fade in active"}
                                notyfication={this.notifyEvent}
                            />}

                            { /* мессенджер */ }
                            {opts&&<EditPartComponent
                                id={'messenger-edit'}
                                property={'messenger'}
                                kind={'profile_messenger'}
                                api={opts.api}
                                replacement={opts.replacement}
                                headers={opts.headers}
                                responseType={opts.responseType}
                                token={opts.token}
                                enctype={opts.enctype}
                                notyfication={this.notifyEvent}
                            />}

                            { /* контакты */ }
                            {opts&&<EditPartComponent
                                id={'contacts-edit'}
                                property={'contacts'}
                                kind={'profile_contacts'}
                                api={opts.api}
                                replacement={opts.replacement}
                                headers={opts.headers}
                                responseType={opts.responseType}
                                token={opts.token}
                                enctype={opts.enctype}
                                notyfication={this.notifyEvent}
                            />}

                            { /* аватар */ }
                            {opts&&<EditPartFileComponent
                                id={'avatar-edit'}
                                property={'newPicture'}
                                kind={'profile_upload_picture'}
                                api={opts.api}
                                replacement={opts.replacement}
                                headers={{authorization: opts.token, 'content-type': 'multipart/form-data'}}
                                responseType={opts.responseType}
                                token={opts.token}
                                enctype={"multipart/form-data"}
                                notyfication={this.notifyEvent}
                            />}

                            { /* layout */ }
                            {opts&&<EditPartFileComponent
                                id={'layout-edit'}
                                property={'newLayout'}
                                kind={'profile_upload_layout'}
                                api={opts.api}
                                replacement={opts.replacement}
                                headers={{authorization: opts.token, 'content-type': 'multipart/form-data'}}
                                responseType={opts.responseType}
                                token={opts.token}
                                enctype={"multipart/form-data"}
                                notyfication={this.notifyEvent}
                            />}

                            { /* additional */ }
                            { user.roles.indexOf('employee') !== -1?<EditPartComponent
                                    id={'additional-edit'}
                                    property={'additional'}
                                    kind={'profile_additional'}
                                    api={opts.api}
                                    replacement={opts.replacement}
                                    headers={opts.headers}
                                    responseType={opts.responseType}
                                    token={opts.token}
                                    notyfication={this.notifyEvent}
                                />
                                : null}
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
}))(Edit)