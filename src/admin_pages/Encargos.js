import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';

export class ListaEncargos extends Component{
    constructor(props){
        super(props);

        this.state={
            encargos:[],
            encId:0,
            encTipoenc:0,
            encDesc:"",
            encProvinciaid:0,
            encSector:"",
            encLugardescarga:"",
            encConductorcedula:"",
            encClicedula:"",
            encUnidad:"",
            encStatus:"",
            conductores:[],
            camiones:[],
            conCedula:"",
            clientes:[]
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

    datosCon(){
        axios.get(variables.API_URL +'Conductor')
        .then((response)=>{
            this.setState({conductores: response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    datosCam(){
        axios.get(variables.API_URL +'Camion')
        .then((response)=>{
            this.setState({camiones: response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    datosCli(){
        axios.get(variables.API_URL +'Cliente')
        .then((response)=>{
            this.setState({clientes: response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    //renderizar datos
    componentDidMount(){
        Promise.all([this.refreshList(), (this.datosCon(), (this.datosCam(), this.datosCli()))])
        .then(([res1, res2, res3, res4]) =>{
            return Promise.all([res1.json(), res2.json(), res3(), res4()])
        })
        .then(([res1, res2, res3, res4]) =>{
            this.setState({encargos:res1, conductores:res2, camiones:res3, clientes:res4})
        })
        //this.refreshList();
    }

    
    //formulario para editar datos
    editClick(enc){
        this.setState({
            modalTitle:"Actualizar Datos",
            encId:enc.encId,
            encTipoenc:enc.encTipoenc,
            encDesc:enc.encDesc,
            encProvinciaid:enc.encProvinciaid,
            encSector:enc.encSector,
            encLugardescarga:enc.encLugardescarga,
            encConductorcedula:enc.encConductorcedula,
            encClicedula:enc.encClicedula,
            encUnidad:enc.encUnidad,
            encStatus:enc.encStatus
        })
    }

    //actualizar datos
    updateClick(id){
        fetch(variables.API_URL+'Encargo/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                encId:this.state.encId,
                encTipoenc:this.state.encTipoenc,
                encDesc:this.state.encDesc,
                encProvinciaid:this.state.encProvinciaid,
                encSector:this.state.encSector,
                encLugardescarga:this.state.encLugardescarga,
                encConductorcedula:this.state.encConductorcedula,
                encClicedula:this.state.encClicedula,
                encUnidad:this.state.encUnidad,
                encStatus:this.state.encStatus,

            })
        })
        .then(res=>res.json())
        .catch(function (error){
            if(error.response){
                alert('Error en actualizar.');
            }else{
                alert('Encargo actualizado.');
                window.location.reload();
                
            }
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
            modalTitle,
            encargos,
            encId,
            encTipoenc,
            encDesc,
            encProvinciaid,
            encSector,
            encLugardescarga,
            encConductorcedula,
            encClicedula,
            encUnidad,
            encStatus
                        
            
        }=this.state

        return(
            <div>
               
                <link rel="icon" href="./assets1/images/ienc.ico" />
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
                                <li className="menu-item active">
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
                                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"></span> Lista de encargos</h4>
    
                                    <div className="card">
                                    <h5 className="card-header">Encargos</h5>
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead>
                                            <tr className="text-nowrap">
                                            <th>ID de Encargo</th>
                                            <th>Tipo de Encargo</th>
                                            <th>C??dula de Cliente</th>
                                            <th>Descripci??n</th>
                                            <th>Sector</th>
                                            <th>Provincia</th>
                                            <th>Lugar descarga</th>
                                            <th>Cedula Conductor</th>
                                            <th>Cami??n</th>
                                            <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {encargos.map(enc =>
                                            <tr key={enc.id}>
                                                <td>{enc.encId}</td>
                                                <td>{enc.encTipoenc}</td>
                                                <td>{enc.encClicedula}</td>
                                                <td>{enc.encDesc}</td>
                                                <td>{enc.encSector}</td>
                                                <td>{enc.encProvinciaid}</td>
                                                <td>{enc.encLugardescarga}</td>
                                                <td>{enc.encConductorcedula}</td>
                                                <td>{enc.encUnidad}</td>
                                                <td><span className="badge bg-label-success me-1">{enc.encStatus}</span></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>

                                                        <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="javascript:void(0);"
                                                                 data-bs-toggle="modal" 
                                                                 data-bs-target="#exampleModal"
                                                                 onClick={()=>this.editClick(enc)}>
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
                                        DOPRAVY | ?? 2022
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
                                <span className="btn btn-outline-secondary">ID</span>
                                <input disabled className="form-control" name="encId" value={encId} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Tipo de encargo</span>
                                <select disabled className="form-control" name="encTipoenc" value={encTipoenc} onChange={this.ChangeHandler}>
                                    <option>-Seleccione una opci??n-</option>
                                    <option>Mudanza</option>
                                    <option>Transporte de alimentos</option>
                                    <option>Transporte de mercancia</option>
                                </select>
                            </div>
                                         
                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Descripcion</span>
                                <input disabled className="form-control" name="encDesc" value={encDesc} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Provincia</span>
                                <select disabled className="form-control" name="encProvinciaid" value={encProvinciaid} onChange={this.ChangeHandler}>
                                    <option>-Seleccione una opci??n-</option>
                                    <option>Distrito Nacional</option>
                                    <option>Santo Domingo Norte</option>
                                    <option>Santo Domingo Oeste</option>
                                    <option>Santo Domingo Este</option>
                                    <option>Santiago</option>
                                    <option>Santiago Rodr??guez</option>
                                    <option>La Romana</option>
                                    <option>La Vega</option>
                                    <option>Puerto Plata</option>
                                    <option>Peravia</option>
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Sector</span>
                                <input disabled className="form-control" name="encSector" value={encSector} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Lugar de descarga</span>
                                <input disabled className="form-control" name="encLugardescarga" value={encLugardescarga} onChange={this.ChangeHandler}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Cedula de Conductor</span>
                                <select type="text" className="form-control" name="encConductorcedula" value={encConductorcedula} onChange={this.ChangeHandler}>
                                    <option>-Seleccione una Opci??n-</option>
                                    {this.state.conductores.map(con => (
                                       <option key={con.id}>{con.conCedula}</option> 
                                       )
                                    )}
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Cedula de Cliente</span>
                                <input disabled className="form-control" name="encClicedula" value={encClicedula} onChange={this.ChangeHandler}>
                                </input>
                            </div>
                            
                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Cami??n</span>
                                <select className="form-control" name="encUnidad" value={encUnidad} onChange={this.ChangeHandler}>          
                                <option>-Seleccione una Opci??n-</option>
                                {this.state.camiones.map(cam => (
                                    
                                       <option key={cam.id}>{cam.camUnidad}</option> 
                                       )
                                    )}
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <span className="btn btn-outline-secondary">Status</span>
                                <select className="form-control" name="encStatus" value={encStatus} onChange={this.ChangeHandler}>
                                    <option> </option>
                                    <option>Entregado</option>
                                    <option>En curso</option>
                                    <option>Cancelado</option>
                                    <option>Pendiente</option>
                                </select>
                            </div>
                            <div>  

                            {encId!==0?
                            <button type="button" 
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick(encId)}>Guardar cambios</button>
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