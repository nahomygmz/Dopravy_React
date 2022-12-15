import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

import IndexCli from './pages/IndexCli';
import Servicios from './pages/Servicios';
import About from './pages/About';
import Contactos from './pages/Contactos';
import {LoginClient} from './pages/LoginClient';
import {Registro} from './pages/Registro';
import {Cuenta} from './pages/Cuenta';

import IndexIn from './pages/IndexIn';
import ServiciosIn from './pages/ServiciosIn';
import AboutIn from './pages/AboutIn';
import ContactosIn from './pages/ContactosIn';

import {IndexAdmin} from './admin_pages/IndexAdmin';
import {ListaClientes} from './admin_pages/listaClientes';
import {ListaEncargos} from './admin_pages/Encargos';
import {AddEmpleados} from './admin_pages/AddEmpleado';
import {ListaEmpleados} from './admin_pages/Empleados';
import {AddVehiculo} from './admin_pages/NewVehiculo';
import {ListaVehiculo} from './admin_pages/Vehiculos';
import {LoginAdmin} from './admin_pages/LoginAdmin';

function App() {
  return (
    <div className="App">    
      <Router>
            <Routes>
              <Route path='/index' element={<IndexCli />}></Route>
              <Route path='/servicios' element={<Servicios />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contactos' element={<Contactos />}></Route>
              <Route path='/loginClient' element={<LoginClient />}></Route>
              <Route path='/registerClient' element={<Registro />}></Route>
              <Route path='/cuenta' element={<Cuenta />}></Route>

              <Route path='/indexIn' element={<IndexIn />}></Route>
              <Route path='/serviciosIn' element={<ServiciosIn />}></Route>
              <Route path='/aboutIn' element={<AboutIn />}></Route>
              <Route path='/contactosIn' element={<ContactosIn />}></Route>

              <Route path='/indexadmin' element={<IndexAdmin />}></Route>
              <Route path='/listadoclientes' element={<ListaClientes/>}></Route>
              <Route path='/listadoencargos' element={<ListaEncargos />}></Route>
              <Route path='/agregarempleado' element={<AddEmpleados />}></Route>
              <Route path='/listadoempleados' element={<ListaEmpleados />}></Route>
              <Route path='/agregarvehiculo' element={<AddVehiculo />}></Route>
              <Route path='/listadovehiculos' element={<ListaVehiculo />}></Route>
              <Route path='loginAdmin' element={<LoginAdmin/>}></Route>

            </Routes>
      </Router>
  </div>
  );
}

export default App;
