import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmpleadoDetalles from './RutasEmpleados/EmpleadoDetalles';
import React, { Component } from 'react'
import Departamentos from './Crud/Departamentos';
import InsertarDepartamento from './Crud/InsertarDepartamento';
import DetallesDepartamento from './Crud/DetallesDepartamento';
import UpdateDepartamento from './Crud/UpdateDepartamento';
import DeleteDepartamento from './Crud/DeleteDepartamento';
import MenuDepartamentos from './Crud/MenuDepartamentos';
export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                <Route exact path="/" component={Departamentos} />
                    <Route exact path="/create" component={InsertarDepartamento} />
                    <Route exact path="/delete/:id" render={props =>{
                        var id = props.match.params.id;
                        return <DeleteDepartamento iddepartamento={id}/>
                    }}></Route>
                    <Route exact path="details/id" render={props => {
                        var id = props.match.params.id;
                        return <DetallesDepartamento iddepartamento={id}/>
                    }} />
                    <Route exact path="/update/:id/:nombre/:localidad" render = {props => {
                        var id = props.match.params.id;
                        var nom = props.match.params.nom;
                        var loc = props.match.params.loc;
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
