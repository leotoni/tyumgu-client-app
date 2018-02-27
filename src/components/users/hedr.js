import React from 'react';
import { Link } from 'react-router';


const HedrList = React.createClass({

componentDidMount(){

},
render() {
    return(
    <div className="page-header page-header-default" >
            <div className="page-header-content">
                <div className="page-title">
                    <h4> <i className="icon-arrow-left52 position-left"></i>
                        <span className="text-semibold">Общение</span> - Участники</h4>
                    <a className="heading-elements-toggle"><i className="icon-more"></i></a>
                </div>
                <div className="heading-elements">
                    <div className="heading-btn-group"></div></div></div>
            <div className="breadcrumb-line">
                <a className="breadcrumb-elements-toggle"><i className="icon-menu-open"></i></a>
                <ul className="breadcrumb"  >
                    <li> <Link to='/desktop'> <i className="icon-home2 position-left"></i> Главная </Link> </li>
                    <li className="active">Участники</li>
                </ul>
            </div>
    </div>)
}});

export default (HedrList)