import React from "react";
import { conf } from "../../config";
import { connect } from "react-redux";
import { Link } from 'react-router';
import * as userActions from "./actions/users";
import Cookies from 'universal-cookie';
import ProfileImage from '../helper-modules/profile-image';
// import ReactLetterAvatar from '../helper-modules/letter-avatar';

const List = React.createClass(  {
cookies: new Cookies(),

//------------------------Basic function component----------------------// 

componentWillMount(){
    this.state={
		counter:1,
		curuser:"",
		limit:null,
        page1:1,
		page2:2,
        page3:3,
        nameList:"",
        filter:false,
        department:"",
		position:"",
		group:"",	
		entered:""
    }
    this.setState({filter:this.props.filter});	
	this.setState({nameList:this.props.nameList});
	  
    if(this.props.department) this.setState({department:this.props.department});
    if(this.props.position) this.setState({position:this.props.position});    
    if(this.props.entered) this.setState({entered:this.props.entered});
    if(this.props.group) this.setState({group:this.props.group});
},

componentDidMount(){

    
	this.disabledArrow(1);
	this.loadList(1)
	.then(()=>{return this.changePage(1)});
},

componentWillUnmount(){


},

//------------------------/Basic function component----------------------// 

//------------------------For display visual elements--------------------// 


cleanDisbArrows(){
	var div = document.getElementById('arrow_1');
	div.className="paginate_button previous";
    div = document.getElementById('arrow_2');
	div.className="paginate_button next";
},

disabledArrow(i){
	var div = document.getElementById('arrow_'+i);
	div.className+=' disabled';
},

cleanVisiblePage(){
	var div = document.getElementById('page_link_1');
	div.className="paginate_button";
	div = document.getElementById('page_link_2');
	div.className="paginate_button";
    div = document.getElementById('page_link_3');
	div.className="paginate_button";
},

visiblePage(i){
	var div = document.getElementById('page_link_'+i);
	div.className="paginate_button current";
},

userInfo(usr){
	if (usr.type==='graduatestudent') return(
		<ul className="list-extended list-unstyled list-icons">
			<li><i className="icon-users position-left"></i> {usr.group}</li>
			<li><i className="icon-user position-left"></i>Аспирант</li>
			{/* <li><i className="icon-pin position-left"></i> {usr.address}</li> */}
		</ul>
	 )
	if (usr.type==='student') return(
		<ul className="list-extended list-unstyled list-icons">
			<li><i className="icon-users position-left"></i> {usr.group}</li>
			<li><i className="icon-user position-left"></i>Студент</li>
			{/* <li><i className="icon-pin position-left"></i> {usr.address}</li> */}
		</ul>
	 )
	 if (usr.type==='employee') return(
		<ul className="list-extended list-unstyled list-icons">
			<li><i className="icon-user-tie position-left"></i>{usr.position}</li>
			<li><i className="icon-iphone position-left"></i> {usr.workPhone}</li>
			<li><i className="icon-phone2 position-left"></i> {usr.internalPhone}</li>
			{/* <li><i class="icon-pin position-left"></i> {usr.address}</li> */}
		</ul>
	 )
},

findUser() {
	this.applyfilter();
},


closeElements(){
	var elements = document.getElementsByName("elem");
	for (var i = 0; i < elements.length; i++)
	elements[i].className = 'collapse';

},

checkImg(usrt) {
	if (!usrt) return;
    
	let images = usrt
    , staticToken = this.cookies.get('staticToken');

    let src = (images && images.profileImageURL) || null

	return (
      <ProfileImage opts={
        {
          src,
          basePath: conf.server_api_url,
          token: staticToken,
          className: "avat1 ",
          name: usrt.displayName && usrt.displayName[0],
          size: 50,
          radius: 25,
          isReactLetterAvatar: src === null,
        }
      } />
    )
},

maxpage(){
	if (this.limit)
	if (this.state.curuser+parseInt(this.limit.value, 10)-1>this.props.total) return this.props.total
	else return this.state.curuser+parseInt(this.limit.value, 10)-1;
},

spinner(){
	 return(
		<div className="centrew">
			<a className="icon-spinner4 spinner" ></a>
		</div>
	)
},

modalDialogFilter(){
	return(
		<div name="ModalDialogFilter" className="dataTables_length pull-left ">
		<ul className="icons-list">
			<li>
				<button type="button" className="btn btn-default eld12d" data-toggle="modal" data-target="#dep_gl_form" >
					<i className="icon-filter3 "></i>&nbsp; Фильтр
				</button>
				<div id="dep_gl_form" className="modal fade" display="none">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">×</button>
								<h5 className="modal-title">Расширенный поиск</h5>
							</div>
							<form className="form-horizontal">
								<div className="modal-body">
									<div className="form-group">
										<input type="text" ref={(input) => { this.department = input }} id="department" placeholder="Институт/филиал (Отдел)" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" ref={(input) => { this.position = input }} id="position" placeholder="Должность" className="form-control" />
									</div>
									<div className="form-group">
										<input type="text" ref={(input) => { this.group = input }} id="group" placeholder="Учебная группа" className="form-control" />
									</div>
									<div className="form-group">
										<input type="number" ref={(input) => { this.entered = input }} id="entered" placeholder="Год поступления" className="form-control" />
									</div>

								</div>
								<div className="modal-footer">
									<button type="button" onClick={this.cleanFilterProperty} className="btn btn-link" data-dismiss="modal">Отмена </button>
									<button type="submit" onClick={this.applyfilter} className="btn btn-primary" data-dismiss="modal">Найти	</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</li>

			<li>
				<button type="button" onClick={this.cleanFilterProperty} className="btn btn-default eld12d" id="spinner-light-2">
					<i className="icon-x"></i> Очистить
				</button>
			</li>
		</ul>
	</div>
	)
},

//------------------------/for display visual elements-------------------// 

//------------------------ Event for pagination -------------------------//

setPages(a,b,c){
	this.setState({page1:a});
	this.setState({page2:b});
	this.setState({page3:c});
},

nextPage(){
	this.cleanDisbArrows(); this.cleanVisiblePage();
	
	var end_page=Math.ceil(this.props.total/this.limit.value);	
	if (this.state.page3<end_page-3){
		var i=this.state.page3+2;
		this.setPages(i-1,i,i+1);
		this.visiblePage(2);
		return this.loadList(i);
	}

	if(end_page>3)
	{
		this.setPages(end_page-2,end_page-1,end_page);
		if(this.state.page3===end_page) {
			this.visiblePage(3);
			this.disabledArrow(2);
			return this.loadList(end_page);
		}
		else this.visiblePage(2);
		return this.loadList(end_page-1);
	}else{

		if (end_page===3){
			this.setPages(end_page-2,end_page-1,end_page)
			this.disabledArrow(2);
			this.visiblePage(3);
			return;
		}
		if (end_page===2){
			this.setPages(end_page-1,end_page,"")
			this.disabledArrow(2);
			this.visiblePage(2);
		}else{
			this.setPages("",end_page,"")
			this.disabledArrow(1);
			this.disabledArrow(2);
			this.visiblePage(2);
		}

	}
	
},

backtPage(){
	this.cleanVisiblePage(); this.cleanDisbArrows();
	var end_page=Math.ceil(this.props.total/this.limit.value);	

	if (end_page<3)
	if (end_page===2){
		this.setPages(end_page-1,end_page,"")
		this.disabledArrow(1);
		this.visiblePage(1);
		return;
	}else{
		this.setPages("",end_page,"")
		this.disabledArrow(1);
		this.disabledArrow(2);
		this.visiblePage(2);
		return;
	}

	if (this.state.page1<5){
		if (this.state.page1!==1){
			this.setPages(1,2,3);
			this.visiblePage(2);
			return this.loadList(2);
		}else {
			this.visiblePage(1);
			this.disabledArrow(1);
			return this.loadList(1);
		}
	}
	else{
		var i=this.state.page1-2;
		this.setPages(i-1,i,i+1);
		this.visiblePage(2);
		return this.loadList(i);
	}		
},

changePage(i){
	if (i===""||i<=0) return;
	this.cleanVisiblePage();
	this.cleanDisbArrows();
	var end_page=Math.ceil(this.props.total/this.limit.value);

	if (end_page<3){
		if (end_page===1){
			this.visiblePage(2);
			this.disabledArrow(1);
			this.disabledArrow(2);
			this.setPages("",1,"");
			return this.loadList(1);
		}
		if (end_page===2){
			this.setPages(1,2,"");
			if(i===1) {
				this.visiblePage(1);
				this.disabledArrow(1);
				this.visiblePage(1);
			}
			if(i===2) {
				this.visiblePage(2); 
				this.disabledArrow(2);
				this.visiblePage(2);
			}
			return this.loadList(i); 
		}
	}

	if (i===1){
		this.visiblePage(1);
		this.disabledArrow(1);
		this.setPages(1,2,3);
		return this.loadList(i);
	}
	if(i===end_page){
		this.visiblePage(3);
		this.disabledArrow(2);
		this.setPages(end_page-2,end_page-1,end_page);
		return this.loadList(i);
	}
	if(i<end_page){
		this.visiblePage(2);
		this.setPages(i-1,i,i+1);
		return this.loadList(i);
	}
	return;
},

selectPage(un){
	var res=Math.ceil(un/this.limit.value) 
	this.changePage(res);
},

applyfilter(){
	return this.changePage(1)
	.then(e=>{
		this.cleanVisiblePage();
		var end_page=Math.ceil(this.props.total/this.limit.value);
		if (end_page<3){
			if (end_page===1){
				this.visiblePage(2);
				this.disabledArrow(1);
				this.disabledArrow(2);
				this.setPages("",1,"");
				return; 
			}
			if (end_page===2){
				this.visiblePage(1);
				this.disabledArrow(1);
				this.setPages(1,2,"");
				return; 
			}
		}
	});
},

cleanFilterProperty(){
	this.displayName.value="";
	this.department.value="";
	this.position.value="";
	this.group.value="";
	this.entered.value="";
	return this.applyfilter();
},

//---------------------------/Event for pagination -----------------------//

//-----------------------------Main func--------------------------------- //

loadList(currentPage){
	this.closeElements();
	var lim =((currentPage-1)*parseInt(this.limit.value, 10))+1;	
  
	if(!this.state.filter){
	    return this.props.getUsers(this.cookies.get('token'),this.limit.value,currentPage>1?lim:0,
		this.displayName.value,this.state.department,this.state.position,this.state.group,this.state.entered)
		.then((answ) =>{ 
			this.setState({curuser:lim});
		});
	}
	else{
		return this.props.getUsers(this.cookies.get('token'),this.limit.value,currentPage>1?lim:0,
	    this.displayName.value,this.department.value,this.position.value,this.group.value,this.entered.value)
		.then((answ) =>{
			this.setState({curuser:lim});
		});
	}
	
},

//-----------------------------/Main func--------------------------------- //

render() {
return(
<div>
		<div className="row">
			<div className="col-md-12">
				<div className="panel panel-flat space_for_footer">
					<div className="panel-heading">
						<h5 className="panel-title">{this.state.nameList}
						<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
						<div className="heading-elements"> </div>
					</div>

					<div className="datatable-header">
						<div id="DataTables_Table_0_filter" className="dataTables_filter">
							<label>
								<input type="search" ref={(input) => { this.displayName = input }} onChange={this.findUser}
									className="width_for_inp" placeholder="Введите ФИО для поиска" />
							</label>
						</div>
						{this.state.filter&&this.modalDialogFilter()}
				
						<div className="dataTables_length" >
							<label>
								<select defaultValue="20" ref={(input) => { this.limit = input }} onChange={() => this.selectPage(this.state.curuser)} className="myselect" aria-hidden="true">
									<option value="5">5</option>
									<option value="10">10</option>
									<option value="15">15</option>
									<option value="20">20</option>
									<option value="25">25</option>
								</select>
							</label>
						</div>
					</div>
					<ul className="media-list media-list-linked">
						{!this.props.store ? this.spinner() : this.props.store.map((usr, i) =>
							<li className="media" key={i} >
								<div className="media-link cursor-pointer collapsed" aria-expanded="false" data-toggle="collapse" data-target={`#user${i}`} >
									<div className="media-left" onClick={()=>{return this.props.setUserID(usr.id);}}>
										<Link to={`/profile/${usr.username}`}>
											{this.checkImg(usr)}
										</Link>
									</div>
									<div className="media-body" onClick={()=>{return this.props.setUserID(usr.id);}} >
										<div className="media-heading text-semibold">		
											<Link to={`/profile/${usr.username}`}>
												{usr.displayName}
											</Link></div>
										<span className="text-muted">{usr.department}</span>
									</div>
									<div className="media-right media-middle text-nowrap">
										<i className="icon-menu7 display-block"></i>
									</div>
								</div>

								<div className="collapse" name="elem" id={`user${i}`} aria-expanded="false" >
									<div className="contact-details">
										{this.userInfo(usr)}
									</div>
								</div>
							</li>
						)}

					</ul>

					<div className="datatable-footer">

						<span className="heading-text text-semibold">
							Просмотр {this.state.curuser} - {this.maxpage()} из {this.props.total && this.props.total} активных пользователей
						</span>


						<div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
							<a className="paginate_button previous" onClick={this.backtPage} id="arrow_1">←</a>
							<span>
								<a className="paginate_button " onClick={() => this.changePage(this.state.page1)} id="page_link_1" >{this.state.page1}</a>
								<a className="paginate_button" onClick={() => this.changePage(this.state.page2)} id="page_link_2" >{this.state.page2}</a>
								<a className="paginate_button" onClick={() => this.changePage(this.state.page3)} id="page_link_3" >{this.state.page3}</a>
							</span>
							<a className="paginate_button next" onClick={this.nextPage} id="arrow_2">→</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
		)
	}
})
export default connect(
	state => ({
		store:state.userMass.users,
		total:state.userMass.total
  }),(
	userActions
))(List)