import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        const { click, name, age, changed } = this.props;
        return (
            <div className="Person">
                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <input type="text" onChange={changed} value={name} />
            </div>
        )
    }
}

export default Person;
