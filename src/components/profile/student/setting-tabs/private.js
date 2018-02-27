import React from "react";


const Private = React.createClass({
    render() {
        return (

            <div className="tab-pane fade" id="private">
                <div className="panel panel-white">
                    <div className="panel-heading">
                        <h6 className="panel-title"> Настройки видимости профиля
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                        <div className="heading-elements"></div>
                    </div>
                    <div className="panel-body">
                        <namem action="https://student.utmn.ru/users/leonrov/settings/profile/" method="post" className="standard-namem" id="settings-namem">
                            <div className="table-responsive">
                                <table className="table table-hover profile-settings" id="xprofile-settings-osnovnoe">
                                    <thead>
                                        <tr className="bg-teal-400">
                                            <th className="title field-group-name col-md-8">Основное</th>
                                            <th className="title col-md-4">Видимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="field_1 field_login required-field visibility-public field_type_textbox">
                                            <td className="field-name">Логин</td>
                                            <td className="field-visibility">
                                                <span className="field-visibility-settings-notoggle">Все</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover profile-settings" id="xprofile-settings-sotsialnyj-profil">
                                    <thead>
                                        <tr className="bg-teal-400">
                                            <th className="title field-group-name col-md-8">Социальный профиль</th>
                                            <th className="title col-md-4">Видимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="field_2 field_vkontakte optional-field visibility-public field_type_url">
                                            <td className="field-name">Вконтакте</td>
                                            <td className="field-visibility">
                                                <label name="field_2_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_2_visibility"
                                                    id="field_2_visibility">
                                                    <option value="public" >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_3 field_facebook optional-field visibility-public alt field_type_url">
                                            <td className="field-name">Facebook</td>
                                            <td className="field-visibility">
                                                <label name="field_3_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_3_visibility"
                                                    id="field_3_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_4 field_google-plus optional-field visibility-public field_type_url">
                                            <td className="field-name">Google Plus</td>
                                            <td className="field-visibility">
                                                <label name="field_4_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_4_visibility"
                                                    id="field_4_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_5 field_twitter optional-field visibility-public alt field_type_url">
                                            <td className="field-name">Twitter</td>
                                            <td className="field-visibility">
                                                <label name="field_5_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_5_visibility"
                                                    id="field_5_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover profile-settings" id="xprofile-settings-messendzher">
                                    <thead>
                                        <tr className="bg-teal-400">
                                            <th className="title field-group-name col-md-8">Мессенджер</th>
                                            <th className="title col-md-4">Видимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="field_8 field_viber optional-field visibility-public field_type_textbox">
                                            <td className="field-name">Viber</td>
                                            <td className="field-visibility">
                                                <label name="field_8_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_8_visibility"
                                                    id="field_8_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_9 field_icq optional-field visibility-public alt field_type_textbox">
                                            <td className="field-name">ICQ</td>
                                            <td className="field-visibility">
                                                <label name="field_9_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_9_visibility"
                                                    id="field_9_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_10 field_whatsapp optional-field visibility-public field_type_textbox">
                                            <td className="field-name">WhatsApp</td>
                                            <td className="field-visibility">
                                                <label name="field_10_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_10_visibility"
                                                    id="field_10_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_11 field_telegram optional-field visibility-public alt field_type_textbox">
                                            <td className="field-name">Telegram</td>
                                            <td className="field-visibility">
                                                <label name="field_11_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_11_visibility"
                                                    id="field_11_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_12 field_skype optional-field visibility-public field_type_textbox">
                                            <td className="field-name">Skype</td>
                                            <td className="field-visibility">
                                                <label name="field_12_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_12_visibility"
                                                    id="field_12_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover profile-settings" id="xprofile-settings-kontaktnaya-innamematsiya">
                                    <thead>
                                        <tr className="bg-teal-400">
                                            <th className="title field-group-name col-md-8">Контактная информация</th>
                                            <th className="title col-md-4">Видимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="field_6 field_telefon optional-field visibility-public field_type_textbox">
                                            <td className="field-name">Телефон</td>
                                            <td className="field-visibility">
                                                <label name="field_6_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_6_visibility"
                                                    id="field_6_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr className="field_7 field_email optional-field visibility-public alt field_type_textbox">
                                            <td className="field-name">Email</td>
                                            <td className="field-visibility">
                                                <label name="field_7_visibility" className="bp-screen-reader-text">Выбрать видимость</label>
                                                <select className="bp-xprofile-visibility" name="field_7_visibility"
                                                    id="field_7_visibility">
                                                    <option value="public"  >Все</option>
                                                    <option value="adminsonly">Только я</option>
                                                    <option value="loggedin">Все пользователи</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="submit text-right">
                                <input id="submit" type="submit" name="xprofile-settings-submit" value=" Сохранить настройки " className="auto btn btn-primary" />
                            </div>
                            <input type="hidden" id="_wpnonce" name="_wpnonce" value="dae28056cc" />
                            <input type="hidden" name="_wp_http_referer" value="/users/leonrov/settings/profile/" />
                            <input type="hidden" name="field_ids" id="field_ids" value="1,2,3,4,5,8,9,10,11,12,6,7" />
                        </namem>
                    </div>
                </div>
            </div>

        )
    }
})

export default Private;
