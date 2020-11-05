import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
import Empleados from './Empleados';
export default class Departamentos extends Component {
    selectDepartamentosRef = React.createRef();
    state = {
        departamentos: []
        , status: false
        , empleados: []
        , iddepartamento: 0
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
        this.setState({
            iddepartamento: iddepartamento
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
                {this.state.iddepartamento != 0 && (
                    <Empleados iddepartamento={this.state.iddepartamento}
                    empleados={this.state.empleados}/>
                )}
            </div>
        )
    }
}
