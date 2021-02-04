import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Summary from './components/summary/Summary';
import Result from './components/result/Result';
import Spinner from './components/spinner/Spinner';

const App = () => {
    const year = new Date().getFullYear();

    const [summary, setSummary] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan: ''
        }
    })

    const { cotizacion, datos } = summary;

    const [loading, setLoading] = useState(false);

    return ( 
        <Fragment>
            <Header title='Cotizador de Seguros de Autos'/>
            <main className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-3">
                            <div className="card-body">
                                <Form 
                                    setSummary={setSummary}
                                    setLoading={setLoading}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Summary 
                            datos={datos}
                        />
                    </div>
                    {loading
                    &&    
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <Spinner />
                                </div>
                            </div>
                        </div>
                    }
                    {!loading &&
                        <div className="col-12">
                            <Result 
                                cotizacion={cotizacion}
                            />
                        </div>
                    }
                </div>
            </main>
            <Footer year={year}/>
        </Fragment>
     );
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}
 
export default App;