import React from 'react';
import { connect } from "react-redux";


const Desktop = React.createClass({
    componentWillMount() {
  
    },
    render() {
        return (

<div>
    <div className="page-header page-header-default">
        <div className="page-header-content">
            <div className="page-title">
                <h4>
                    <i className="icon-arrow-left52 position-left"></i>
                    <span className="text-semibold"> Рабочий стол </span>
                </h4>
            </div>
        </div>
        <div className="breadcrumb-line">
            <ul className="breadcrumb">
                <li>
                    <a href='#' >
                        <i className="icon-home2 position-left"></i>
                        <span >Главная</span>
                    </a>

                </li>
            </ul>
        </div>
    </div>
    <div className="content">
        <div className="row sortable-panel cursor-move">    
            <div className="col-sm-6 col-lg-3">
                <a href="/cafe_guide">
                    <div className="panel bg-teal-400" id="cafe-panel">
                        <div className="panel-body">
                            <div className="media no-margin">
                                <div className="media-left media-middle">
                                    <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i>
                                </div>
                                <div className="media-body text-right">
                                    <h6 className="media-heading text-semibold">Хочешь кушать?
                                        <br/>Вот меню столовой!
                                    </h6>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="panel panel-flat cursor-move">
                    <div className="panel-heading">
                        <h6 className="panel-title"> Пользователи
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                        <div className="heading-elements">
                            <a href="/users" className="heading-text"> →</a>
                        </div>
                    </div>
                    <ul className="media-list panel-body">
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/leonrov/">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1083.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title fn">
                                    <a href="https://student.utmn.ru/users/leonrov/" title="Леонид Ровкин" className="media-heading">
                                        <span className="text-semibold"> </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="activity text-muted">активность: только что</span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/8-1966/">
                                    <img alt="Рисунок профиля (stud003914896)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1072.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title fn">
                                    <a href="https://student.utmn.ru/users/8-1966/" title="stud003914896" className="media-heading">
                                        <span className="text-semibold"> Арутюнян Лусинэ Ваниковна </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="activity text-muted">активность: 8 минут назад</span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/stud003945720/">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1075.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title fn">
                                    <a href="https://student.utmn.ru/users/stud003945720/" title="stud003945720" className="media-heading">
                                        <span className="text-semibold"> Горбунова Ирина Дмитриевна </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="activity text-muted">активность: 9 минут назад</span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/stud0000201877/">
                                    <img  alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1087.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title fn">
                                    <a href="https://student.utmn.ru/users/stud0000201877/" title="Пешехонова Мария Дмитриевна"
                                        className="media-heading">
                                        <span className="text-semibold"> Пешехонова Мария Дмитриевна </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="activity text-muted">активность: 41 минута назад</span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/stud0000104551/">
                                    <img alt="" src="https://student.utmn.ru/files/avatars/200908/5a3bafc46f323-bpthumb.jpg" className="avatar user-200908-avatar avatar-50 photo"
                                        width="50" height="50" />
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title fn">
                                    <a href="https://student.utmn.ru/users/stud0000104551/" title="stud0000104551" className="media-heading">
                                        <span className="text-semibold"> Семёнова Юлия Сергеевна </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="activity text-muted">активность: 1 час, 22 минуты назад</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="panel panel-body">
                    <div className="media no-margin stack-media-on-mobile">
                        <div className="media-left media-middle">
                            <i className="icon-lifebuoy icon-3x text-muted no-edge-top"></i>
                        </div>
                        <div className="media-body">
                            <h6 className="media-heading text-semibold">Нужна помощь?</h6>
                            <span className="text-muted">Напишите в службу поддержки</span>
                        </div>
                        <div className="media-right media-middle">
                            <a href="/forums/topic/portal-student-tyumgu" className="btn btn-primary">OK</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="panel panel-white rating-panel">
                    <div className="row text-center rating-wrapper">
                        <div className="col-xs-4">
                            <p>
                                <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"  title="Рейтинг успеваемости"></i>
                            </p>
                            <h5 className="text-semibold no-margin">0</h5>
                            <span className="text-muted text-size-small">успеваемость</span>
                        </div>
                        <div className="col-xs-4">
                            <p>
                                <i className="fa fa-star fa-3x" aria-hidden="true"  title="Рейтинг портфолио"></i>
                            </p>
                            <h5 className="text-semibold no-margin">0</h5>
                            <span className="text-muted text-size-small">портфолио</span>
                        </div>
                        <div className="col-xs-4">
                            <p>
                                <i className="fa fa-trophy fa-3x" aria-hidden="true" title="Рейтинг активности" ></i>
                            </p>
                            <h5 className="text-semibold no-margin">1</h5>
                            <span className="text-muted text-size-small">активность</span>
                        </div>
                    </div>
                    <div className="row last-rating-changes">
                        <div className="col-md-12">
                            <h6>Последние изменения рейтинга</h6>
                            <ul >
                                <li>Начислено баллов: 1 (за ежедневный вход на сайт)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-flat cursor-move">
                    <div className="panel-heading">
                        <h6 className="panel-title"> Группы
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                        <div className="heading-elements">
                            <a href="/groups" className="heading-text"> →</a>
                        </div>
                    </div>
                    <ul className="media-list panel-body">
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/">
                                    <img alt="" src="https://student.utmn.ru/files/group-avatars/29/58f867c894eae-bpthumb.jpg" className="avatar group-29-avatar avatar-50 photo"
                                        width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title">
                                    <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/" title="Тюменский государственный университет (ТюмГУ)"
                                        className="media-heading">
                                        <span className="text-semibold"> Тюменский государственный университет (ТюмГУ) </span>
                                    </a>
                                </div>
                                <div className="item-meta fn">
                                    <span className="activity text-muted" data-livestamp="2017-12-26T05:14:22+0000"> активность: 3 дня, 5 часов назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/groups/finansovo-ekonomicheskij-institut/">
                                    <img alt="Логотип группы (Финансово-экономический институт)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1092.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title">
                                    <a href="https://student.utmn.ru/groups/finansovo-ekonomicheskij-institut/" title="Финансово-экономический институт"
                                        className="media-heading">
                                        <span className="text-semibold"> Финансово-экономический институт </span>
                                    </a>
                                </div>
                                <div className="item-meta fn">
                                    <span className="activity text-muted" data-livestamp="2017-10-04T12:36:22+0000"> активность: 2 месяца, 3 недели назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/groups/institut-himii/">
                                    <img alt="Логотип группы (Институт химии)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1080.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title">
                                    <a href="https://student.utmn.ru/groups/institut-himii/" title="Институт химии" className="media-heading">
                                        <span className="text-semibold"> Институт химии </span>
                                    </a>
                                </div>
                                <div className="item-meta fn">
                                    <span className="activity text-muted" data-livestamp="2017-09-18T20:13:37+0000"> активность: 3 месяца, 1 неделя назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/groups/institut-filologii-i-zhurnalistiki/">
                                    <img alt="Логотип группы (Институт филологии и журналистики)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1080.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title">
                                    <a href="https://student.utmn.ru/groups/institut-filologii-i-zhurnalistiki/" title="Институт филологии и журналистики"
                                        className="media-heading">
                                        <span className="text-semibold"> Институт филологии и журналистики </span>
                                    </a>
                                </div>
                                <div className="item-meta fn">
                                    <span className="activity text-muted" data-livestamp="2017-09-10T15:00:29+0000"> активность: 3 месяца, 2 недели назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/groups/institut-matematiki-i-kompyuternyh-nauk/">
                                    <img alt="Логотип группы (Институт математики и компьютерных наук)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1080.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/>
                                </a>
                            </div>
                            <div className="item media-body">
                                <div className="item-title">
                                    <a href="https://student.utmn.ru/groups/institut-matematiki-i-kompyuternyh-nauk/" title="Институт математики и компьютерных наук"
                                        className="media-heading">
                                        <span className="text-semibold"> Институт математики и компьютерных наук </span>
                                    </a>
                                </div>
                                <div className="item-meta fn">
                                    <span className="activity text-muted" data-livestamp="2017-09-10T13:55:49+0000"> активность: 3 месяца, 2 недели назад </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="panel panel-flat cursor-move">
                    <div className="panel-heading">
                        <h6 className="panel-title"> Последние темы
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                        <div className="heading-elements">
                            <a href="/forums" className="heading-text"> →</a>
                        </div>
                    </div>
                    <ul className="media-list panel-body">
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/utmnstudent/" title="Посмотреть профиль пользователя Администратор Портала"
                                    className="bbp-author-avatar" rel="nofollow">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/48/cyrillic_1072.png"
                                        className="avatar avatar-14 photo bpfla " width="14" height="14"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/portal-student-tyumgu">
                                        <span className="text-semibold"> Портал Студент ТюмГУ </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 2 нед., 3 дн. назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/utmnstudent/" title="Посмотреть профиль пользователя Администратор Портала"
                                    className="bbp-author-avatar" rel="nofollow">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/48/cyrillic_1072.png"
                                        className="avatar avatar-14 photo bpfla " width="14" height="14"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/other">
                                        <span className="text-semibold"> Другое </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 1 месяц, 1 неделя назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/utmnstudent/" title="Посмотреть профиль пользователя Администратор Портала"
                                    className="bbp-author-avatar" rel="nofollow">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/48/cyrillic_1072.png"
                                        className="avatar avatar-14 photo bpfla " width="14" height="14"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/learning">
                                        <span className="text-semibold"> Обучение </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 1 месяц, 2 нед. назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/utmnstudent/" title="Посмотреть профиль пользователя Администратор Портала"
                                    className="bbp-author-avatar" rel="nofollow">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/48/cyrillic_1072.png"
                                        className="avatar avatar-14 photo bpfla " width="14" height="14"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/rabota-portala-student-tjumgu">
                                        <span className="text-semibold"> Работа портала "Студент ТюмГУ" </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 2 мес., 3 нед. назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/utmnstudent/" title="Посмотреть профиль пользователя Администратор Портала"
                                    className="bbp-author-avatar" rel="nofollow">
                                    <img alt="" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/48/cyrillic_1072.png"
                                        className="avatar avatar-14 photo bpfla " width="14" height="14"/>
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold"> Проживание </span>
                                    </a>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 4 мес. назад </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="panel panel-white">
                    <div className="panel-heading">
                        <h6 className="text-semibold panel-title">
                            <i className="icon-folder6 position-left"></i> Недавние документы
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                    </div>
                    <div className="list-group no-border">
                        <a href="https://student.utmn.ru/?get_group_doc=29/1498630258-346-1.PDF" className="list-group-item">
                            <i className="icon-file-pdf"></i>Политика в отношении обработки персональных данных в ФГАОУ ВО «Тюменский государственный
                            университет»</a>
                        <a href="https://student.utmn.ru/?get_group_doc=29/1496383377-pamyatka_studentu.pdf"
                            className="list-group-item">
                            <i className="icon-file-pdf"></i>Памятка студенту</a>
                        <a href="https://student.utmn.ru/?get_group_doc=29/1496383349-Nastrojka-studencheskoj-pochtovoj-uchetnoj-zapisi-na-ustrojstvah-Android.pdf"
                            className="list-group-item">
                            <i className="icon-file-pdf"></i>Настройка студенческой почтовой учетной записи на устройствах Android</a>
                        <a href="https://student.utmn.ru/?get_group_doc=29/1496383322-Nastrojka-studencheskoj-pochtovoj-uchetnoj-zapisi-na-ustrojstvah-iPhone.pdf"
                            className="list-group-item">
                            <i className="icon-file-pdf"></i>Настройка студенческой почтовой учетной записи на устройствах iPhone</a>
                        <a href="https://student.utmn.ru/?get_group_doc=29/1496382485-.pdf"
                            className="list-group-item">
                            <i className="icon-file-pdf"></i>ПОЛОЖЕНИЕ О ПЕРЕВОДЕ НА БЮДЖЕТ.pdf</a>
                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/documents"
                            className="list-group-item">
                            <i className="icon-arrow-right22"></i> Показать все документы </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="panel panel-body bg-pink-400 cursor-move soon">
                    <div className="media no-margin">
                        <div className="media-left media-middle">
                            <i className="icon-wave icon-2x"></i>
                        </div>
                        <div className="media-body text-right">
                            <h6 className="media-heading text-semibold">Знаете ли вы?</h6>
                            <span className="text-muted">Если посещать портал Студент ТюмГУ раз в сутки, то рейтинг активности увеличивается на 1 балл!</span>
                        </div>
                    </div>
                </div>
                <div className="panel panel-flat cursor-move">
                    <div className="panel-heading">
                        <h6 className="panel-title"> Активность
                            <a className="heading-elements-toggle">
                                <i className="icon-more"></i>
                            </a>
                        </h6>
                        <div className="heading-elements">
                            <a href="/livestream" className="heading-text"> →</a>
                        </div>
                    </div>
                    <ul className="media-list panel-body">
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/moderator/">
                                    <img alt="Рисунок профиля (Модератор Портала)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1084.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/> </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold "></span>
                                    </a>
                                    <p>
                                        <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">Животова Алена сообщение в ленте группы </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/"
                                            className="">
                                            <img alt="" src="https://student.utmn.ru/files/group-avatars/29/58f867c894eae-bpthumb.jpg"/>
                                        </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/">Тюменский государственный университет (ТюмГУ)</a>
                                    </p>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 1 час, 43 минуты назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/moderator/">
                                    <img alt="Рисунок профиля (Модератор Портала)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1084.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/> </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold "></span>
                                    </a>
                                    <p>
                                        <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">Лисецкая Виктория сообщение в ленте группы </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/"
                                            className="">
                                            <img alt="" src="https://student.utmn.ru/files/group-avatars/29/58f867c894eae-bpthumb.jpg"/>
                                        </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/">Тюменский государственный университет (ТюмГУ)</a>
                                    </p>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 3 часа, 33 минуты назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/stud0000199595/">
                                    <img src="https://student.utmn.ru/files/avatars/203182/5a451f02baa51-bpthumb.jpg" className="avatar user-203182-avatar avatar-50 photo"
                                        width="50" height="50" alt="Рисунок профиля (Цой Артём Георгиевич)"/> </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold "></span>
                                    </a>
                                    <p>
                                        <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living"></a>
                                        <a href="https://student.utmn.ru/users/stud0000199595/">Цой Артём Георгиевич</a>: изменен рисунок профиля</p>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 17 часов, 42 минуты назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/moderator/">
                                    <img alt="Рисунок профиля (Модератор Портала)" src="https://student.utmn.ru/assets/plugins/buddypress-first-letter-avatar/images/default/96/cyrillic_1084.png"
                                        className="avatar avatar-50 photo bpfla" width="50" height="50"/> </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold "></span>
                                    </a>
                                    <p>
                                        <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">АКТУАЛЬНО! сообщение в ленте группы </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/"
                                            className="">
                                            <img alt="" src="https://student.utmn.ru/files/group-avatars/29/58f867c894eae-bpthumb.jpg"/>
                                        </a>
                                        <a href="https://student.utmn.ru/groups/tyumenskij-gosudarstvennyj-universitet-tyumgu/">Тюменский государственный университет (ТюмГУ)</a>
                                    </p>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 1 день, 3 часа назад </span>
                                </div>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-left item-avatar">
                                <a href="https://student.utmn.ru/users/stud0000106939/">
                                    <img src="https://student.utmn.ru/files/avatars/191384/5a43e0d6ac3d2-bpthumb.jpg" className="avatar user-191384-avatar avatar-50 photo"
                                        width="50" height="50" alt="Рисунок профиля (stud0000106939)"/> </a>
                            </div>
                            <div className="media-body">
                                <div className="item-title">
                                    <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living">
                                        <span className="text-semibold "></span>
                                    </a>
                                    <p>
                                        <a className="bbp-forum-title" href="https://student.utmn.ru/forums/topic/living"></a>
                                        <a href="https://student.utmn.ru/users/stud0000106939/">Гомзякова Анастасия Владимировна</a>: изменен рисунок профиля</p>
                                </div>
                                <div className="item-meta">
                                    <span className="text-muted"> 1 день, 16 часов назад </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>

</div>
)}})
export default connect(
    state => ({
      store: state.user
    })
)(Desktop)