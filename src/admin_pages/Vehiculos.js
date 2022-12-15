import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {variables} from '../variables'

export class ListaVehiculo extends Component {

    constructor(props){
        super(props);

        this.state={
            camiones:[],
            camUnidad:"",
            camMarca:"",
            camModelo:"",
            camColor:"",
            camPlaca:"",
            camChasis:"",
            camTipovehiculo:"",
            camTiposeguroid:"",
            camStatus:"",
            encargos:[],
            modalTitle:""

        }
    }

    //Buscar y mostrar los vehiculos existentes
    refreshList(){
        fetch(variables.API_URL +'Camion')
         .then(response=>response.json())
         .then(data =>{
             this.setState({camiones:data});
         });
    }


    //renderizar lista
    componentDidMount(){
        this.refreshList();
    }

   //formulario para editar datos
   editClick(con){
        this.setState({
            modalTitle:"Actualizar Datos",
            camUnidad:con.camUnidad,
            camMarca:con.camMarca,
            camModelo:con.camModelo,
            camColor:con.camColor,
            camPlaca:con.camPlaca,
            camChasis:con.camChasis,
            camTipovehiculo:con.camTipovehiculo,
            camTiposeguroid:con.camTiposeguroid,
            camStatus:con.camStatus

        })
    }     

    //actualizar datos
    updateClick(id){
        fetch(variables.API_URL+'Camion/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                camUnidad:this.state.camUnidad,
                camMarca:this.state.camMarca,
                camModelo:this.state.camModelo,
                camColor:this.state.camColor,
                camPlaca:this.state.camPlaca,
                camChasis:this.state.camChasis,
                camTipovehiculo:this.state.camTipovehiculo,
                camTiposeguroid:this.state.camTiposeguroid,
                camStatus:this.state.camStatus
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert('Error.');
            
        }, (error)=>{
            this.refreshList();
            alert('Registro actualizado.');
        })
    }

    //asociar los campos de los formularios con los de la API
    ChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }

    logout(){
        localStorage.removeItem('nickname')
        window.location.assign('/loginAdmin');
        
    }

    render(){

        const{
            camiones,
            encargos,
            camUnidad,
            camMarca,
            camModelo,
            camColor,
            camPlaca,
            camChasis,
            camTipovehiculo,
            camTiposeguroid,
            camStatus,
            modalTitle
            
        }=this.state

        return(
            <div>
               
                <link rel="icon" href="./assets1/images/icon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"
                />
    
                <link rel="stylesheet" href="./assets2/assets/vendor/fonts/boxicons.css" />
    
                <link rel="stylesheet" href="./assets2/assets/vendor/css/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="./assets2/assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="./assets2/assets/css/demo.css" />
                <link rel="stylesheet" href="./assets2/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
    
                <link rel="stylesheet" href="./assets2/assets/vendor/libs/apex-charts/apex-charts.css" />
                <script src="./assets2/assets/vendor/js/helpers.js"></script>
                <script src="./assets2/assets/js/config.js"></script>
    
    
    
    
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                            <div className="app-brand demo">
                                <a href="indexadmin" className="app-brand-link">
                                <h4 className="demo menu-text fw-bolder ms-2">Dopravy Admin</h4>
                                </a>
    
                                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                <i className="bx bx-chevron-left bx-sm align-middle"></i>
                                </a>
                            </div>
    
                            <div className="menu-inner-shadow"></div>
    
                            <ul className="menu-inner py-1">
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                        <Link to="/indexadmin">Dashboard</Link>
                                    </div>
                                </li>
    
                                <li className="menu-header small text-uppercase">
                                    <span className="menu-header-text">Clientes</span>
                                </li>
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to="/listadoclientes">Lista de clientes</Link>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to='/listadoencargos'>Lista de Encargos</Link>
                                    </div>
                                </li>
    
                                <li className="menu-header small text-uppercase"><span className="menu-header-text">Conductores</span></li>
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to='/agregarempleado'>Registrar nuevo conductor</Link>
                                    </div>
                                </li>
    
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to='/listadoempleados'>Lista de conductores</Link>
                                    </div>
                                </li>
    
                                <li className="menu-header small text-uppercase"><span className="menu-header-text">Vehículos</span></li>
                                <li className="menu-item">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to='/agregarvehiculo'>Registrar nuevo Vehiculo</Link>
                                    </div>
                                </li>
    
                                <li className="menu-item active">
                                    <div className="menu-link">
                                        <i className="menu-icon tf-icons bx bx-collection"></i>
                                        <Link to='/listadovehiculos'>Lista de Vehiculos</Link>
                                    </div>
                                </li>
                            </ul>
                        </aside>
    
                        <div className="layout-page">
    
                            <nav
                                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                                id="layout-navbar">
                                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                        <i className="bx bx-menu bx-sm"></i>
                                    </a>
                                </div>
    
                                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                    <div className="navbar-nav align-items-center">
                                        <div className="nav-item d-flex align-items-center">
                                        </div>
                                    </div>
    
                                    <div className="navbar-nav flex-row align-items-center ms-auto">
                                        <Link to='/loginAdmin' onClick={this.logout}>Cerrar Sesión</Link>
                                    </div>
                                </div>
                            </nav>
    
                       
                            <div className="content-wrapper">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4">Lista de Vehículos</h4>
    
                                    <div className="card">
                                        <h5 className="card-header">Vehículos</h5>
                                        <div className="table-responsive text-nowrap">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                    <th>Unidad</th>
                                                    <th>Marca</th>
                                                    <th>Modelo</th>
                                                    <th>Color</th>
                                                    <th>Placa</th>
                                                    <th>Chasis</th>
                                                    <th>Tipo de Vehículo</th>
                                                    <th>Tipo de Seguro</th>
                                                    <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="table-border-bottom-0">
                                                
                                                    {camiones.map(cam =>
                                                    <tr key={cam.desc}>
                                                        <td>{cam.camUnidad}</td>
                                                        <td>{cam.camMarca}</td>
                                                        <td>{cam.camModelo}</td>
                                                        <td>{cam.camColor}</td>
                                                        <td>{cam.camPlaca}</td>
                                                        <td>{cam.camChasis}</td>
                                                        <td>{cam.camTipovehiculo}</td>
                                                        <td>{cam.camTiposeguroid}</td>
                                                        <td><span className="badge bg-label-success me-1">{cam.camStatus}</span></td>

                                                        <td>
                                                            <div className="dropdown">
                                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                </button>

                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="javascript:void(0);"
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#exampleModal"
                                                                    onClick={()=>this.editClick(cam)}>
                                                                    <i className="bx bx-edit-alt me-2"
                                                                    data-toggle="modal" data-target="#exampleModal">
                                                                    </i> Actualizar
                                                                    </a>
                                                                    
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                                <footer className="content-footer footer bg-footer-theme">
                                    <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                        <div className="mb-2 mb-md-0">
                                        DOPRAVY | © 2022
                                        </div>
                                    </div>
                                </footer>
                                <div className="content-backdrop fade"></div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-overlay layout-menu-toggle"></div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            
                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Unidad</span>
                                <input disabled className="form-control" maxLength="5" name="camUnidad" value={camUnidad} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Marca</span>
                                <input type="text" className="form-control" name="camMarca" value={camMarca} onChange={this.ChangeHandler}/>
                            </div>
                                                    
                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Modelo</span>
                                <input type="text" className="form-control" name="camModelo" value={camModelo} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Color</span>
                                <input type="text" className="form-control" name="camColor" value={camColor} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Placa</span>
                                <input type="text" className="form-control" name="camPlaca" value={camPlaca} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Chasis</span>
                                <input type="text" className="form-control" name="camChasis" value={camChasis} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Tipo de Vehiculo</span>
                                <input className="form-control" name="camTipovehiculo" value={camTipovehiculo} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Status</span>
                                <select className="form-control" name="camTiposeguroid" value={camTiposeguroid} onChange={this.ChangeHandler}>
                                    <option>-Seleccione una opción-</option>
                                    <option>Cobertura de responsabilidad civil</option>
                                    <option>Cobertura Ocupante</option>
                                    <option>Full</option>
                                    <option>Reclamación de daños</option>
                                </select>
                            </div>
                            <div>  

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Status</span>
                                <select className="form-control" name="camStatus" value={camStatus} onChange={this.ChangeHandler}>
                                    <option> </option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                    <option>Mantenimiento</option>
                                </select>
                            </div>
                            
                            {camUnidad!==0?
                            <button type="button" 
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick(camUnidad)}>Guardar cambios</button>
                            :null}
                            </div>
                                               
                        </div>

                    </div>
                </div>
                </div>
    
    
    
    
                <script src="./assets2/assets/vendor/libs/jquery/jquery.js"></script>
                <script src="./assets2/assets/vendor/libs/popper/popper.js"></script>
                <script src="./assets2/assets/vendor/js/bootstrap.js"></script>
                <script src="./assets2/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
    
                <script src="./assets2/assets/vendor/js/menu.js"></script>
    
                <script src="./assets2/assets/vendor/libs/apex-charts/apexcharts.js"></script>
    
                <script src="./assets2/assets/js/main.js"></script>
    
                <script src="./assets2/assets/js/dashboards-analytics.js"></script>
    
                <script async defer src="https://buttons.github.io/buttons.js"></script>
    
            </div>
        )
    }
    
}