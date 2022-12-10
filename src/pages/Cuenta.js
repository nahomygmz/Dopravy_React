import Menu2 from "./Menu2";

function Cuenta(){
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
                                <img src="img/logo.png" alt="" />
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
                                <li className="main-menu-separator"></li>
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
                            <h2>Mi Cuenta</h2>
                        </div>
                        
                        <div className="page-header-breadcrumb">
                            <ol className="breadcrumb">
                                <li><a href="index">Home</a></li>
                                <li className="active">Mi Cuenta</li>
                            </ol>
                        </div>
                        
                        <div className="page-header-button">
                        </div>
                    </div>
                </div>
            </div>

            <br/>
	        <br/>
            <div className="container-fluid">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center py-3">
                            <h3 className="h4 mb-0"><a href="#" className="text-muted"></a> Historial de Encargos</h3>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body" id="encargosTabla">
                                    <div className="mb-3 d-flex justify-content-between">
                                        <br/>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Provincia</th>
                                                    <th>Sector</th>
                                                    <th>Lugar de Descarga</th>
                                                    <th>Tipo de Encargo</th>
                                                    <th>Descripción</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>124537</td>
                                                        <td>Santo Domingo</td>
                                                        <td>Reparto Rosa</td>
                                                        <td>Residencial Joss #3</td>
                                                        <td>Mudanza</td>
                                                        <td>Esto es una descripcion</td>
                                                    </tr>
                                                </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6"></div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="container card" id="nuevoEnc">
                                <div className="card-body">
                                    <br/>
                                    <h3 className="card-title h4 position-absolute">Realizar Encargo</h3>
                                    <p className="card-text">Más rápido de lo que puedes imaginar.</p>

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Nuevo encargo</button>

                                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Nuevo Encargo</h5>

                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label for="exampleDataList" className="form-label">Tipo de Encargo</label>
                                                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione el tipo de encargo"/>
                                                            <datalist id="datalistOptions">
                                                                <option value="Mudanza"/>
                                                                <option value="Transporte de Alimentos"/>
                                                                <option value="Transporte de Mercancia"/>
                                                            </datalist>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="exampleDataList" className="form-label">Provincia</label>
                                                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione la provincia de origen"/>
                                                            <datalist>
                                                                <option value="Santo Domingo"/>
                                                                <option value="Santiago"/>
                                                            </datalist>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="recipient-name" className="col-form-label">Sector</label>
                                                            <input type="text" className="form-control" id="recipient-name" placeholder="Ingrese el sector de origen"/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="recipient-name" className="col-form-label">Lugar de Descarga</label>
                                                            <input type="text" className="form-control" id="recipient-name" placeholder="Ingrese la dirección de destino"/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label for="message-text" className="col-form-label">Mensaje:</label>
                                                            <textarea className="form-control" id="message-text" placeholder="Escriba los detalles del transporte aquí"></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button type="button" className="btn btn-primary">Realizar encargo</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                            <br/>
                        
                            <div className="container card" id="datosCuenta">
                                    <div className="card-body">
                                <br/>
                                <h3 className="card-title h4 position-absolute">Mis Datos</h3>
                                <span><i className="bi bi-box-arrow-up-right"></i></span>
                                <hr/>
                                <div className="col-md-8">
                                    <div className="card mb-3">
                                        <div className="card-body">

                                            <form className="form-row">
                                                <fieldset disabled>

                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Nombre</label>
                                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Nahomy"/>
                                                </div>

                                                <br/>

                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Apellidos</label>
                                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Gomez"/>
                                                </div>
                                                
                                                <br/>

                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Cédula de identidad</label>
                                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="40278906541"/>
                                                </div>
                                                
                                                <br/>

                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Fecha de Nacimiento</label>
                                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="09/08/2001"/>
                                                </div>
                                                
                                                <br/>

                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Sexo</label>
                                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Femenino"/>
                                                </div>
                                                
                                                <br/>
                                                </fieldset>
                                                <div className="mb-3">
                                                    <label for="disabledTextInput" className="form-label">Contraseña</label>
                                                    <input type="password" className="form-control" placeholder="hola123"/>
                                                </div>
                                                <br/>
                                                <div>
                                                    <button type="submit" className="btn btn-primary">Actualizar contraseña</button>
                                                </div>
                                                <br/>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>



        </div>
    )
}

export default Cuenta;