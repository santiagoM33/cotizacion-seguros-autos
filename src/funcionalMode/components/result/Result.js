import React from 'react';
import PropTypes from 'prop-types';
import './Result.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Result = ({cotizacion}) => {
    const mensaje = (!cotizacion) ? 'Elije Marca, Año y Tipo de Seguro' : 'El total es $';
    return ( 
        
            (
                <div className="card">
                <div className="card-header">
                    {mensaje}
                    <TransitionGroup component="span" className="result">
                        <CSSTransition
                            classNames="result"
                            key={cotizacion}
                            timeout={{enter: 300, exit: 500}}
                        >
                        <span>{cotizacion}</span>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
            )
     );
}

Result.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Result;