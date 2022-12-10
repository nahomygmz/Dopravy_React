import {Link} from 'react-router-dom';

function Menu(){
    return(
        <div>
            <head>
                <link href="./assets1/css/master.css" rel="stylesheet"></link>
            </head>
            
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
                                    <Link to="/index">Home</Link>
                                </li>
                                <li className="main-menu-separator"></li>
                                
                                <li >
                                    <Link to="/servicios">Servicios</Link>
                                </li>
                                <li className="main-menu-separator"></li>
                                <li>
                                    <Link to="/about">Sobre Nosotros</Link>
                                </li> 
                                <li className="main-menu-separator"></li>
                                <li >
                                    <Link to="/contactos">Contacto</Link>
                                </li>
                                <li className="main-menu-separator"></li>
                                <li>
                                    <Link to="/loginClient">Iniciar Sesión</Link>
                                </li> 
                                <li className="main-menu-separator"></li>
                                <li>
                                    <Link to="/registerClient">Registrarse</Link>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Menu;