import React from 'react';
import './Cockpit.css'

const Cockpit = (props) => {
    return (
        <div className="App Cockpit">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button className="Red" onClick={() => props.click('Maximilian!!')}>Switch/Reset Names</button>
            <br/>
            <input type="text" onChange={(event) => props.change(event)}/>
            <br/>
        </div>
    );
};

export default Cockpit;
