import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';


export class ListaClientes extends Component{

    constructor(props){
        super(props);

        this.state={
            clientes:[],
            cliCedula:"",
            cliNombre:"",
            cliApellido:"",
            cliFechnac:"",
            cliSexo:"",
            cliStatus:"",
            cliPw:"",
            encargos:[],
            modalTitle:""
        }
    }

    //Buscar y mostrar los usuarios existentes
    refreshList(){
        fetch(variables.API_URL +'Cliente')
         .then(response=>response.json())
         .then(data =>{
             this.setState({clientes:data});
         });
    }
    //renderizar lista
    componentDidMount(){
         this.refreshList();
    }

    //formulario para editar datos
    editClick(cli){
        this.setState({
            modalTitle:"Actualizar Datos",
            cliCedula:cli.cliCedula,
            cliNombre:cli.cliNombre,
            cliApellido:cli.cliApellido,
            cliFechnac:cli.cliFechnac,
            cliSexo:cli.cliSexo,
            cliStatus:cli.cliStatus,
            cliPw:cli.cliPw,
        })
    }
    //actualizar datos
    updateClick(id){
        fetch(variables.API_URL+'Cliente/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                cliCedula:this.state.cliCedula,
                cliNombre:this.state.cliNombre,
                cliApellido:this.state.cliApellido,
                cliFechnac:this.state.cliFechnac,
                cliSexo:this.state.cliSexo,
                cliStatus:this.state.cliStatus,
                cliPw:this.state.cliPw
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





    render(){

        const{
            clientes,
            cliCedula,
            cliNombre,
            cliApellido,
            cliFechnac,
            cliSexo,
            cliStatus,
            cliPw,
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
                            <a href="index.html" className="app-brand-link">
                            <span className="app-brand-logo demo" href="../assets/img/favicon/icon copy.ico">
                            
                            </span>
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
                            <li className="menu-item active">
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

                            <li className="menu-header small text-uppercase"><span className="menu-header-text">Empleados</span></li>
                            <li className="menu-item">
                                <div className="menu-link">
                                    <i className="menu-icon tf-icons bx bx-collection"></i>
                                    <Link to='/agregarempleado'>Registrar nuevo empleado</Link>
                                </div>
                            </li>

                            <li className="menu-item">
                                <div className="menu-link">
                                    <i className="menu-icon tf-icons bx bx-collection"></i>
                                    <Link to='/listadoempleados'>Lista de empleados</Link>
                                </div>
                            </li>

                            <li className="menu-header small text-uppercase"><span className="menu-header-text">Vehículos</span></li>
                            <li className="menu-item">
                                <div className="menu-link">
                                    <i className="menu-icon tf-icons bx bx-collection"></i>
                                    <Link to='/agregarvehiculo'>Registrar nuevo Vehiculo</Link>
                                </div>
                            </li>

                            <li className="menu-item">
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
                                    
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <Link to='/loginAdmin'>Cerrar Sesión</Link>
                                    </li>
                                </div>
                            </div>
                        </nav>

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="fw-bold py-3 mb-4">Lista de Clientes</h4>

                                <div className="card">
                                    <h5 className="card-header">Clientes</h5>
                                    <div className="table-responsive text-nowrap">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Cédula</th>
                                            <th>Nombre Completo</th>
                                            <th>Fecha de Nacimiento</th>
                                            <th>Sexo</th>
                                            <th>Clave de Usuario</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody className="table-border-bottom-0">
                                            {clientes.map(cli =>
                                                <tr key={cli.id}>
                                                    <td>{cli.cliCedula}</td>
                                                    <td>{cli.cliNombre} {cli.cliApellido}</td>
                                                    <td>{cli.cliFechnac}</td>
                                                    <td>{cli.cliSexo}</td>
                                                    <td>{cli.cliPw}</td>
                                                    <td><span className="badge bg-label-success me-1">{cli.cliStatus}</span></td>

                                                    <td>
                                                        <div className="dropdown">
                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </button>

                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="javascript:void(0);"
                                                                 data-bs-toggle="modal" 
                                                                 data-bs-target="#exampleModal"
                                                                 onClick={()=>this.editClick(cli)}>
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

                                <footer className="content-footer footer bg-footer-theme">
                                    <div className="mb-2 mb-md-0">
                                        <br/>
                                        DOPRAVY | © 2022
                                        
                                    </div>
                                </footer>
                
                            <div className="content-backdrop fade"></div>
                            </div>
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
                                <span className="btn btn-outline-secondary">Cédula</span>
                                <input disabled className="form-control" maxLength="11" name="cliCedula" value={cliCedula} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Nombre</span>
                                <input type="text" className="form-control" name="cliNombre" value={cliNombre} onChange={this.ChangeHandler}/>
                            </div>
                                                    
                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Apellido</span>
                                <input type="text" className="form-control" name="cliApellido" value={cliApellido} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Fecha de Nacimiento</span>
                                <input type="text" className="form-control" name="cliFechnac" value={cliFechnac} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Sexo</span>
                                <select className="form-control" name="cliSexo" value={cliSexo} onChange={this.ChangeHandler}>
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Clave de Usuario</span>
                                <input type="text" className="form-control" name="cliPw" value={cliPw} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Status</span>
                                <select className="form-control" name="cliStatus" value={cliStatus} onChange={this.ChangeHandler}>
                                    <option> </option>
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </select>
                            </div>
                            <div>  

                            {cliCedula!==0?
                            <button type="button" 
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick(cliCedula)}>Guardar cambios</button>
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
