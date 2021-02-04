import React from 'react';

const Header = props => {
    return ( 
        <header>
            <div className="navbar navbar-light bg-primary">
                <a className="navbar-brand text-white" href="#">{props.title}</a>
            </div>
        </header>
     );
}
 
export default Header;