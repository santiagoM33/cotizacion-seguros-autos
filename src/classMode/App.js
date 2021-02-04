import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Summary from './components/resumen/Summary';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './helper';

class App extends Component {

  //Guardando cotizacion State
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      datos: {}
    }
  }


  cotizarSeguro(datos) {
    const {marca, plan, fecha} = datos;

    // Agregar una base de... 2000
    let resultado = 2000;
    //Obtener la diferencia de años (para saber que porcentaje se resta por este)
    const diferencia = obtenerDiferenciaAnio(fecha)
    //por cada año se resta 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    
    // Icrementar segun procedencia - Americano = 15%, Asiatico = 5% y Europeo = 30%
    resultado = calcularMarca(marca) * resultado;

    // Plan basico aumenta valor 20% y el completo 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del plan incrementar - redondea a dos digitos
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //ya tenemos el costo
    //Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      fecha: fecha
    }

    this.setState({
      resultado: resultado,
      datos: datosAuto
    })


  }

  render() {
    const fecha = new Date().getFullYear();
    return (
      <Fragment>
        <Header title='Cotizador de Seguros de Auto'/>
        <main className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Form 
                    cotizarSeguro={this.cotizarSeguro.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <Summary 
                datos={this.state.datos}
                resultado={this.state.resultado}
              />
            </div>
          </div>
        </main>
        <Footer fecha={fecha}/>
      </Fragment>
    );
  }
}

export default App;
