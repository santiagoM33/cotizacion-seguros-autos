import React from 'react';

const Footer = ({year}) => {
    return ( 
        <footer className="footer mt-auto py-3">
            <div className="container">
                <span className="text-muted">Todos los derechos reservados &copy; {year}</span>
            </div>
        </footer>
     );
}
 
export default Footer;