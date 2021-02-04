import React, {Component} from 'react';

class Form extends Component {
    //refs son para leer los valores del campo del formulario
    constructor(props) {
        super(props);
        this.marcaRef = React.createRef();
        this.fechaRef = React.createRef();
        this.planBasicoRef = React.createRef();
        this.planCompletoRef = React.createRef();
    }
    

    handleSubmit(e) {
        e.preventDefault();

        // Leer el plan
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';
        // Obtener los datos
        //console.log(this.marcaRef.current.value)
        // Crear el objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            fecha: this.fechaRef.current.value,
            plan: plan
        }
        // Enviarle al componente principal
        this.props.cotizarSeguro(infoAuto);

        // Resetear el formulario (opcional)
        //e.currentTarget.reset();
    }

    render() { 
        return ( 
            <form className="py-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Marca</label>
                    <select name="marca" className="form-control" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Año</label>
                    <select name="year" className="form-control" ref={this.fechaRef}>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="form-group">
                    <h5>Plan</h5>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="plan" value="basico" ref={this.planBasicoRef}/> Básico
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Cotizar</button>
            </form>
         );
    }
}
 
export default Form;