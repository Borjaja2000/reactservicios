import React, { Component } from 'react'
import Global from './../../Global';
import axios from './../../Global';

export default class EmpleadosRouter extends Component {
    stae  ={
        empleados: [],
        status:false
    }
    cargarEmpleados = () => {
        var request = "/api/empleados";
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados : res.data
                ,status : true
            });
        });
    }
    componentDidMount=()=>{
        this.cargarEmpleados();
    }
    render() {
        return (
            <div>
                <h1>Rutas de empleados </h1>
                <ul>
                    {this.state.status ==true && (
                        this.state.empleados.map((emp,index)=>{
                            return(<li key={index}>{emp.apellido}<a href={"/empleadodetalles/"+ emp.idEmpleado}>Detalles</a></li>);
                        })
                    )}
                </ul>
            </div>
        )
    }
}
