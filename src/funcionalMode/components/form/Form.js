import React, {useState} from 'react';
import {fetchData} from '../../Helper';

const Form = ({setSummary, setLoading}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false)

    //Extraer valores del state
    const {marca, year, plan} = datos;

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario manda un form
    const handleSubmit = e => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return;
        }
        setError(false);

        setLoading(true);
        fetchData(marca, year, plan)
            .then(res => {
                setSummary({
                    cotizacion: res.data.monto,
                    datos
                });
                setLoading(false);
            })        
    }

    

    return (
        <form onSubmit={handleSubmit}>
            {error 
            ?  
                <div className="alert alert-danger" role="alert">
                Todos los campos son obligatorios
                </div>
            : null}
            <div className="form-group">
                <label>Marca</label>
                <select 
                    name="marca" 
                    value={marca} 
                    className="form-control"
                    onChange={handleChange}
                >   
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>

            <div className="form-group">
                <label>Año</label>
                <select 
                    name="year" 
                    value={year} 
                    className="form-control"
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
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
            <div className="form-check form-check-inline">
                <input 
                    type="radio" 
                    className="form-check-input" 
                    name="plan" 
                    value="basico" 
                    checked={plan === 'basico'}
                    onChange={handleChange}
                />
                <label className="form-check-label">Básico</label>
            </div>
            <div className="form-check form-check-inline">
                <input 
                    type="radio" 
                    className="form-check-input" 
                    name="plan" 
                    value="completo" 
                    checked={plan === 'completo'}
                    onChange={handleChange}
                />
                <label className="form-check-label">Completo</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-2 ">Cotizar</button>
        </form>
    );
}
 
export default Form;