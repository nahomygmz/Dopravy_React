import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';

 
export class Cuenta extends Component{
    constructor(props){
        super(props);

        this.state={
            encargos:[],
            encId:0,
            encTipoenc:"",
            encDesc:"",
            encProvinciaid:"",
            encSector:"",
            encLugardescarga:"",
            encClicedula:"",
            encStatus:"",
        }
    }

     //Buscar los encargos existentes
     refreshList(){
        fetch(variables.API_URL +'Encargo')
         .then(response=>response.json())
         .then(data =>{
             this.setState({encargos:data});
         });
    }


    //renderizar lista
    componentDidMount(){
        this.refreshList();
    }

    

    //asociar los campos de los formularios con los de la API
    ChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    //POST
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post(variables.API_URL +'Encargo', this.state)
        .then(res=>res.json())
        .catch(function (error){
            if(error.response){
                alert('Error al enviar encargo.');

            }else{
                alert('Encargo realizado.');
                window.location.reload();
            }
        })
    }

    render(){
        const{
            encargos,
            encId,
            encTipoenc,
            encDesc,
            encProvinciaid,
            encSector,
            encLugardescarga,
            encClicedula         
            
        }=this.state

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
                                                        <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {encargos.map(enc =>
                                                            <tr key={enc.id}>
                                                                <td>{enc.encId}</td>
                                                                <td>{enc.encProvinciaid}</td>
                                                                <td>{enc.encSector}</td>
                                                                <td>{enc.encLugardescarga}</td>
                                                                <td>{enc.encTipoenc}</td>
                                                                <td>{enc.encDesc}</td>
                                                                <td>{enc.encStatus}</td>
                                                            </tr>
                                                        )}
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
    
                                        <button type="button" className="btn btn-primary" 
                                        data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Nuevo encargo</button>
    
                                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" 
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Nuevo Encargo</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    <form onSubmit={this.submitHandler}>
                                                        <div className="modal-body">

                                                            
                                                        
                                                            <div className="form-group">
                                                                <label for="exampleDataList" className="form-label">Tipo de Encargo</label>
                                                                <select className="form-control" 
                                                                name="encTipoenc" 
                                                                value={encTipoenc} 
                                                                onChange={this.ChangeHandler}
                                                                placeholder="Seleccione el tipo de encargo">
                                                                    <option>-Seleccione una opción-</option>
                                                                    <option>Mudanza</option>
                                                                    <option>Transporte de alimentos</option>
                                                                    <option>Transporte de mercancia</option>
                                                                </select>
                                                            </div>
    
                                                            <div className="form-group">
                                                                <label for="exampleDataList" className="form-label">Provincia</label>
                                                                <select type="text" className="form-control" 
                                                                name="encProvinciaid" 
                                                                value={encProvinciaid} 
                                                                onChange={this.ChangeHandler}
                                                                placeholder="Seleccione la provincia de origen">
                                                                    <option>-Seleccione una opción-</option>
                                                                    <option>Distrito Nacional</option>
                                                                    <option>Santo Domingo Norte</option>
                                                                    <option>Santo Domingo Oeste</option>
                                                                    <option>Santo Domingo Este</option>
                                                                    <option>Santiago</option>
                                                                    <option>Santiago Rodríguez</option>
                                                                    <option>La Romana</option>
                                                                    <option>La Vega</option>
                                                                    <option>Puerto Plata</option>
                                                                    <option>Peravia</option>
                                                                </select>
                                                                  
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="recipient-name" className="col-form-label">Sector</label>
                                                                <input type="text" className="form-control" 
                                                                name="encSector" 
                                                                value={encSector} 
                                                                onChange={this.ChangeHandler}
                                                                placeholder="Ingrese el sector de origen"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label for="recipient-name" className="col-form-label">Lugar de Descarga</label>
                                                                <input type="text" className="form-control" 
                                                                name="encLugardescarga" 
                                                                value={encLugardescarga} 
                                                                onChange={this.ChangeHandler}
                                                                placeholder="Ingrese la dirección de destino"/>
                                                            </div>

                                                            
    
                                                            <div className="form-group">
                                                                <label for="message-text" className="col-form-label">Mensaje:</label>
                                                                <textarea className="form-control"
                                                                name="encDesc" 
                                                                value={encDesc} 
                                                                onChange={this.ChangeHandler}
                                                                placeholder="Escriba los detalles del transporte aquí"></textarea>
                                                            </div>

                                                            <div className="modal-footer">
                                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                            <button type="submit" 
                                                            onClick={this.submitHandler} 
                                                            className="btn btn-primary">Realizar encargo</button>
                                                            </div>
                                                            
                                                        </div>
                                                    </form>



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
}