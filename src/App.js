import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state = {
        person: [
            { name: 'Max'},
            ],
    };

    switchNameHandler = () => {
        console.log('Was clicked!', this);
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name="Sergii" age="31"/>
                <Person name="Vadim" age="55">My Hobbies: Racing</Person>
                <Person name="Taras" age="64"/>
            </div>
    );
  }
}

export default App;
