
function LoginAdmin(){
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
            <div className="hero-wrap d-flex align-items-center">
                <div className="hero-mask opacity-4 bg-secondary"></div>
                <div className="hero-bg hero-bg-scroll" >
                    <img src="./assets3/images/login-bg-3.jpg" className="img1000"/>
                </div>
                <div className="hero-content w-100">
                    <div className="container">
                        <div className="row g-0 min-vh-100"> 
                            <div className="col-md-6 d-flex flex-column">
                                <div className="row g-0 my-auto">
                                    <div className="col-11 col-sm-10 col-lg-9 mx-auto text-center">
                                        <div className="logo mt-5 mb-3"> <a ><img src="./assets3/images/logo2.png" alt="Oxyy"/></a> </div>
                                        <h1 className="text-5 fw-400 text-white mb-5">¡Bienvenido de vuelta! Nos alegramos de verte nuevamente.</h1>
                                    </div>
                                </div>
                            </div>
          

                        <div className="col-md-6 d-flex align-items-center py-5">
                            <div className="container my-auto py-4 shadow-lg bg-white">
                                <div className="row">
                                    <div className="col-11 col-lg-10 mx-auto">
                                    <h3 className="text-9 fw-600 text-center my-3">Iniciar Sesión</h3>
                                    <br/>

                                        <div className="mb-3">
                                        <label className="form-label text-dark fw-600" for="emailAddress">Usuario</label>
                                        <input type="text" className="form-control rounded-0" id="emailAddress" required="" placeholder="Ingrese su nombre de usuario"/>
                                        </div>

                                        <div className="mb-3">
                                        <label className="form-label text-dark fw-600" for="loginPassword">Contraseña</label>
                                        <input type="password" className="form-control rounded-0" id="loginPassword" required="" placeholder="Ingrese su contraseña"/>
                                        </div>

                                        <div className="row mt-4">
                                        <div className="col">
                                            <div className="form-check">
                                            <input id="remember-me" name="remember" className="form-check-input rounded-0" type="checkbox"/>
                                            <label className="form-check-label" for="remember-me">Mantener mi sesión iniciada</label>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="d-grid my-4">
                                        <a className="btn btn-dark rounded-0" href="dashboard/html/index.html"><button className="btn btn-dark rounded-0" type="submit">Ingresar</button></a>
                                        </div>

                                    </div>
                                </div>
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

export default LoginAdmin;