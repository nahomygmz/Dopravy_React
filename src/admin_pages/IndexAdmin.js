import {Link, NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import {variables} from '../variables';
import axios from 'axios';



export class IndexAdmin extends Component{

    constructor(props){
        super(props);

        this.state={
            adminActual:[],
            adminNickname:"",
        }
    }

    refreshList(){
        const nickname = localStorage.getItem('nickname')
        
        localStorage.getItem('nickname')
        localStorage.getItem('pass')

        fetch(variables.API_URL +'Admin/'+nickname)
        .then(res=>res.json())
        .then((data) =>{
            this.setState({adminActual : data})
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    logout(){
        localStorage.removeItem('nickname')
        window.location.assign('/loginAdmin');
        
    }


    render(){

        const{
            adminNickname,
            adminActual,
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
                                <li className="menu-item active">
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
                                        <NavLink to="/listadoclientes">Lista de clientes</NavLink>
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
    
                                <li className="menu-header small text-uppercase"><span className="menu-header-text">Veh??culos</span></li>
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
                                        <Link to='/loginAdmin' onClick={this.logout}>Cerrar Sesi??n</Link>
                                    </div>
                                </div>
                            </nav>
    
                       
                            <div className="content-wrapper">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row">
                                        <div className="col-lg-8 mb-4 order-0">
                                            <div className="card">
                                                <div className="d-flex align-items-end row">
                                                    <div className="col-sm-7">
                                                        <div className="card-body">
                                                        <h5 className="card-title text-primary">Bienvenido {adminActual.adminNickname}!</h5>
                                                        <p className="mb-4">
                                                            Nos alegramos de que est??s de vuelta. Es hora de que vuelvas a poner algo de entusiasmo en nuestro equipo.
                                                        </p>
    
                                                        <a href="/listadoencargos" className="btn btn-sm btn-outline-primary">Encargos</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5 text-center text-sm-left">
                                                        <div className="card-body pb-0 px-0 px-md-4">
                                                            <img
                                                                src="./assets2/assets/img/illustrations/man-with-laptop-light.png"
                                                                height="140"
                                                                alt="View Badge User"
                                                                data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                                data-app-light-img="illustrations/man-with-laptop-light.png"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 order-1"></div>
                                        <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2"></div>
                                    </div>
                                </div>
                                
                                <footer className="content-footer footer bg-footer-theme">
                                    <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                        <div className="mb-2 mb-md-0">
                                        DOPRAVY | ??
                                            <script>
                                                document.write(new Date().getFullYear());
                                            </script>
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