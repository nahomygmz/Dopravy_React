import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {variables} from '../variables';
import axios from 'axios';



export class Registro extends Component{

    constructor(props){
        super(props);

        this.state={
            clientes:[],
            cliCedula:"",
            cliNombre:"",
            cliApellido:"",
            cliFechnac:"",
            cliSexo:"",
            cliPw:"",
            modalTitle:""
        }
    }

    //Buscar y mostrar los conductores existentes
    refreshList(){
        fetch(variables.API_URL +'Cliente')
         .then(response=>response.json())
         .then(data =>{
             this.setState({conductores:data});
         });
     }
    //Renderizar la lista
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
        axios.post(variables.API_URL +'Cliente', this.state)
        .then(res=>res.json())
        .catch(function (error){
            if(error.response){
                alert('Este usuario ya existe.');
            }else{
                alert('Usuario registrado.');
            }
        })
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
                                    <div className="hero-bg hero-bg-scroll">
                                        <img src="./assets3/images/login-bg-7.jpg" className="img3000"/>
                                    </div>
                                    <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                        <div className="container">
                                            <div className="row g-0 mt-5">
                                                <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                                    <h1 className="text-13 text-white fw-600 mb-4">Nuestra experiencia es el mejor respaldo.</h1>
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
                                            <div className="logoLogin"> <a href="index"><img src="./assets3/images/logo.png" href="index"/></a></div>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="container my-auto py-5">
                                    <div className="row g-0">
                                        <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                            <br/>
                                            <br/>
                                            <h3 className="text-12 mb-4">Sign Up</h3>
                                            <form onSubmit={this.submitHandler}>
                                                <label className="form-label fw-500" >Nombre</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                    <input type="text"
                                                    name="cliNombre"
                                                    value={cliNombre}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control bg-light border-light" required="" placeholder="Ingrese su nombre"/>
                                                </div>
                                                <br/>
    
                                                <label className="form-label fw-500" >Apellido</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                    <input type="text" 
                                                    name="cliApellido"
                                                    value={cliApellido}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control bg-light border-light" required="" placeholder="Ingrese sus apellidos"/>
                                                </div>
                                                <br/>
    
                                                <label className="form-label fw-500" >Cédula</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                    <input type="text" 
                                                    name="cliCedula"
                                                    value={cliCedula}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control bg-light border-light" maxlength="11" required="" placeholder="Ingrese su cédula de identidad"/>
                                                </div>
                                                <br/>
    
                                                <label className="form-label fw-500" >Fecha de Nacimiento</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                    <input type="date"  
                                                    name="cliFechnac"
                                                    value={cliFechnac}
                                                    onChange={this.ChangeHandler} className="form-control bg-light border-light" required="" placeholder="Ingrese su fecha de nacimiento"/>
                                                </div>
                                                <br/>
    
                                                <label className="form-label fw-500" >Sexo</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                    <select 
                                                    name="cliSexo"
                                                    value={cliSexo}
                                                    onChange={this.ChangeHandler}
                                                    className="form-control bg-light border-light" required="">
                                                        <option>-Seleccione una opción-</option>
                                                        <option>Femenino</option>
                                                        <option>Masculino</option>
                                                    </select>
                                                </div>
                                                <br/>
    
                                                <label className="form-label fw-500" >Contraseña</label>
                                                <div className="mb-3 icon-group icon-group-end">
                                                <input type="password" 
                                                name="cliPw"
                                                value={cliPw}
                                                onChange={this.ChangeHandler}
                                                className="form-control bg-light border-light" required="" placeholder="Ingrese una contraseña"/>
                                                </div>
    
                                                <div className="form-check my-4">
                                                    <input id="agree" name="agree" className="form-check-input" type="checkbox"/>
                                                    <label className="form-check-label" for="agree">Estoy de acuerdo con los <a href="#">Términos</a> y <a href="#">Condiciones</a>.</label>
                                                </div>
                                                <div className="d-grid my-4">
                                                    <button type="submit" onClick={this.submitHandler} className="btn btn-dark btn-lg">Registrarse</button>
                                                    
                                                </div>

                                                </form>
                                                <p className="text-2 text-muted text-center">¿Ya tiene una cuenta? <a href="loginClient">Iniciar Sesión</a></p>
                                            
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
    
}



