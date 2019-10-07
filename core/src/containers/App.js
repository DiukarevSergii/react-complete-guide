import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Cockpit from "../components/Cockpit/Cockpit";

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
      persons.splice(index, 1);
      this.setState({persons})
  };

  lineChangeHandler = (event) => {
      const { value } = event.target;
      this.setState({line: value});
  };

  deleteLineHandler = (index) => {
      console.log('deleteLineHandler');
      let line = [ ...this.state.line ];
      line.splice(index, 1);
      line = line.join('');
      this.setState({line})
  };

  render () {
      const chars = (
          <div>
              {   this.state.line !== '' ?
                  this.state.line.split('').map((letter, index)=> {
                      return <Char
                          letter={letter}
                          clicked={() =>this.deleteLineHandler(index)}
                      />
                  }) : ''
              }
          </div>
      );

      const persons = <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
      />;

      const cockpit = <Cockpit
          click={this.switchNameHandler}
          change={this.lineChangeHandler}
      />;

      const validation = <Validation lineLength={this.state.line.length} />;

      return (
        <div className="App">
            {cockpit}
            {validation}
            <br/>
            {chars}
            <br/>
            {persons}
        </div>
    );
  }
}

export default App;
