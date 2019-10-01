import React from 'react';

const UserOutput = (props) => {
    const style = {
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

    return (
        <div style={style}>
            <p>Username: {props.username}!
                <br/>
                It is UserOutputComponent.js
            </p>
        </div>
    )
};

export default UserOutput;
