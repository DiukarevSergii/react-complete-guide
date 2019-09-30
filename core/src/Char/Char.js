import React from 'react';
import './Char.css'

const Char = props => {
    return (
        <div className="Char">
            {props.letter}
        </div>
    );
};

export default Char;
