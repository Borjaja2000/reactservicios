import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
import {NavLink, Redirect} from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();
    modificarDepartamento = (e) =>{
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;
        var dept = {
            numero:num,
            nombre:nom,
            localidad:loc
        };
        var request = "/api/departamentos";
        var url = Global.urlcruddept + request;
        axios.put(url,dept).then(res => {
            this.setState({status:true});
        });
    }
    state= {status:false}
    render() {
        if(this.state.satus == true){return <Redirect to="/"/>;}
        return (
            <div>
                <h1>Modificar departamento
                    
                    <form onSubmit={this.modificarDepartamento} style={{width:"500px",margin:"0 auto"}}>
                        <label>Número:</label>
                        <input type="number" name="cajanumero" className="form-control" ref={this.cajaNumeroRef} defaultValue={this.props.iddepartamento} readOnly></input><br/>
                        <label>Nombre:</label>
                        <input type="text" name="cajanombre" className="form-control" ref={this.cajaNombreRef} defaultValue={this.props.nombre} readOnly></input><br/>
                        <label>Localidad:</label>
                        <input type="text" name="cajalocalidad" className="form-control" ref={this.cajaLocalidadRef} defaultValue={this.props.localidad} readOnly></input><br/>
                        <button className="btn-info">Modificar</button>
                    </form>
                </h1>
            </div>
        )
    }
}
