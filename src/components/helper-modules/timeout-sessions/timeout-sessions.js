
import React from "react";
import {connect } from "react-redux";
import {conf} from "../../../config";

const TimeOutSessions = React.createClass({
    timer:false,
    warningTime: 1000 * 60 * conf.warningTime,
    signoutTime: 1000 * 60 * conf.signoutTime,
    clearTimeoutFunc() {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);
        if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    },
    setTimeout() {
        this.warnTimeout = setTimeout(this.warn, this.warningTime);
        this.logoutTimeout = setTimeout(this.logout, this.signoutTime);
    },
    resetTimeout() {
        this.clearTimeoutFunc();
        if (this.timer) {   
            this.setTimeout();
            //console.log('work:'+this.timer);
            return;    
        }
        //console.log('stop'+this.timer);
        return;      
    },
    warn() {
        var div = document.getElementById('sessionTimeout-dialog');
        div.className = 'modal fade in';
        div.style.display = 'block';
        div = document.getElementById('bl');
        div.style.display='block';
    },
    contine(){
        var div = document.getElementById('sessionTimeout-dialog');
        div.className = 'modal fade';
        div.style.display = 'none';
        div = document.getElementById('bl');
        div.style.display='none';
        this.resetTimeout();
    },

    logout() {
        var div = document.getElementById('exit');
        div.click()
    },

    componentWillUnmount(){
        this.timer = false;
    },

    componentDidMount() {
        var events= [
            'load',
            'mousemove',
            'mousedown',
            'click',
            'scroll',
            'keypress'
        ];

        events.forEach(element => {
            window.addEventListener(element, this.resetTimeout);     
        });
        this.timer = true ;

    },
    render(){
    return (    
        <div className="modal fade" id="sessionTimeout-dialog" >
            <div className="modal-dialog"><div className="modal-content">
                <div className="modal-header">
                    <button type="button" onClick={this.contine} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h5 className="modal-title"></h5>Время истекает</div>
                <div className="modal-body"> Время сессии истекает. Продолжить соединение?</div>
                <div className="modal-footer"><button  onClick={this.contine} type="button" className="btn btn-primary" data-dismiss="modal">Продолжить</button>
                    <button  onClick={this.logout} type="button" className="btn btn-danger"> Выйти</button>
                </div>
            </div>
            </div>
        </div>
    )}
})
export default connect(
	state => ({
		store: state,
	})
)(TimeOutSessions)
