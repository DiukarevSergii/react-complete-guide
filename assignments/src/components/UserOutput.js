import React, { Component } from 'react';

class UserOutput extends Component {
    constructor(props) {
        super(props);

        console.log('userOutput', props);
    }

    style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '70px',
        background: 'red',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
    };

    render() {
        return (
            <div style={this.style}>
                <p>Username: {this.props.username}!
                    <br/>
                    It is UserOutputComponent.js</p>
            </div>
        )
    }
};

export default UserOutput;
