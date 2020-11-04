import Axios from 'axios';
import React, { Component } from 'react'

export default class BuscarCustomer extends Component {
    buscarCliente = e => {
        e.preventDefault();
        var idcliente = this.cajaCustomerRef.current.value;
        var url  = "http://northwind.netcore.io/customers/"
        +idcliente+".json";
        Axios.get(url).then(res => {
            this.setState({customer:res.data.customers
                ,status:true
            })
        })
    }
    render() {
        return (
            <div>
                <form>
                    {this.state.status == true && 
                    (<div>
                        <h1 style={{color:"red"}}>Name: {this.state.customer.contactName}</h1>
                    </div>)
                    }
                </form>
                
            </div>
        )
    }
}
