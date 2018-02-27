import React from "react";
import './timetable.css';
// import MyEditor from '../text-editor/my-editor';


const Timetable = React.createClass({
  componentWillMount() {
    this.state = {
    }
  },
  componentDidMount(){
      // var div = document.getElementById('timetable');
      // if (this.props.ph.includes('timetable')) div.className='tab-pane fade in active';
  },
  
  render() {
    return (
      <div className="tab-pane fade in active" id="timetable">
      
        <div className="panel panel-white">
          <div className="panel-heading">
            <h6 className="panel-title" > Расписание</h6>
            <button type="button" id="send-timetable-notice" className="btn btn-info btn-labeled btn-xs pull-right"
              data-toggle="modal" data-target="#mail-to-admin">
              <b>
                <i className="icon-mail5"></i>
              </b> Сообщить о неточности в расписании</button>
            <div id="mail-to-admin" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Сообщить о неточности в расписании</h4>
                  </div>
                  <div className="modal-body">
                    <form action="post" className="mail-sender">
                      <textarea name="mail_message" id="" cols="30" rows="10" className="form-control mail-message" placeholder="Опишите, пожалуйста подробно в каком случае и при каких условиях возникает или отображается ошибка, либо обнаружена неточность в расписании."
                        pattern=".{10,}" minLength="10" required=""></textarea>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="submit" className="btn btn-success">Отправить
                                <i className="icon-arrow-right14 position-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="fullcalendar-basic fc fc-unthemed fc-ltr">
              <div className="fc-toolbar">
                <div className="fc-left">
                  <div className="fc-button-group">
                    <button type="button" className="fc-prev-button fc-button fc-state-default fc-corner-left">
                      <span className="fc-icon fc-icon-left-single-arrow"></span>
                    </button>
                    <button type="button" className="fc-next-button fc-button fc-state-default fc-corner-right">
                      <span className="fc-icon fc-icon-right-single-arrow"></span>
                    </button>
                  </div>
                  <button type="button" className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled"
                    disabled="">Сегодня</button>
                </div>
                <div className="fc-right">
                  <div className="fc-button-group">
                    <button type="button" className="fc-agendaWeek-button fc-button fc-state-default fc-corner-left fc-state-active">Неделя</button>
                    <button type="button" className="fc-agendaDay-button fc-button fc-state-default fc-corner-right">День</button>
                  </div>
                </div>
                <div className="fc-center">
                  <h2>22 – 28 янв. 2018 г.</h2>
                  <p id="week-property" fontSize="20px">/ Числитель /</p>
                </div>
                <div className="fc-clear"></div>
              </div>
              <div className="fc-view-container"  >
                <div className="fc-view fc-agendaWeek-view fc-agenda-view"  >
                  <table>
                    <thead className="fc-head">
                      <tr>
                        <td className="fc-head-container fc-widget-header">
                          <div className="fc-row fc-widget-header" >
                            <table>
                              <thead>
                                <tr>
                                  <th className="fc-axis fc-widget-header" width="62px"></th>
                                  <th className="fc-day-header fc-widget-header fc-mon" data-date="2018-01-22">пн 22.1</th>
                                  <th className="fc-day-header fc-widget-header fc-tue" data-date="2018-01-23">вт 23.1</th>
                                  <th className="fc-day-header fc-widget-header fc-wed" data-date="2018-01-24">ср 24.1</th>
                                  <th className="fc-day-header fc-widget-header fc-thu" data-date="2018-01-25">чт 25.1</th>
                                  <th className="fc-day-header fc-widget-header fc-fri" data-date="2018-01-26">пт 26.1</th>
                                  <th className="fc-day-header fc-widget-header fc-sat" data-date="2018-01-27">сб 27.1</th>
                                  <th className="fc-day-header fc-widget-header fc-sun" data-date="2018-01-28">вс 28.1</th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody className="fc-body">
                      <tr>
                        <td className="fc-widget-content">
                          <div className="fc-day-grid fc-unselectable">
                            <div id="fcwdcq" className="fc-row fc-week fc-widget-content" >
                              <div className="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="fc-axis fc-widget-content" width="62px">
                                        <span>Весь день</span>
                                      </td>
                                      <td className="fc-day fc-widget-content fc-mon fc-past" data-date="2018-01-22"></td>
                                      <td className="fc-day fc-widget-content fc-tue fc-past"
                                        data-date="2018-01-23"></td>
                                      <td className="fc-day fc-widget-content fc-wed fc-past"
                                        data-date="2018-01-24"></td>
                                      <td className="fc-day fc-widget-content fc-thu fc-today fc-state-highlight"
                                        data-date="2018-01-25"></td>
                                      <td className="fc-day fc-widget-content fc-fri fc-future"
                                        data-date="2018-01-26"></td>
                                      <td className="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2018-01-27"></td>
                                      <td className="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2018-01-28"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-content-skeleton">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="fc-axis" width="62px"></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <hr className="fc-divider fc-widget-header" />
                          <div className="fc-scroller fc-time-grid-container" >
                            <div className="fc-time-grid fc-unselectable">
                              <div className="fc-bg">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="fc-axis fc-widget-content" width="62px"></td>
                                      <td className="fc-day fc-widget-content fc-mon fc-past"
                                        data-date="2018-01-22"></td>
                                      <td className="fc-day fc-widget-content fc-tue fc-past"
                                        data-date="2018-01-23"></td>
                                      <td className="fc-day fc-widget-content fc-wed fc-past"
                                        data-date="2018-01-24"></td>
                                      <td className="fc-day fc-widget-content fc-thu fc-today fc-state-highlight"
                                        data-date="2018-01-25"></td>
                                      <td className="fc-day fc-widget-content fc-fri fc-future"
                                        data-date="2018-01-26"></td>
                                      <td className="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2018-01-27"></td>
                                      <td className="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2018-01-28"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-slats">
                                <table>
                                  <tbody>
                                    <tr data-time="08:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>08</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="08:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="09:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>09</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="09:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="10:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>10</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="10:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="11:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>11</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="11:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="12:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>12</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="12:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="13:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>13</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="13:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="14:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>14</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="14:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="15:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>15</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="15:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="16:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>16</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="16:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="17:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>17</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="17:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="18:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>18</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="18:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="19:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>19</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="19:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="20:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>20</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="20:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="21:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>21</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="21:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="22:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>22</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="22:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="23:00:00">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px">
                                        <span>23</span>
                                      </td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                    <tr data-time="23:30:00" className="fc-minor">
                                      <td className="fc-axis fc-time fc-widget-content" width="62px"></td>
                                      <td className="fc-widget-content"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="fc-content-skeleton">
                                <table>
                                  <tbody>
                                    <tr>
                                      <td className="fc-axis" width="62px">
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="fc-content-col">
                                          <div className="fc-event-container fc-helper-container"></div>
                                          <div className="fc-event-container"></div>
                                          <div className="fc-highlight-container"></div>
                                          <div className="fc-bgevent-container"></div>
                                          <div className="fc-business-container"></div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <hr className="fc-divider fc-widget-header" display="none" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <a className="heading-elements-toggle">
              <i className="icon-more"></i>
            </a>
            <div className="heading-elements">
              <span className="heading-text text-semibold"></span>
              <span className="heading-text pull-right"></span>
            </div>
          </div>
        </div>
        <div id="message-success" className="modal fade" role="dialog" data-backdrop="static">
          <div className="alert info notice">
            <p>
              <strong>Успешно!</strong> Спасибо, ваше сообщение успешно отправлено получателю.</p>
          </div>
        </div>
        <div id="message-restrict" className="modal fade" role="dialog" data-backdrop="static">
          <div className="alert info notice">
            <p>
              <strong>Ошибка!</strong> Вы не можете отправлять письма чаще чем один раз в пять минут.</p>
          </div>
        </div>
        </div>
     

    )
  }
})

export default Timetable;

