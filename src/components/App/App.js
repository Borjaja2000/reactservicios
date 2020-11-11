import logo from './../../logo.svg';
import './App.css';
import Router from './../Router';
import EmpleadosRouter from './../RutasEmpleados/EmpleadosRouter';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Departamentos from './../Crud/Departamentos';
import MenuDepartamentos from './../Crud/MenuDepartamentos';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
