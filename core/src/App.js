import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { id: 1, name: 'Max', age: 28 },
                { id: 2, name: 'Cortes', age: 29 },
                { id:3, name: 'Stephanie', age: 26 }
            ],
            line: '',
        };
    }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: 'Max', age: 29 },
        { id: 3, name: 'Stephanie', age: 27 }
      ]
    } )
  };

  nameChangedHandler = ( event, id ) => {
      const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
      });

      const person = { ...this.state.persons[personIndex] };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState ( {persons})
  };

  deletePersonHandler = (index) => {
      const persons = [...this.state.persons];
      console.log(persons);
      console.log(index);
      persons.splice(index, 1);
      this.setState({persons})
  };

  lineChangeHandler = (event) => {
      const { value } = event.target;
      this.setState({line: value});
};

  render () {
      const persons = (
          <div>
              {this.state.persons.map((person, index) => {
                  return <Person
                      key={person.id}
                      name={person.name}
                      age={person.age}
                      click={() =>this.deletePersonHandler(index)}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
              })
              }
          </div>
      );

      const chars = (
          <div>
              {
                  this.state.line.split('').map(letter => {
                      return <Char letter={letter}/>
                  })
              }
          </div>
      );

      return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch/Reset Names</button>
            <br/>
            <input type="text" onChange={(event) => this.lineChangeHandler(event)}/>
            <br/>
            <p>The line length: {this.state.line.length}</p>
            <Validation lineLength={this.state.line.length} />
            <br/>
            {chars}
            <br/>
            {persons}
        </div>
    );
  }
}

export default App;
