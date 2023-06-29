import React from 'react';
import '../stylesheets/Counter.css'

function Counter({ value }){
    return(
        <div className='counter'>
            { value }
        </div>
    );
}

export default Counter;