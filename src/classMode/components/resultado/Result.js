import React, {Component} from 'react';
import './Result.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Result extends Component {
    render() {
        const result = this.props.resultado;
        const mensaje = (!result) ? 'Elije Marca, Año y Tipo de Seguro' : 'El total es $';
        return ( 
            <div className="card">
                <div className="card-header">
                    {mensaje}
                    <TransitionGroup component="span" className="result">
                        <CSSTransition
                            classNames="result"
                            key={result}
                            timeout={{enter: 300, exit: 500}}
                        >
                        <span>{result}</span>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}
 
export default Result;