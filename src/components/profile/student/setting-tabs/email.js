import React from "react";


const Email= React.createClass({
render(){
return(
    <div className="tab-pane fade in active" id="notifications">
       <div className="content">
    <div className="panel panel-white">
        <div className="panel-heading">
            <h6 className="panel-title"> Настройки уведомлений
                <a className="heading-elements-toggle">
                    <i className="icon-more"></i>
                </a>
            </h6>
            <div className="heading-elements"></div>
        </div>
        <div className="panel-body">
            <namem action="https://student.utmn.ru/users/leonrov/settings/notifications" method="post" className="standard-namem" id="settings-namem">
                <p>Отправить по e-mail уведомление, когда:</p>
                <table className="notification-settings table table-hover" id="activity-notification-settings">
                    <thead>
                        <tr className="bg-teal-400">
                            <th></th>
                            <th className="title col-md-10">Активность</th>
                            <th className="yes col-md-1">Да</th>
                            <th className="no col-md-1">Нет</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="activity-notification-settings-mentions">
                            <td></td>
                            <td>Пользователь упомянул вас в своем статусе используя "@leonrov"</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_activity_new_mention]" id="notification-activity-new-mention-yes"
                                    value="yes" />
                                <label name="notification-activity-new-mention-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_activity_new_mention]" id="notification-activity-new-mention-no"
                                    value="no"/>
                                <label name="notification-activity-new-mention-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                        <tr id="activity-notification-settings-replies">
                            <td></td>
                            <td>Пользователь ответил на ваш статус или комментарий</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_activity_new_reply]" id="notification-activity-new-reply-yes"
                                    value="yes" />
                                <label name="notification-activity-new-reply-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_activity_new_reply]" id="notification-activity-new-reply-no"
                                    value="no"/>
                                <label name="notification-activity-new-reply-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="notification-settings table table-hover" id="messages-notification-settings">
                    <thead>
                        <tr className="bg-teal-400">
                            <th></th>
                            <th className="title col-md-10">Сообщения</th>
                            <th className="yes col-md-1">Да</th>
                            <th className="no col-md-1">Нет</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="messages-notification-settings-new-message">
                            <td></td>
                            <td>Пользователь отправил вам новое сообщение</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_messages_new_message]" id="notification-messages-new-messages-yes"
                                    value="yes" />
                                <label name="notification-messages-new-messages-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_messages_new_message]" id="notification-messages-new-messages-no"
                                    value="no"/>
                                <label name="notification-messages-new-messages-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="notification-settings table table-hover" id="groups-notification-settings">
                    <thead>
                        <tr className="bg-teal-400">
                            <th></th>
                            <th className="title col-md-10">Группы</th>
                            <th className="yes col-md-1">Да</th>
                            <th className="no col-md-1">Нет</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="groups-notification-settings-invitation">
                            <td></td>
                            <td>Пользователь приглашает вас присоединиться к группе</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_groups_invite]" id="notification-groups-invite-yes"
                                    value="yes" />
                                <label name="notification-groups-invite-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_groups_invite]" id="notification-groups-invite-no"
                                    value="no"/>
                                <label name="notification-groups-invite-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                        <tr id="groups-notification-settings-info-updated">
                            <td></td>
                            <td>Обновлена информация о группе</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_groups_group_updated]" id="notification-groups-group-updated-yes"
                                    value="yes" />
                                <label name="notification-groups-group-updated-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_groups_group_updated]" id="notification-groups-group-updated-no"
                                    value="no"/>
                                <label name="notification-groups-group-updated-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                        <tr id="groups-notification-settings-promoted">
                            <td></td>
                            <td>Вас назначили администратором или модератором группы</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_groups_admin_promotion]" id="notification-groups-admin-promotion-yes"
                                    value="yes" />
                                <label name="notification-groups-admin-promotion-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_groups_admin_promotion]" id="notification-groups-admin-promotion-no"
                                    value="no"/>
                                <label name="notification-groups-admin-promotion-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                        <tr id="groups-notification-settings-request">
                            <td></td>
                            <td>Пользователь отправил запрос на вступление в приватную группу, в которой вы являетесь администратором</td>
                            <td
                                className="yes">
                                <input type="radio" name="notifications[notification_groups_membership_request]" id="notification-groups-membership-request-yes"
                                    value="yes" />
                                <label name="notification-groups-membership-request-yes" className="bp-screen-reader-text">Да, отправить email</label>
                                </td>
                                <td className="no">
                                    <input type="radio" name="notifications[notification_groups_membership_request]" id="notification-groups-membership-request-no"
                                        value="no"/>
                                    <label name="notification-groups-membership-request-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                                </td>
                        </tr>
                        <tr id="groups-notification-settings-request-completed">
                            <td></td>
                            <td>Ваш запрос на вступление в группу был подтвержден или отклонен</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_membership_request_completed]" id="notification-groups-membership-request-completed-yes"
                                    value="yes" />
                                <label name="notification-groups-membership-request-completed-yes" className="bp-screen-reader-text">Да, отправить email</label>
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_membership_request_completed]" id="notification-groups-membership-request-completed-no"
                                    value="no"/>
                                <label name="notification-groups-membership-request-completed-no" className="bp-screen-reader-text">Нет, не отправлять email</label>
                            </td>
                        </tr>
                        <tr id="groups-notification-settings-user-upload-file">
                            <td></td>
                            <td>A member uploads a document to a group you belong to</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_group_documents_upload_member]" value="yes"
                                    />
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_group_documents_upload_member]" value="no"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>A member uploads a document to a group name which you are an moderator/admin</td>
                            <td className="yes">
                                <input type="radio" name="notifications[notification_group_documents_upload_mod]" value="yes"
                                    />
                            </td>
                            <td className="no">
                                <input type="radio" name="notifications[notification_group_documents_upload_mod]" value="no"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="submit text-right">
                    <input type="submit" name="submit" value=" Сохранить изменения " id="submit" className="auto btn btn-primary"/>
                </div>
                <input type="hidden" id="_wpnonce" name="_wpnonce" value="4c6138db85"/>
                <input type="hidden" name="_wp_http_referer" value="/users/leonrov/settings/notifications/"/>
            </namem>
        </div>
    </div>
</div>
    </div>
)}})

export default Email;
