import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Cortes', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  };

  deletePersonHandler = (index) => {
      const persons = [...this.state.persons];
      console.log(persons);
      console.log(index);
      persons.splice(index, 1);
      this.setState({persons})
  };

  render () {
      const persons = (
          <div>
          {this.state.persons.map((person, index) => {
          return <Person name={person.name} age={person.age} personIndex={index} click={() =>this.deletePersonHandler(index)}/>
            })
          }
          </div>
      );
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
