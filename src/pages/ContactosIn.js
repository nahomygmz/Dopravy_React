import Menu2 from "./Menu2";
//import { Map, GoogleApiWrapper } from 'google-maps-react';


function Contactos(){
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
                                    <a  href="index">Cerrar Sesión</a>
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
                            <h2>CONTACTO</h2>
                        </div>
                        
                        <div className="page-header-breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="index">Home</a></li>
                                <li className="active">Contacto</li>
                            </ol>
                        </div>
                        
                        <div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="def-section">
		        <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                            <div className="contacts-info">
                                <div className="contacts-info-title">
                                    <div className="contacts-info-title-icon">
                                        <i className="fa fa-comments"></i>
                                    </div>
                                    <h3>Estaremos encantados<br/>de ayudarle</h3>
                                </div>
                                <div className="contacts-info-text">
                                    ¿Necesitas una cotización sobre tu traslado de mercancía? ¿Tienes dudas sobre que puedes transportar o hasta dónde puedes hacerlo? Ponte en contacto con nosotros y estaremos encantados de ayudarte para resolver tus inquietudes.
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <div className="contacts-form row">
                                <div className="send-result"></div>
                                <form name="contact-form" id="contact-form" method="POST" action="javascript:void(null);" onsubmit="sendmail_2();">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contacts-form-item">
                                        <input type="text" name="contact-name" placeholder="Nombre" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contacts-form-item">
                                        <input type="text" name="contact-email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contacts-form-item">
                                        <input type="text" name="contact-phone" placeholder="Contacto" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacts-form-item">
                                        <textarea name="contact-message" placeholder="¿Cómo podemos ayudarte?"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacts-form-item contacts-form-button">
                                        <button><span className="my-btn my-btn-grey">
                                            <span className="my-btn-bg-top"></span>
                                            <span className="my-btn-bg-bottom"></span>
                                            <span className="my-btn-text">
                                                Enviar Mensaje
                                            </span>
                                        </span></button>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="def-section contact-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail">
                            <div className="contact-detail-icon">
                                <i className="flaticon-map58"></i>
                            </div>
                            <div className="contact-detail-title">
                                <h3>Ubicación</h3>
                            </div>
                            <div className="contact-detail-text">
                                Torre Naranja, Avenida Toronja,<br/>Santo Domingo
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail contact-detail-mark">
                            <div className="contact-detail-icon">
                                <i className="flaticon-telephone5"></i>
                            </div>
                            <div className="contact-detail-title">
                                <h3>Contacto | Email</h3>
                            </div>
                            <div className="contact-detail-text">
                                +1 809 098 0909 <br/>info@dopravy.com
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail">
                            <div className="contact-detail-icon">
                                <i className="flaticon-clock96"></i>
                            </div>
                            <div className="contact-detail-title">
                                <h3>Horario</h3>
                            </div>
                            <div className="contact-detail-text">
                                Lunes - Viernes : 08:00 AM - 05:00 PM<br/>Sábados : 09:00 AM - 02:00 PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-map" id="contact-map"></div>

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
                                        MÁS
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
                                Teléfono:  849 234 0101
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
                                Dirección: Calle 1 Esq. 10, Reparto Rosa. Santo Domingo, República Dominicana 
                            </div>
                        </div>                        
                    </div>
                </div>
            </footer>

            <div className="bottom">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-1">
                            
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-2">
                            COPYRIGHT 2022 | DOPRAVY
                        </div>
                        
                    </div>
                </div>
            </div>

            <aside id="slide-menu" className="slide-menu">		
                <div className="close-menu" id="close-menu">
                    <i className="fa fa-close"></i>
                </div>
                
            </aside>


            <div className="black-overlay" id="black-overlay"></div>




        </div>
    )
}

export default Contactos;