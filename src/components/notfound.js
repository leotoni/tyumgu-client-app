import React from "react";
import { conf } from "../config";
import { connect } from "react-redux";



const NotFound = React.createClass({

	yearsFooter() {
		
		var now = new Date();
		if (conf.footer_label.start_years === now.getFullYear()) {
			return now.getFullYear();
		}
		else return conf.footer_label.start_years + " - " + now.getFullYear();
	},	
	componentDidMount() { 
		//console.log(this);
		
	},
	render() {
		return (
			<div>
			<div className="page-container my-vertical-size">
				<div className="page-content ">
					<div className="content">

						<div className="text-center content-group">
							<h1 className="error-title">404</h1>
								<h5>{this.props.lang.page_not_found}</h5>
						</div>

						<div className="row">
							<div className="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3">
								<form action="#" className="main-search">
									{/* <div className="input-group content-group">
										<input type="text" className="form-control input-lg" placeholder="Search" />
										<div className="input-group-btn">
											<button type="submit" className="btn bg-slate-600 btn-icon btn-lg"><i className="icon-search4"></i></button>
										</div>
									</div> */}

									<div className="row">
										<div className="col-sm-6">
											<a href="#" className="btn btn-primary btn-block content-group"><i className="icon-circle-left2 position-left"></i>{this.props.lang.back_to_home_page}</a>
										</div>

										<div className="col-sm-6">
											<a href="#" className="btn btn-default btn-block content-group"><i className="icon-menu7 position-left"></i>{this.props.lang.site_map}</a>
										</div>
									</div>
								</form>
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
		store: state,
		lang: state.lang
	})
)(NotFound)
