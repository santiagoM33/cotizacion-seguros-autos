import React from 'react';
import PropTypes from 'prop-types';
import {primeraMayuscula} from '../../Helper';
 
const Summary = ({datos}) => {

    const {marca, year, plan} = datos;

    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
        return null;
    }

     return ( 
         <div className="card">
             <div className="card-header">
                 <h4>Resumen de Cotizacion</h4>
             </div>
             <div className="card-body">
                <p>Marca: {primeraMayuscula(marca)}</p>
                <p>Plan: {primeraMayuscula(plan)}</p>
                <p>Año: {year}</p>
             </div>
         </div>
      );
 }

 Summary.propTypes = {
    datos: PropTypes.object.isRequired
}
  
 export default Summary;