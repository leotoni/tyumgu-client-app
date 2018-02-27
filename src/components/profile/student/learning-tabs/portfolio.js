import React from "react";


const Portfolio = React.createClass({

    componentDidMount() {
        
        // var  div= document.getElementById('portfolio')
        // if (this.props.ph.includes('portfolio')) div.className='tab-pane fade in active'
        // else div.className='tab-pane fade'
    },
    render() {
        return (
            <div className="tab-pane fade" id="portfolio">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-user-check"></i>
                                    </div>
                                    <h5 className="text-semibold">Индивидуальные достижения, внеучебная работа, спорт</h5>
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-graduation"></i>
                                    </div>
                                    <h5 className="text-semibold">Образование, самообразование: документы, сертификаты, дипломы</h5>
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-medal"></i>
                                    </div>
                                    <h5 className="text-semibold">Поощрения</h5>
                                    <br />
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-lab"></i>
                                    </div>
                                    <h5 className="text-semibold">Результаты обучения: практики, курсовые работы, учебно-научная работа</h5>
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-book"></i>
                                    </div>
                                    <h5 className="text-semibold">Сведения о публикациях</h5>
                                    <br />
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-atom"></i>
                                    </div>
                                    <h5 className="text-semibold">Сведения об участии в научных конкурсах, грантах, проектах</h5>
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-user-tie"></i>
                                    </div>
                                    <h5 className="text-semibold">Сведения об участии в профессиональных конкурсах, олимпиадах, грантах, проектах</h5>
                                    <a href="#"
                                        className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="panel">
                                <div className="panel-body text-center">
                                    <div className="icon-object border-info text-info">
                                        <i className="icon-hammer-wrench"></i>
                                    </div>
                                    <h5 className="text-semibold">Трудовой стаж</h5>
                                    <br />
                                    <a href="#" className="btn bg-info-400">Добавить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        )
    }
})

export default Portfolio;
