import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';

export class AddVehiculo extends Component{

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

        }
    }

   //asociar los campos de los formularios con los de la API
   ChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }

    //POST
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post(variables.API_URL +'Camion', this.state)
        .then(res=>res.json())
        .catch(function (error){
            if(error.response){
                alert('Este vehiculo esta registrado.');
            }else{
                alert('Vehiculo registrado.');
            }
        })
    }




    render(){

        const{
            camiones,
            camUnidad,
            camMarca,
            camModelo,
            camColor,
            camPlaca,
            camChasis,
            camTipovehiculo,
            camTiposeguroid,
            camStatus,
            encargos,
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
                                <li className="menu-item active">
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
                                id="layout-navbar"
                            >
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
                                        <Link to='/loginAdmin'>Cerrar Sesión</Link>
                                    </div>
                                </div>
                            </nav>
    
                       
                            <div className="content-wrapper">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4">Registrar Vehículo</h4>
    
                                    <div className="col-xxl">
                                    <div className="card mb-4">
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0">Datos del vehículo</h5>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" for="basic-default-name">Código de Unidad</label>
                                                <div className="col-sm-10">
                                                    <input type="text" maxlength="5"
                                                    name="camUnidad"
                                                    value={camUnidad}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control"  placeholder="ej. M-345" />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label"> Marca</label>
                                                <div className="col-sm-10">
                                                    <input
                                                    type="text"
                                                    name="camMarca"
                                                    value={camMarca}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control"
                                                    placeholder="Ingrese la marca del vehículo"
                                                    />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Modelo</label>
                                                <div className="col-sm-10">
                                                    <input type="text" 
                                                    name="camModelo"
                                                    value={camModelo}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control"  placeholder="Ingrese el modelo del vehículo"/>
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Color</label>
                                                <div className="col-sm-10">
                                                    <input type="text" 
                                                    name="camColor"
                                                    value={camColor}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control"  placeholder="Ingrese el color del vehículo" />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Placa</label>
                                                <div className="col-sm-10">
                                                    <input type="text" 
                                                    name="camPlaca"
                                                    value={camPlaca}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control" maxlength="7"  placeholder="Ingrese el no. de placa del vehículo" />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Chasis</label>
                                                <div className="col-sm-10">
                                                    <input type="text" 
                                                    name="camChasis"
                                                    value={camChasis}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control" maxlength="17"  placeholder="Ingrese el no. de chasis del vehículo" />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Tipo de Vehículo</label>
                                                <div className="col-sm-10">
                                                    <input type="text"
                                                    name="camTipovehiculo"
                                                    value={camTipovehiculo}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control"  placeholder="ej.: Furgón" />
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Tipo de Seguro</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control"
                                                    name="camTiposeguroid"
                                                    value={camTiposeguroid}
                                                    onChange={this.ChangeHandler}>
                                                        <option>-Seleccione una opción-</option>
                                                        <option>Cobertura de responsabilidad civil</option>
                                                        <option>Cobertura Ocupante</option>
                                                        <option>Full</option>
                                                        <option>Reclamación de daños</option>
                                                    </select>
                                                </div>
                                                </div>
        
                                                <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label" >Status</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control"
                                                    name="camStatus"
                                                    value={camStatus}
                                                    onChange={this.ChangeHandler}>
                                                        <option>-Seleccione una opción-</option>
                                                        <option>Activo</option>
                                                        <option>Inactivo</option>
                                                        <option>Mantenimiento</option>
                                                    </select>
                                                </div>
                                                </div>
        
                                                <div className="row justify-content-end">
                                                <div className="col-sm-10">
                                                    <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Registrar</button>
                                                </div>
                                                </div>
                                            </form>
                                        </div>
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
   


