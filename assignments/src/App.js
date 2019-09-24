import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'default username',
        }
    }

    handleChange = event => {
        const { value } = event.target;

        this.setState({ username: value});
        console.log('current state', this.state);
    };

    render() {
        return (
            <div className="App" >
                <UserInput changed={this.handleChange} username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
