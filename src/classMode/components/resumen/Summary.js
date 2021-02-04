import React, {Component} from 'react';
import {primeraMayuscula} from '../../helper';
import Result from '../../components/resultado/Result';

class Summary extends Component {

    showSummary = () => {
        const {marca, fecha, plan} = this.props.datos;

        if (!marca || !fecha || !plan) return null;

        return (
            <div className="card">
                <div className="card-header">
                    <h3>Resumen de Cotizacion</h3>
                </div>
                <div className="card-body">
                    <p>Marca: {primeraMayuscula(marca)}</p>
                    <p>Plan: {primeraMayuscula(plan)}</p>
                    <p>Modelo: {fecha}</p>
                </div>
            </div>
        )

    }
    render() {
        return ( 
            <div>
                {this.showSummary()}
                <Result 
                    resultado={this.props.resultado}
                />
            </div>
        );
    }
}
 
export default Summary;