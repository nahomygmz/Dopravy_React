import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';
import { LoginClient } from './LoginClient';

 
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

            clienteActual:[],
            cliente:[],
            cliCedula:"",
            cliNombre:"",
            cliApellido:"",
            cliFechnac:"",
            cliSexo:"",
            cliPw:"",
            modalTitle:""
        }
    }



     //Buscar los encargos existentes
    refreshList(){
        const cedula = localStorage.getItem('cedula')
        const pw = localStorage.getItem('pass') 
        
        localStorage.getItem('cedula')
        localStorage.getItem('pass')

        fetch(variables.API_URL +'Cliente/'+cedula)
        .then(res=>res.json())
        .then((data) =>{
            this.setState({clienteActual : data})
        })

        fetch(variables.API_URL +'Encargo')
         .then(response=>response.json())
         .then(data =>{
             this.setState({encargos:data});
         });
    }

    // *****************************************

    /* clienteEspecifico(){

        const cedula = localStorage.getItem('cedula')
        const pw = localStorage.getItem('pass') 

        axios.get(variables.API_URL +'Cliente/'+cedula+' '+pw)
        .then(res=>res.json())
        .then(data =>{
            this.setState({clienteActual:data});
        });
    } */

    clienteEspecifico (){

        const cedula = localStorage.getItem('cedula')
        const pw = localStorage.getItem('pass') 
        
        localStorage.getItem('cedula')
        localStorage.getItem('pass')

        fetch(variables.API_URL +'Cliente/'+cedula)
        .then(res=>res.json())
        .then((data) =>{
            this.setState({clienteActual : data})
        })
        console.log(this.state.clienteActual)

        
    }
    

    //renderizar listas
    componentDidMount(){

        Promise.all([this.refreshList(), (this.clienteEspecifico())])
        /* .then(([res1, res2]) =>{
            return Promise.all([res1.json(), res2.json()])
        }) */
        /* .then(([res1, res2]) =>{
            this.setState({encargos:res1, clienteActual:res2})
        }) */
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

    /* submitHandler(){
        fetch(variables.API_URL+'Encargo', {
            method:'POST',
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
                encClicedula:this.state.encClicedula,
                
            })
        })
        .then(response=>response.json())
        .catch(function (error){
            if(error.response){
                alert('Usuario o contraseña incorrectos. Intentelo de nuevo.');
            }else{
                alert('Bienvenido/a');
                
                window.location.assign('/cuenta');
            }
        })
    } */


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

    //Delete
    deleteClick(id){
        if(window.confirm('Seguro que desea cancelar este encargo?')){ 
            fetch(variables.API_URL+'Encargo/'+id.encId, {
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })
            .then(response=>response.json())
            .catch(function (error){
                if(error.response){
                    alert('Error en cancelar el encargo. Intentelo de nuevo.');
                }else{
                    alert('Encargo cancelado.');
                    window.location.reload();
                    
                }
            })
        }
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
            encStatus,
            encClicedula,
            clienteActual,
            cliCedula,
            cliNombre,
            cliApellido,
            cliFechnac,
            cliSexo,
            cliPw, 
            modalTitle      
            
        }=this.state

        const a = localStorage.getItem('cedula')

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
                                                            enc.encClicedula == clienteActual.cliCedula ?
                                                            <tr key={enc.id}>
                                                                <td>{enc.encId}</td>
                                                                <td>{enc.encProvinciaid}</td>
                                                                <td>{enc.encSector}</td>
                                                                <td>{enc.encLugardescarga}</td>
                                                                <td>{enc.encTipoenc}</td>
                                                                <td>{enc.encDesc}</td>
                                                                <td>{enc.encStatus}</td>
                                                                <td>
                                                                <button type="button" 
                                                                data-toggle="modal" 
                                                                data-target="#exampleModalCenter"
                                                                onClick={()=>this.editClick(enc)}
                                                                >

                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                                                        </svg>

                                                                    </button>
                                                                    <span> </span>
                                                                    <button type="button" 
                                                                    data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"
                                                                    onClick={()=>this.deleteClick(enc)}>

                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                                        </svg>
                                                                        
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            :null
                                                        )}
                                                    </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                  
                                

                                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h5 className="modal-title">{modalTitle}</h5>
                                            </div>

                                            <div className="modal-body">

                                                <div className="form-group">
                                                    <label for="recipient-name" className="col-form-label">ID de Encargo</label>
                                                    <input disabled className="form-control" 
                                                    name="encId" 
                                                    value={encId} 
                                                    onChange={this.ChangeHandler}
                                                    />
                                                </div>
                                                

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

                                                <div className="form-group">
                                                    <label for="recipient-name" className="col-form-label">Status</label>
                                                    <input disabled className="form-control" 
                                                    name="encStatus" 
                                                    value={encStatus} 
                                                    onChange={this.ChangeHandler}
                                                    />
                                                </div>

                                                <div className="modal-footer">  
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    {encId!==0?
                                                    <button type="button" 
                                                    className="btn btn-primary"
                                                    onClick={()=>this.updateClick(encId)}>Guardar cambios</button>
                                                    :null}
                                                </div>
                                            </div>
                                        
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
                                        data-toggle="modal" data-target="#exampleModal">Nuevo encargo</button>
    
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
                                                                <label for="recipient-name" className="col-form-label">Cedula</label>
                                                                <select className="form-control" 
                                                                value={clienteActual.cliCedula} 
                                                                onChange={this.ChangeHandler}>
                                                                    <option>-Seleccione una Opción-</option>
                                                                    
                                                                    <option>{clienteActual.cliCedula}</option>
                                                                </select>
                                                            </div>                                                   
                                                        
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
                                                                {encId==0?
                                                                <button type="submit" 
                                                                className="btn btn-primary"
                                                                onClick={this.submitHandler}>Realizar encargo</button>
                                                                :null}
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
                                                <table className="table table-striped">
                                                    <thead>
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>
                                                        <th>Cedula</th>
                                                        <th>Fecha de Nacimiento</th>
                                                        <th>Sexo</th>
                                                        <th>password</th>
                                                    </thead>
                                                    <tbody>
                                                        { <tr>
                                                            <td>{clienteActual.cliNombre}</td>
                                                            <td>{clienteActual.cliApellido}</td>
                                                            <td>{clienteActual.cliCedula}</td>
                                                            <td>{clienteActual.cliFechnac}</td>
                                                            <td>{clienteActual.cliSexo}</td>
                                                            <td>{clienteActual.cliPw}</td>
                                                        </tr>}
                                                    </tbody>
                                                </table>
    
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
    
                <footer className="def-section footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-1">
                            <div className="logo with-border-bottom">
                                <div className="logo-image">
                                    <img src="./assets1/img/logo.png" alt="" />
                                </div>
                                
                            </div>
                            <div className="footer-1-button">
                                <a href="aboutIn"><div className="my-btn my-btn-primary">
                                    <div className="my-btn-bg-top"></div>
                                    <div className="my-btn-bg-bottom"></div>
                                    <div className="my-btn-text">
                                        MÁS
                                    </div>
                                </div></a>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-2">
                            <h4 className="with-square with-border-bottom">LINKS</h4>
                            <div className="footer-2-links">
                                <div className="footer-2-links-1">
                                    <ul>
                                        <li><a href="indexIn">Home</a></li>
                                        <li><a href="serviciosIn">Servicios</a></li>
                                        <li><a href="aboutIn">Sobre Nosotros</a></li>
                                        <li><a href="contactosIn">Contacto</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-3">
                            <h4 className="with-square with-border-bottom">INFO</h4>
                            <div className="footer-3-phone footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-phone"></i></span>
                                Teléfono:  849 234 0101
                            </div>
                            <div className="footer-3-fax footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-fax"></i></span>
                                WhatsApp:  +1 849 234 0101
                            </div>
                            <div className="footer-3-mail footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-envelope"></i></span>
                                E-mail:  info@dopravy.com
                            </div>
                            <div className="footer-3-adress footer-3-item">
                                <span className="footer-3-icon"><i className="fa fa-map-marker"></i></span>
                                Dirección: Calle 1 Esq. 10, Reparto Rosa. Santo Domingo, República Dominicana 
                            </div>
                        </div>                        
                    </div>
                </div>
        </footer>

        <div className="bottom">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-1"></div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 bottom-2">
                        COPYRIGHT 2022 | DOPRAVY
                    </div>
                    
                </div>
            </div>
	    </div>

    
            </div>
        )
    }
}