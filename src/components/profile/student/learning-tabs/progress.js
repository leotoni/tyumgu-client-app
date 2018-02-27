import React from "react";


const Progress = React.createClass({

componentDidMount(){
    // var pts=this.props.ph;
    // var div= document.getElementById('progress');
    // if (pts.includes('progress'))div.className='tab-pane fade in active'
    // else div.className='tab-pane fade'
},
  render() {
    return (
        <div className="tab-pane fade" id="progress">
            
            <div className="timeline timeline-left content-group">
                <div className="timeline-container">
                    <div id="buddypress">
                        <div className="activity" aria-live="polite" aria-atomic="true" aria-relevant="all">
                            <div className="timeline-row info" id="message">
                                <div className="timeline-icon">
                                    <div className="bg-info-400">
                                        <i className="icon-info3"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="panel panel-flat timeline-content">
                                            <div className="panel-body">
                                                <div className="alert alert-info no-border">
                                                    <button type="button" className="close" data-dismiss="alert">
                                                        <span>×</span>
                                                        <span className="sr-only">Закрыть</span>
                                                    </button> Извините, но на данный момент нам нечего вам показать. Попробуйте использовать другой
                                            фильтр или зайти попозже.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="" name="activity-loop-form" id="activity-loop-form" method="post">
                                <input type="hidden" id="_wpnonce_activity_filter" name="_wpnonce_activity_filter" value="dbe059f4e7" />
                                <input type="hidden" name="_wp_http_referer" value="/users/leonrov/activity/mentions/" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )
  }
})

export default Progress;
