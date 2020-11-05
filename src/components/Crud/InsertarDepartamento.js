import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';
export default class InsertarDepartamento extends Component {
    cajanumeroref= React.createRef();
    cajanombreref= React.createRef();
    cajalocalidadref= React.createRef();
    state  ={
        mensaje : "",status: false
    }

    nuevoDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajanumeroref.current.value);
        var nom = parseInt(this.cajanombreref.current.value);
        var loc = parseInt(this.cajalocalidadref.current.value);
        var dept = {
            numero:num, nombre:nom,localidad:loc
        };
        var request = "/api/departamentos";
        var url = Global.urlcruddept + request;
        axios.post(url,dept).then(res => {
            this.setState({
                mensaje: "Nuevo departamento" + num,
                status:true
            });
        });
    }
    render() {
        if(this.state.status ==true){
            return <Redirect to="/"/>
    }
        return (
            <div>
                <h1>Nuevo departamento</h1>
                <form onSubmit={this.nuevoDepartamento}>
                    <label>Número</label>
                    <input type="number" name="cajanumero" className="form_control" ref={this.state.cajanumeroref}/><br/>
                    <label>Nombre</label>
                    <input type="number" name="cajanombre" className="form_control" ref={this.state.cajanombreref}/><br/>
                    <label>Localiodad: </label>
                    <input type="number" name="cajalocalidad" className="form_control" ref={this.state.cajalocalidadref}/><br/>
                    <button className="btn-success">Insertar Departamento</button>
                    

                </form>
        <h3 style={{color:"red"}}>{this.state.mensaje}</h3>
            </div>
        )
    }
}
