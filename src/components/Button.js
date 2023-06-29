import React from 'react';
import '../stylesheets/Button.css'

function Button({ value, type, action }){
    return(
        <button onClick = { action } className= { type === 'clicker' ? 'clicker' : 'reset' }>{ value }</button>
    );
};

export default Button;