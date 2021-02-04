import React from 'react';

const Footer = (props) => {
    return ( 
        <footer className="footer mt-auto py-3">
            <div className="container">
                <span className="text-muted">Todos los derechos reservados &copy; {props.fecha}</span>
            </div>
        </footer>
     );
}
 
export default Footer;