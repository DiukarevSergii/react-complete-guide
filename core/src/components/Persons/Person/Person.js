import React, { useEffect } from 'react';
import './Person.css';

const Person = (props) => {
    useEffect(() => {
        setTimeout(() => {
            console.log('[Person.js] main useEffect work');
        });
        return () => {
            console.log('[Person.js] cleanup work in useEffect');
        }
    }, []);

    const { click, name, age, changed } = props;
        return (
            <div className="Person">
                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <input type="text" onChange={changed} value={name} />
            </div>
        )
};

export default Person;
