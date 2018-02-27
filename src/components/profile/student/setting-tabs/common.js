import React from "react";
// import MyEditor from '../text-editor/my-editor';


const Common = React.createClass({
  componentWillMount() {		
		this.state={
		  }
  },

  render() {
    return (
      <div className="tab-pane fade" id="common">
        <div className="timeline timeline-left content-group">
          <div className="timeline-container">
            <div id="buddypress">
              <form action="https://student.utmn.ru/livestream/post/" method="post" id="whats-new-form" name="whats-new-form" role="complementary">
                <div className="timeline-row">
                  <div className="timeline-icon">
                    <a href="https://student.utmn.ru/users/leonrov/">
                      <img alt='Рисунок профиля (Леонид Ровкин)' src='https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1083.png'
                        className='avatar avatar-50 photo bpfla' width='50' height='50' /> </a>
                  </div>
                  <div className="panel panel-flat timeline-content">
                    <div className="panel-heading">
                      <h6 className="panel-title"> Что нового, Леонид Ровкин?</h6>
                    </div>
                    <div className="panel-body">

                    <div className="form-group">
                     
                    </div>

                      <div className="row">
                        <div className="col-xs-6"></div>
                        <div className="col-xs-6 text-right">
                          <button type="submit" className="btn bg-teal-400 btn-labeled btn-labeled-right">
                            <b>
                              <i className="icon-circle-right2"></i>
                            </b> Опубликовать</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            
                 
            </div>
          </div>
        </div>
      </div>

    )
  }
})

export default Common;
  
