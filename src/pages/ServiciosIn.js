import Menu2 from "./Menu2";

function Servicios(){
    return(
        <div>
            
            <head>
                <link href="./assets1/css/master.css" rel="stylesheet"></link>
            </head>

        <div className="preloader" id="preloader">
            <div className="cssload-container">
                <div className="cssload-whirlpool"></div>
            </div>
        </div>

        <div className="main-navbar main-navbar-1" id="main-navbar">
            <div className="container">
                <div className="row">
                        
                    <div className="logo" id="main-logo">
                        <div className="logo-image">
                            <img src="./assets1/img/logo.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="show-menu-control">
                        <a id="show-menu" className="show-menu" href="#">
                            <div className="my-btn my-btn-primary">
                                <div className="my-btn-bg-top"></div>
                                <div className="my-btn-bg-bottom"></div>
                                <div className="my-btn-text">
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                                                        
                    <div class="collapse navbar-collapse main-menu main-menu-1" id="main-menu">
                            <ul class="nav navbar-nav">                   
                                <li>
                                <a href="indexIn">Home</a>
                                </li>
                                <li className="main-menu-separator"></li>
                                <li >
                                    <a href="serviciosIn">Servicios</a>
                                </li>
                                <li className="main-menu-separator"></li>
                                <li>
                                    <a href="aboutIn">Sobre Nosotros</a>
                                </li> 
                                <li className="main-menu-separator"></li>
                                <li >
                                    <a className="latest" href="contactosIn">Contacto</a>
                                </li>
                                <li className="main-menu-separator"></li>
                                <li>
                                    <a  href="cuenta">Mi Cuenta</a>
                                </li> 
                                <li class="main-menu-separator"></li>
                                <li>
                                    <a  href="index">Cerrar Sesi??n</a>
                                </li> 
                            </ul>
                        </div>
                </div>
            </div>
        </div>

        <div className="page-header" data-stellar-background-ratio="0.4">
            <div className="page-header-overlay"></div>
            <div className="container">
                <div className="row">
                    
                    <div className="page-header-title">
                        <h2>SERVICIOS</h2>
                    </div>
                    
                    <div className="page-header-breadcrumb">
                        <ol className="breadcrumb">
                            <li><a href="index">Home</a></li>
                            <li className="active">Servicios</li>
                        </ol>
                    </div>
                                    
                </div>
            </div>
	    </div>

        <div className="def-section services-1">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="service-1">
                            <div className="service-1-image">
                                <img src="./assets1/media/service/1.jpg" alt="" />
                            </div>
                            <div className="service-1-title">
                                <h3>Mudanzas</h3>
                            </div>
                            <div className="service-1-text">
                                <p>
                                    Ya sea que desee mudarse a otro provincia o a un lugar cercano a su hogar, los servicios de mudanzas de Dopravy pueden ayudarte a llegar all?? sin estr??s. En Dopravy sabemos que ninguna mudanza es igual, por eso creamos un plan de mudanza personalizado para garantizar que su experiencia de mudanza sea lo m??s fluida posible.
                                </p>
                            </div>
                            <div className="service-1-button">
                                <a href="contactos">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Solicitar Cotizacion
                                        </div>
                                    </div>
                                </a>
                            </div>					
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="service-1">
                            <div className="service-1-image">
                                <img src="./assets1/media/service/2.jpg" alt="" />
                            </div>
                            <div className="service-1-title">
                                <h3>Transporte de Alimentos</h3>
                            </div>
                            <div className="service-1-text">
                                <p>
                                    Si desea enviar sus productos alimenticios a todo el pa??s, necesita un socio que comprenda c??mo proporcionar transporte de calidad alimentaria, servicios de env??o de alimentos, as?? como las leyes y la log??stica que rodean el env??o de alimentos. En Dopravy estamos calificados para determinar qu?? pr??cticas son las mejores para su negocio.
                                </p>
                            </div>
                            <div className="service-1-button">
                                <a href="contactos">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Solicitar Cotizacion
                                        </div>
                                    </div>
                                </a>
                            </div>					
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="service-1">
                            <div className="service-1-image">
                                <img src="./assets1/media/service/3.jpg" alt="" />
                            </div>
                            <div className="service-1-title">
                                <h3>Transporte de Mercanc??a</h3>
                            </div>
                            <div className="service-1-text">
                                <p>
                                    Desde el paquete m??s peque??o hasta el m??s grande, trabajamos con nuestros clientes para examinar los requisitos log??sticos espec??ficos se adapten a su modelo de negocio para brindarle soluciones comerciales y definir el servicio de transporte requerido. Dopravy garantiza fiabilidad y rapidez, respondiendo con prontitud a cualquier tipo de env??o a nivel nacional. 
                                    
                                </p>
                            </div>
                            <div className="service-1-button">
                                <a href="contactos">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Solicitar Cotizacion
                                        </div>
                                    </div>
                                </a>
                            </div>					
                        </div>
                    </div>
                </div>    
            </div>
	    </div>

        <footer className="def-section footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-1">
                            <div className="logo with-border-bottom">
                                <div className="logo-image">
                                    <img src="./assets1/img/logo.png" alt="" />
                                </div>
                                
                            </div>
                            <div className="footer-1-button">
                                <a href="about"><div className="my-btn my-btn-primary">
                                    <div className="my-btn-bg-top"></div>
                                    <div className="my-btn-bg-bottom"></div>
                                    <div className="my-btn-text">
                                        M??S
                                    </div>
                                </div></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-2">
                            <h4 className="with-square with-border-bottom">LINKS</h4>
                            <div className="footer-2-links">
                                <div className="footer-2-links-1">
                                    <ul>
                                        <li><a href="index">Home</a></li>
                                        <li><a href="servicios">Servicios</a></li>
                                        <li><a href="about">Sobre Nosotros</a></li>
                                        <li><a href="contactos">Contacto</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-3">
                            <h4 className="with-square with-border-bottom">INFO</h4>
                            <div className="footer-3-phone footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-phone"></i></span>
                                Tel??fono:  849 234 0101
                            </div>
                            <div className="footer-3-fax footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-fax"></i></span>
                                WhatsApp:  +1 849 234 0101
                            </div>
                            <div className="footer-3-mail footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-envelope"></i></span>
                                E-mail:  info@dopravy.com
                            </div>
                            <div className="footer-3-adress footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-map-marker"></i></span>
                                Direcci??n: Calle 1 Esq. 10, Reparto Rosa. Santo Domingo, Rep??blica Dominicana 
                            </div>
                        </div>                        
                    </div>
                </div>
        </footer>

        <div className="bottom">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-1"></div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-2">
                        COPYRIGHT 2022 | DOPRAVY
                    </div>
                    
                </div>
            </div>
	    </div>




    </div>
    )
}

export default Servicios;