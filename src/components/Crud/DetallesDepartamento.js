import Axios from 'axios';
import React, { Component } from 'react'
import Global from './../../Global';
import {NavLink} from 'react-router-dom';

export default class DetallesDepartamento extends Component {
    constructor(props){
        super(props);
        this.setState({
            iddepartamento: props.iddepartamento
        });

    }
    state= {
        departamento: {},
        status: false,
        iddepartamento:0
    }
    buscarDepartamento = () => {
        var request= "/api/departamentos" + this.state.iddepartamento;
        var url = Global.urlcruddept + request;
        Axios.get(url).then(res => {
            this.setState({
                departamento: res.data,status:true
            });
        });
    }
    componentDidMount = () => {
        this.buscarDepartamento();
    }
    render() {
        return (
            <div>
                <h1>Detalles departamento</h1>
                {this.state.status == true && (
                    <React.Fragment>
                        <NavLink to="/">Volver al listado</NavLink>
                <h1>Numero: {this.state.departamento.numero}</h1>
                <h1>Nombre:{this.state.departamento.nombre} </h1>
                <h1>Localidad:{this.state.departamento.localidad} </h1>
                <NavLink to={"/update/" + this.state.departamento.numero + "/"+ this.state.departamento.nombre+ "/"+ this.state.departamento.localidad} className="btn btn-info">Modificar</NavLink>
                <NavLink to={"/delete/"+ this.state.departamento.numero} className="btn btn-danger">Eliminar departamento</NavLink><hr/>
                <NavLink to={"/delete/" + this.state.departamento.numero} className="btn btn-success">Eliminar NavLink</NavLink>
                </React.Fragment>
                )}
                
            </div>
            
        )
    }
}
