import React from 'react';

const Header = (props) => {
    return (
        <div>
           <h1>Bienvenue à tous les nerds chez {props.name}</h1> 
        </div>
    );
};

export default Header;