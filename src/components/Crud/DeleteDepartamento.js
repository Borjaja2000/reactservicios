import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
import {Redirect,NavLink} from 'react-router-dom';


export default class DeleteDepartamento extends Component {
    state = {status:false}

    eliminarDepartamento = () =>{
        var request = "/api/departamentos/" +this.props.iddepartamento;
        var url = Global.urlcruddept + request;
        axios.delete(url).then(res => {
            this.setState({status:true});
        });

    }
    render() {
        if(this.state.status ==true){return <Redirect to="/" />;}
        return (
            <div>
                <h1>¿Desea eliminar el departamento {this.props.iddepartamento}?</h1>
                <button onClick={this.eliminarDepartamento} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}
