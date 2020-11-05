import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
export default class Empleados extends Component {
    state = {
        empleados: []
    }
    cargarEmpleados = () => {
        var iddepartamento = this.props.iddepartamento;
        var request = "/api/Empleados/EmpleadosDepartamento/" + iddepartamento;
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            });
        });        
    }
    componentDidMount = () => {
        this.cargarEmpleados();
    }
    componentDidUpdate = () => {
        this.cargarEmpleados();
    }
    render() {
        return (
            <div>
                {this.state.empleados.length > 0 && 
                (
                    this.state.empleados.map((emp, index) => {
                        return (<h2 key={index}>{emp.apellido}</h2>)
                    })
                )}
            </div>
        )
    }
}
