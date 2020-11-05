import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmpleadoDetalles from './RutasEmpleados/EmpleadoDetalles';
import React, { Component } from 'react'
import Departamentos from './Crud/Departamentos';
import InsertarDepartamento from './Crud/InsertarDepartamento';
import DetallesDepartamento from './Crud/DetallesDepartamento';
import UpdateDepartamento from './Crud/UpdateDepartamento';
export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Departamentos} />
                    <Route exact path="/create" component={InsertarDepartamento} />
                    <Route exact path="details/id" render={props => {
                        var id = props.match.params.id;
                        return <DetallesDepartamento iddepartamento={id}/>
                    }} />
                    <Route exact path="/update/:id/:nombre/:localidad" render = {props => {
                        var id = props.match.params.id;
                        return <UpdateDepartamento iddepartamento={id} nombre={nom} localidad={loc}/>;
                    }}/>
                <Route exact path="/empleadosdetalle/:idempleado" 
                render={props => {
                    var idemp =props.match.params.idempleado;
                    console.log("Id " + idemp);
                    return <EmpleadoDetalles idempleado={idemp}/>
                }} />
                </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}
