import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
export default class EmpleadoDetalles extends Component {
    //VAMOS A RECIBIR PROPS CON UN CONSTRUCTOR
    constructor(props){
        super(props);
        console.log("Props Detalle " + this.props.idempleado);
    }
    state = {
        empleado : {}
        ,status: false
    }
    mostrarEmpelado = () => {
        var request = "api/empleados/" + this.props.idempleado;
        var url  =Global.urlempleados + request;
        axios.get(url).then(res =>{
            this.setState({
                empleado:res.data,status:true
            });
        });
    }
    componentDidMount = () =>{
        this.mostrarEmpleado();
    }

    render() {
        return (
            <div>
                <h1>Detalles de empleado</h1>
                {this.state.status ==true && (
                    <div>
                        <h1 style={{color:"blue"}}>Apellido: {this.state.empleado.apellido}</h1>
                        <h1 style={{color:"red"}}>Oficio: {this.state.empleado.oficio}</h1>
                    </div>
                )}
            </div>
        )
    }
}
