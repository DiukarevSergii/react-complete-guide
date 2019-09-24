import React, { Component } from 'react';
import UserOutput from "./UserOutput";

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    style = {
        display: 'block',
    };

    style2 = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    handleChange = event => {
        const { value } = event.target;

        this.setState({ username: value});
        console.log('current state', this.state);
    };

    render() {
        return (
            <div>
                <div style={this.style}>
                    <p style={this.style2}>It is UserInputComponent.js</p>
                    <div style={this.style2}>
                        <input type="text"
                               placeholder="text"
                               onChange={this.handleChange}
                               // value={this.state.name}
                        />
                    </div>
                </div>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput changed={this.state.username}/>
            </div>
        )
    };
}

export default UserInput;
