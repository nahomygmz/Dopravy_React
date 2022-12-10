import Menu2 from "./Menu2";

function About(){
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
                            <h2>Sobre Nosotros</h2>
                        </div>
                        
                        <div className="page-header-breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="index">Home</a></li>
                                <li className="active">Sobre Nosotros</li>
                            </ol>
                        </div>
                        
                        <div className="page-header-button"></div>
                    </div>
                </div>
            </div>


            <div className="def-section about-text">
                <div className="container">
                    <div className="about-text-image">
                        <img src="./assets1/media/about/1.jpg" alt="" />
                    </div>
                    <h2>Estamos aquí para mover su negocio</h2>
                    <p className="text-justify">
                        Nuestro equipo de Dopravy nace del deseo y nuestra inquietud de ofrecer a nuestros clientes calidad y profesionalidad en diversos servicios como el transporte de mudanzas, mercancías y alimentación, ofreciendo al mismo tiempo soluciones logísticas para empresas y particulares. Seriedad, calidad y puntualidad son elementos esenciales que han dado respuesta a las solicitudes de nuestros clientes, dando lugar al desarrollo de una cartera de clientes de diferentes sectores.
                        
                        Reaccionamos de forma individual y flexible a las necesidades e intereses de nuestros clientes ya los cambios actuales del mercado. Nuestra principal preocupación es garantizar la calidad y profesionalidad de nuestros clientes en nuestros servicios de transporte. Estamos listos para responder con gusto en cualquier momento a sus solicitudes sobre nuestros servicios de transporte.
                    </p>
                </div>
            </div>

            <section className="def-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="home-review">
                                
                                <div className="title-group">
                                    <h2>Comentarios de nuestros clientes</h2>
                                    <div className="subtitle with-square">Felicidad entregada</div>
                                </div>
                                
                                <div className="home-review-carousel owl-carousel owl-theme" id="owl-review">
                                    
                                    <div className="home-review-carousel-item">
                                        <div className="home-review-carousel-text">
                                            <div className="home-review-carousel-quote"><div><i className="fa fa-quote-left"></i></div></div>
                                            <p>Dopravy Corp es una empresa centrada en el cliente que siempre hace un esfuerzo adicional para brindar el mejor servicio posible. 
                                            No tenemos que preocuparnos por el envío desde el momento en que sale de nuestra ubicación; Dopravy 
                                            se comunica directamente con el otro extremo para una transacción sin problemas.
                                            </p>
                                        </div>
                                        
                                        <div className="home-review-carousel-people">
                                            <div className="home-review-carousel-name">
                                                Sheila Silvestre
                                            </div>
                                            <div className="home-review-carousel-company">
                                                Clienta Satisfecha
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="home-faq">
                                
                                <div className="title-group">
                                    <h2>Razones por la cual debería elegirnos</h2>
                                    <div className="subtitle with-square">Imagina lo que podemos hacer por tu negocio</div>
                                </div>
                                
                                <div className="panel-group" id="accordion">
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                    Expertos en reducir el gasto en fletes de los clientes
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in">
                                            <div className="panel-body">
                                                <p>Nuestros volúmenes de carga combinados generales administrados en nombre de 
                                                nuestros clientes nos permiten negociar agresivamente y asegurar tarifas 
                                                de transporte preferidas.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                    Servicio al cliente superior
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Reconocemos que cada cliente puede ser diferente con requisitos únicos, 
                                                por lo que brindamos a nuestro cliente un toque de servicio personalizado. 
                                                Se asigna un representante de servicio al cliente dedicado (CSR).</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                                    Conocimiento profundo de la industria
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Nuestro equipo de profesionales comprende la importancia de mantenerse al tanto de las noticias, 
                                                los desafíos y los eventos que cambian el juego de la industria para que podamos evaluar el 
                                                impacto en nuestros clientes. Según nuestra evaluación, determinaremos los pasos a seguir, si es necesario, 
                                                para garantizar que nuestros clientes reciban la atención adecuada.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



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
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-1"></div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-2">
                            COPYRIGHT 2022 | DOPRAVY
                        </div>
                
                    </div>
                </div>
            </div>

            <div className="black-overlay" id="black-overlay"></div>




        </div>
    )
}

export default About;