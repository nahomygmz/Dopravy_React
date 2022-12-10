import Menu from "./Menu";
import { variables } from '../variables';
//import React, {Component  } from 'react';
//import { tsConstructorType } from '@babel/types'
import Cuenta from "./Cuenta";
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Registro(){
    const [cliCedula, setCedula] = useState("")
    const [cliNombre, setNombre] = useState("")
    const [cliApellido, setApellido] = useState("")
    const [cliFechnac, setFechnac] = useState("")
    const [cliSexo, setSexo] = useState("")
    const [cliPw, setPw] = useState("")
    const navigate = useNavigate();
    
    function signUp(){
        let item = (cliCedula, cliNombre, cliApellido, cliFechnac, cliSexo, cliPw)

        fetch(variables.API_URL+'Cliente',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            navigate("/cuenta")
        },(error)=>{
            alert('error');
        })
        /*result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/cuenta")*/

    } 


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
                                        
                                            <label className="form-label fw-500" >Nombre</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                                <input type="text" value={cliNombre} onChange={(e)=>setNombre(e.target.value)} className="form-control bg-light border-light" id="fullName" required="" placeholder="Ingrese su nombre"/>
                                            </div>
                                            <br/>

                                            <label className="form-label fw-500" >Apellido</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                                <input type="text" value={cliApellido} onChange={(e)=>setApellido(e.target.value)} className="form-control bg-light border-light" id="fullName" required="" placeholder="Ingrese sus apellidos"/>
                                            </div>
                                            <br/>

                                            <label className="form-label fw-500" >Cédula</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                                <input type="text" value={cliCedula} onChange={(e)=>setCedula(e.target.value)}  className="form-control bg-light border-light" id="fullName" maxlength="11" required="" placeholder="Ingrese su cédula de identidad"/>
                                            </div>
                                            <br/>

                                            <label className="form-label fw-500" >Fecha de Nacimiento</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                                <input type="date"  value={cliFechnac} onChange={(e)=>setFechnac(e.target.value)}  className="form-control bg-light border-light" id="fullName" required="" placeholder="Ingrese su fecha de nacimiento"/>
                                            </div>
                                            <br/>

                                            <label className="form-label fw-500" >Sexo</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                                <select value={cliSexo} onChange={(e)=>setSexo(e.target.value)}  className="form-control bg-light border-light" id="emailAddress" required="">
                                                    <option>-Seleccione una opción-</option>
                                                    <option>Femenino</option>
                                                    <option>Masculino</option>
                                                </select>
                                            </div>
                                            <br/>

                                            <label className="form-label fw-500" >Contraseña</label>
                                            <div className="mb-3 icon-group icon-group-end">
                                            <input type="password" value={cliPw} onChange={(e)=>setPw(e.target.value)}  className="form-control bg-light border-light" id="loginPassword" required="" placeholder="Ingrese una contraseña"/>
                                            </div>

                                            <div className="form-check my-4">
                                                <input id="agree" name="agree" className="form-check-input" type="checkbox"/>
                                                <label className="form-check-label" for="agree">Estoy de acuerdo con los <a href="#">Términos</a> y <a href="#">Condiciones</a>.</label>
                                            </div>
                                            <div className="d-grid my-4">
                                                <button className="btn btn-dark btn-lg" onClick={signUp}>Registrarse</button>
                                                
                                            </div>
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




export default Registro;