import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return ( 
        <header>
            <div className="navbar navbar-light bg-primary">
                <h1 className="navbar-brand text-white h3">{title}</h1>
            </div>
        </header>
     );
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;