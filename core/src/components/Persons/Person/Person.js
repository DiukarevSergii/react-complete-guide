import React, { useEffect } from 'react';
import './Person.css';

const Person = (props) => {
    const { click, name, age, changed } = props;

    useEffect(() => {
        console.log(`[Person.js] Name: ${name} main useEffect work`);

        const timer = setTimeout(() => {
            alert('Alert when person changed!');
        }, 5000);
        return () => {
            console.log(`[Person.js] Name: ${name} cleanup work in useEffect`);
            console.log(`[Person.js]  Name: ${name} clear timeout!`);
            clearTimeout(timer);
        }
    }, []);

        return (
            <div className="Person">
                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <input type="text" onChange={changed} value={name} />
            </div>
        )
};

export default Person;
