import Menu2 from "./Menu2";

function IndexCli(){
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
				 								 
				<div className="collapse navbar-collapse main-menu main-menu-1" id="main-menu">
					<ul className="nav navbar-nav">
                            <li>
                            <a href="indexIn">Home</a>
                            </li>
                            <li className="main-menu-separator"></li>
                            <li>
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

        <div id="main-slider-1" className='main-slider main-slider-1'>
            <div className="sp-slides">			
                <div className="sp-slide">
                    <div className="main-slider-overlay"></div>
                    <img className="sp-image" src="./assets1/assets/slider-pro/css/images/blank.gif"
                    data-src="./assets1/media/main-slider/1.jpg"
                    data-retina="./assets1/media/main-slider/1.jpg" alt="" />
                    
                    <div className="container">
                        <div className="main-slider-content">
                            <h2 className="sp-layer"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-92"
                                data-show-transition="left" data-hide-transition="left" data-show-delay="200" data-hide-delay="200">
                                Somos su socio confiable
                            </h2>

                            <h2 className="sp-layer color-primary"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-40"
                                data-show-transition="left" data-hide-transition="left" data-show-delay="400" data-hide-delay="400">
                                Servicios de calidad de transporte
                            </h2>
                
                            <a className="sp-layer main-button" href="/contactosIn"
                                data-position="rightCenter" data-horizontal="15" data-vertical="55"
                                data-show-transition="left" data-hide-transition="left" data-show-delay="600" data-hide-delay="600">
                                <div className="my-btn my-btn-primary">
                                    <div className="my-btn-bg-top"></div>
                                    <div className="my-btn-bg-bottom"></div>
                                    <div className="my-btn-text">
                                        Solicitar Servicio
                                    </div>
                                </div>
                            </a>
                            
                            <div className="sp-layer main-slider-buttons" 
                                data-position="rightCenter" data-horizontal="15" data-vertical="165" data-hide-delay="600">
                                <a className="main-slider-button-prev" href="#">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-left"></i>
                                        </div>
                                    </div>
                                </a>

                                <a className="main-slider-button-next" href="">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="sp-slide">
                    
                    <div className="main-slider-overlay"></div>
                    
                    <img className="sp-image" src="./assets1/assets/slider-pro/css/images/blank.gif"
                    data-src="./assets1/media/main-slider/2.jpg"
                    data-retina="./assets1/media/main-slider/2.jpg" alt="" />
                    
                    <div className="container">
                        <div className="main-slider-content">
                            <h2 className="sp-layer"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-92"
                                data-show-transition="down" data-hide-transition="down" data-show-delay="600" data-hide-delay="600">
                                Tu mercancía en
                            </h2>

                            <h2 className="sp-layer color-primary"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-40"
                                data-show-transition="down" data-hide-transition="down" data-show-delay="400" data-hide-delay="400">
                                las mejores manos
                            </h2>
                
                            <a className="sp-layer main-button" href="/contactosIn"
                                data-position="rightCenter" data-horizontal="15" data-vertical="55"
                                data-show-transition="down" data-hide-transition="down" data-show-delay="200" data-hide-delay="200">
                                <div className="my-btn my-btn-primary">
                                    <div className="my-btn-bg-top"></div>
                                    <div className="my-btn-bg-bottom"></div>
                                    <div className="my-btn-text">
                                        Solicitar Servicio
                                    </div>
                                </div>
                            </a>
                            
                            <div className="sp-layer main-slider-1-buttons" 
                                data-position="rightCenter" data-horizontal="15" data-vertical="165" data-hide-delay="600">
                                <a className="main-slider-button-prev" href="#">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-left"></i>
                                        </div>
                                    </div>
                                </a>
                                <a className="main-slider-button-next" href="#">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="sp-slide">
                    
                    <div className="main-slider-overlay"></div>
                    
                    <img className="sp-image" src="./assets1/assets/slider-pro/css/images/blank.gif"
                    data-src="./assets1/media/main-slider/3.jpg"
                    data-retina="./assets1/media/main-slider/3.jpg" alt="" />
                    
                    <div className="container">
                        <div className="main-slider-content">
                            <h2 className="sp-layer"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-92"
                                data-show-transition="up" data-hide-transition="up" data-show-delay="200" data-hide-delay="200">
                                Nuestra experiencia es
                            </h2>

                            <h2 className="sp-layer color-primary"
                                data-position="rightCenter" data-horizontal="15" data-vertical="-40"
                                data-show-transition="up" data-hide-transition="up" data-show-delay="400" data-hide-delay="400">
                                el mejor respaldo
                            </h2>
                
                            <a className="sp-layer main-button" href="/contactosIn"
                                data-position="rightCenter" data-horizontal="15" data-vertical="55"
                                data-show-transition="up" data-hide-transition="up" data-show-delay="600" data-hide-delay="600">
                                <div className="my-btn my-btn-primary">
                                    <div className="my-btn-bg-top"></div>
                                    <div className="my-btn-bg-bottom"></div>
                                    <div className="my-btn-text">
                                        Solicitar Servicio
                                    </div>
                                </div>
                            </a>
                            
                            <div className="sp-layer main-slider-buttons" 
                                data-position="rightCenter" data-horizontal="15" data-vertical="165" data-hide-delay="600">
                                <a className="main-slider-button-prev" href="#">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-left"></i>
                                        </div>
                                    </div>
                                </a>
                                <a className="main-slider-button-next" href="#">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="def-section home-services">
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
                                        
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" id="service-mark">
                    
                        <div className="service-mark-border-top"></div>
                        <div className="service-mark-border-right"></div>
                        <div className="service-mark-border-bottom"></div>
                        <div className="service-mark-border-left"></div>
                        <div className="service">
                            <div className="service-icon">
                                <i className="flaticon-transport222"></i>
                            </div>
                            <h3>Transporte por Carretera</h3>
                            <div className="service-text">

                                <p>La mayor ventaja del transporte por<br/> carretera es su capacidad para<br/>proporcionar servicios de<br/>puerta a puerta.
                                </p>

                            </div>

                            <div className="service-button">
                                <a href="serviciosIn">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Leer Más
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>	
                                        
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    
                        <div className="service">
                            <div className="service-icon">
                                <i className="flaticon-road40"></i>
                            </div>
                            <h3>Velocidad</h3>
                            <div className="service-text">
                                <p>El transporte por carretera<br/>ofrece una opción más rápida,<br/>mucho más flexible y<br/>sin complicaciones.</p>
                            </div>
                            <div className="service-button">
                                <a href="serviciosIn">
                                    <div className="my-btn my-btn-default">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Leer Más
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        

        <section className="def-section about-quote">
		<div className="section-bg-left"></div>
		<div className="section-bg-right"></div>
		<div className="container">
			<div className="row">
				
				<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 home-about">
						<div className="title-group">
							<h2>Sobre Nosotros</h2>
							<div className="subtitle with-square">Encuentra tu próximo lugar</div>
						</div>
						
						<p>
							En Dopravy, nos enorgullecemos de nuestra capacidad para proporcionar a los cargadores, tanto 
							grandes como pequeños, una disposición de administraciones destinadas a hacer frente a sus complejas y 
							cambiantes cadenas de suministro. Utilizando nuestra conexión mundial de transporte y almacenamiento con nuestras
							habilidades de la industria, podemos optimizar el transporte de carga útil y las formas
							de dispersión con énfasis en la construcción de cadenas de suministro sólidas.
						</p>
						
						<div className="home-about-video">
							<div className="play-video" id="play-video">
								<div className="my-btn my-btn-primary">
									<div className="my-btn-bg-top"></div>
									<div className="my-btn-bg-bottom"></div>
									<div className="my-btn-text">
										<i className="fa fa-play"></i>
									</div>
								</div>
							</div>

							<div className="stop-video" id="stop-video">
								<div className="my-btn my-btn-primary">
									<div className="my-btn-bg-top"></div>
									<div className="my-btn-bg-bottom"></div>
									<div className="my-btn-text">
										<i className="fa fa-pause"></i>
									</div>
								</div>
							</div>
							
							<video id="aboutvideo" loop="loop" preload="auto">
								<source src="./assets1/media/video/trucks.mp4" />
								<source src="./assets1/media/video/trucks.webm" type="video/webm" />
							</video>
							
							<a href="aboutIn">
                                <div className="home-about-button">
                                    <div className="my-btn my-btn-primary">
                                        <div className="my-btn-bg-top"></div>
                                        <div className="my-btn-bg-bottom"></div>
                                        <div className="my-btn-text">
                                            Leer Más
                                        </div>
                                    </div>
							    </div>
                            </a>
						</div>
				</div>
				
				<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 get-quote">
						
						<div className="title-group">
							<h2>Solicitar Presupuesto</h2>
							<div className="subtitle with-square">Estamos aquí para mover su negocio</div>
						</div>
						
						<p>
							¿Desea hacer una cotitazión? ¡Llena este formulario!
							Un miembro de nuestro equipo se estará poniendo en contacto con usted
							lo más pronto posible.
						</p>
						
						<div className="get-quote-form">
						<div className="send-result"></div>
							<form name="gq-form" id="gq-form" method="POST" action="javascript:void(null);" onsubmit="sendmail_1();">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 get-quote-form-left">

									<div className="form-item">
										<input type="text" name="gq-location" id="gq-location" placeholder="Provincia" />
									</div>

									<div className="form-item">
										<input type="text" name="gq-person" id="gq-person" placeholder="Nombre Completo" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 get-quote-form-right">

									<div className="form-item">
										<input type="text" name="gq-destination" id="gq-destination" placeholder="Destino" />
									</div>

									<div className="form-item">
										<input type="text" name="gq-contact" id="gq-contact" placeholder="Email o Número Telefónico" />
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 get-quote-form-bottom">

									<div className="form-item">
										<textarea name="gq-text" id="gq-text" placeholder="Escriba su mensaje aquí"></textarea>
									</div>

									<div className="get-quote-form-button">
										<button id="gq-submit">
                                            <span className="my-btn my-btn-grey">
                                                <span className="my-btn-bg-top"></span>
                                                <span className="my-btn-bg-bottom"></span>
                                                <span className="my-btn-text">
                                                    Obtener Cotización
                                                </span>
										    </span>
                                        </button>
									</div>
								</div>
							</form>
						</div>
				    </div>
			    </div>
		    </div>
	    </section>
	
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
        <div >
	    </div>

        <section className="def-section" id="clients-section">
            <div className="home-big-image" data-stellar-background-ratio="0.4"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="home-clients">
                            
                            <div className="title-group">
                                <h2>CLIENTES</h2>
                                <div className="subtitle with-square">Somos sus socios</div>
                            </div>
                            <p>
                            Somos expertos completamente capacitados con el conocimiento que estás buscando. 
                            </p>
                            
                            <div className="home-clients owl-theme" id="owl-clients">
                                <div className="home-clients-carousel-block">
                                    
                                    <div className="home-clients-carousel-item">
                                        <a href="#"><img src="./assets1/media/clients/client1.png" alt="" /></a>
                                    </div>

                                    <div className="home-clients-carousel-item ">
                                        <a href="#"><img src="./assets1/media/clients/client2.jpg" alt="" /></a>
                                    </div>

                                    <div className="home-clients-carousel-item">
                                        <a href="#"><img src="./assets1/media/clients/client3.png" alt="" /></a>
                                    </div>

                                    <div className="home-clients-carousel-item">
                                        <a href="#"><img src="./assets1/media/clients/client3.png" alt="" /></a>
                                    </div>

                                    <div className="home-clients-carousel-item">
                                        <a href="#"><img src="./assets1/media/clients/client1.png" alt="" /></a>
                                    </div>

                                    <div className="home-clients-carousel-item">
                                        <a href="#"><img src="./assets1/media/clients/client2.jpg" alt="" /></a>
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
                            <a href="aboutIn"><div className="my-btn my-btn-primary">
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
                                    <li><a href="indexIn">Home</a></li>
                                    <li><a href="serviciosIn">Servicios</a></li>
                                    <li><a href="aboutIn">Sobre Nosotros</a></li>
                                    <li><a href="contactosIn">Contacto</a></li>
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

export default IndexCli;