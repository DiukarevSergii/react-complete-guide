import React from 'react';

const UserInput = (props) => {
    const style = {
        display: 'block',
    };

    const style2 = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div>
            <div style={style}>
                <p style={style2}>It is UserInputComponent.js</p>
                <div style={style2}>
                    <input type="text" onChange={props.changed} value={props.username}/>
                    </div>
                </div>
            </div>
        );
};

export default UserInput;
