import React, { Component } from 'react'
import { connect } from "react-redux"

class AddPublication extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="add">
                <div className="content">
                    <div className="panel panel-white">
                        <div className="panel-heading">
                            <h6 className="panel-title">
                                Добавить публикацию
                                <a className="heading-elements-toggle"><i className="icon-more"></i></a>
                            </h6>
                            <div className="heading-elements"></div>
                        </div>
                        <div className="panel-body">
                            <div className="timeline timeline-left content-group">
                                <div className="timeline-container">
                                    <div id="buddypress">
                                        <div className="activity" aria-live="polite" aria-atomic="true" aria-relevant="all">
                                            <div className="timeline-row info" id="message">
                                                <div className="timeline-icon">
                                                    <div className="bg-info-400"><i className="icon-info3"></i></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="panel panel-flat timeline-content">
                                                            <div className="panel-body">
                                                                <div className="alert alert-info no-border">
                                                                    <button type="button" className="close" data-dismiss="alert">
                                                                        <span>×</span>
                                                                        <span className="sr-only">Закрыть</span>
                                                                    </button>
                                                                    Извините, но на данный момент данный функционал в стадии тестирования и отладки. Попробуйте зайти позже.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AddPublication)