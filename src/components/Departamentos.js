import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
export default class Departamentos extends Component {
    selectDepartamentosRef = React.createRef();
    state = {
        departamentos: []
        , status: false
        , empleados: []
    }
    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data
                , status: true
            });
        });
    }
    componentDidMount = () => {
        this.cargarDepartamentos();
    }
    buscarEmpleados = (e) => {
        e.preventDefault();
        var iddepartamento = this.selectDepartamentosRef.current.value;
        var request = "/api/Empleados/EmpleadosDepartamento/" + iddepartamento;
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            });
        });
    }
    render() {
        return (
            <div>
                <h1>Departamentos Empleados Components Api</h1>
                <form>
                    <select name="selectdepartamentos"
                    ref={this.selectDepartamentosRef}>
                        {this.state.status == true && (
                            this.state.departamentos.map((dept, index) => {
                                return (<option key={index} value={dept.Numero}>
                                    {dept.Nombre}
                                </option>)
                            })
                        )}
                    </select>
                    <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
                </form>
                {this.state.empleados.length > 0 && (
                    <ul>
                        {this.state.empleados.map((emp, index) => {
                            return (<li key={index}>{emp.apellido}</li>)
                        })}
                    </ul>
                )}
            </div>
        )
    }
}