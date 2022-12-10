import Menu from "./Menu";

function LoginClient(){
    return(
        <div>
           
          <head>
            <link rel='stylesheet' href='../../../css?family=Poppins:100,200,300,400,500,600,700,800,900' type='text/css'/>	
            <link rel="stylesheet" type="text/css" href="./assets3/vendor/bootstrap/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="./assets3/vendor/font-awesome/css/all.min.css"/>
            <link rel="stylesheet" type="text/css" href="./assets3/csslog/stylesheet.css"/>
            <link id="color-switcher" type="text/css" rel="stylesheet" href="#"/>
          </head>

           <div id="main-wrapper" className="oxyy-login-register">
                <div className="container-fluid px-0">
                    <div className="row g-0 min-vh-100"> 
                    
                        <div className="col-md-6 col-lg-7 bg-light">
                            <div className="hero-wrap d-flex align-items-center h-100">
                                <div className="hero-mask opacity-8"></div>
                                <div className="hero-bg hero-bg-scroll" >
                                <img src="./assets3/images/login-bg-7.jpg" className="img3000"/>
                                </div>
                                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                    <div className="container">
                                    <div className="row g-0 mt-5">
                                        <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                            <h1 className="text-13 text-white fw-600 mb-4">Tu solución en movimiento.</h1>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-5 d-flex flex-column align-items-center">
                            <div className="container pt-4">
                                <div className="row g-0">
                                    <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                        <div className="logoLogin"> <a href="index"><img src="./assets3/images/logo.png" href="index"/></a> </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-auto py-5">
                                <div className="row g-0">
                                    <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                        <h3 className="text-12 mb-4">Log In</h3>
                                        <form id="loginForm" method="post">
                                            <label className="form-label fw-500" for="emailAddress">Cédula</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                            <input type="text" maxlength="11" className="form-control bg-light border-light" id="emailAddress" required="" placeholder="Ingrese su cédula de identidad"/>
                                            </div>
                                            <label className="form-label fw-500" for="loginPassword">Contraseña</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                            <input type="password" className="form-control form-control-lg bg-light border-light" id="loginPassword" required="" placeholder="Ingrese su contraseña"/>
                                            </div>
                                            <div className="row my-4">
                                            <div className="col">
                                                <div className="form-check">
                                                <input id="remember-me" name="remember" className="form-check-input" type="checkbox"/>
                                                <label className="form-check-label" for="remember-me">Recordar usuario</label>
                                                </div>
                                            </div>
                                            <div className="col text-end"><a href="forgot-passwordClient">¿Olvidó su contraseña?</a></div>
                                            </div>
                                            <div className="d-grid my-4">
                                            <button className="btn btn-dark btn-lg" type="submit">Iniciar Sesión</button>
                                            </div>
                                            <p className="text-2 text-muted text-center">¿No tiene una cuenta? <a href="registerClient">Registrate</a> ahora</p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default LoginClient;