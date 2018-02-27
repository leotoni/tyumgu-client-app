import React from "react";
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import * as MenuActions from "./actions/menu";
import { Link } from 'react-router';

const Menu = React.createClass({
    cookies: new Cookies(),
    componentWillMount() {
        this.state = {
            myMenu:false
        }
    },
    setMenu() {
        var side_elrments = document.getElementsByName("side-elem");
        for (var i = 0; i < side_elrments.length; i++)
            side_elrments[i].addEventListener('click', function () {

                if (this.childNodes[0].className === "has-ds") {
                    for (var j = 1; j < side_elrments.length; j++) {
                        if (side_elrments[j].className.includes('active')) {
                            side_elrments[j].className = side_elrments[j].className.replace('active', '');
                            side_elrments[j].children[1].style.display = 'none';
                        }
                    }
                    return;
                }
                if (this.className.includes('active')) {
                    this.className = this.className.replace('active', '');
                    this.children[1].style.display = 'none';
                }
                else {
                    for (var l = 0; l < side_elrments.length; l++) {
                        if (side_elrments[l].className.includes('active')) {
                            side_elrments[l].className = side_elrments[l].className.replace('active', '');
                            side_elrments[l].children[1].style.display = 'none';
                        }
                    }
                    this.className = 'active';
                    this.children[1].style.display = 'block';

                }
            });
    },
    createMenu(){
        var lang= this.props.lang;
        var res = this.props.Menu.map((el)=>{
            if (el.target==="/")
            {   
                
                return(
                    <li name="side-elem" key={el.id}>
                    <Link to='/desktop' className="has-ds"><i className="icon-">{this.convertUnicode(el.icon)}</i> 
                    <span>{el.description[lang.lg]}</span></Link>
                    </li>
                )
            }
            
            if (el.target==="#"){ 
                return(
                    <li name="side-elem" key={el.id}>
                    <a href="#" className="has-ul">
                        <i className="icon-">{el.icon?this.convertUnicode(el.icon):this.convertUnicode('ec1d')}</i>
                        <span>{el.description[lang.lg]}</span></a>
                        <ul className="hidden-ul">
                        {el.children.map((cl)=>{
                            
                            if (cl.target.includes("###user_id###"))
                            {
                                var usr = this.cookies.get('user');
                                cl.target = cl.target.replace("###user_id###",usr.username);
                            
                            }
                            return(<li key={cl._id} ><Link to={cl.target}>{cl.description[lang.lg]} </Link></li>)
                        })}
                    </ul>
                </li>)
            }
            return "";
        })
        return  res;
    },
    convertUnicode(input) {
        return input.replace(/(\w{4,4})/g,function(a,b) {
          var charcode = parseInt(b,16);
          return String.fromCharCode(charcode);
        });
    },
    componentDidMount() {      
        this.props.getMenu(this.cookies.get('token'))
        .then(()=>{this.setMenu();})
    },
    render() {
        try {
            return (
                <div>
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-content no-padding">
                            <ul id="upd" className="navigation navigation-main navigation-accordion">
                                <li className="navigation-header">
                                    <span>{this.props.Menu[0]&&this.props.lang&&this.props.Menu[0].description[this.props.lang.lg]}</span>
                                    <i className="icon-menu" title="" data-original-title="Меню"></i></li>
                                    {this.props.Menu&&this.createMenu()}
    
                            </ul>
                        </div>
                    </div>
                </div>
    
            )
        } catch (e) {
            console.log(e)
            return
        }
    }
})

export default connect(
    state => ({
        User:state.user,
        Menu: state.menu,
		lang:state.lang
    }),
    MenuActions
)(Menu)
