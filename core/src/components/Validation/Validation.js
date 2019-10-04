import React from 'react';

const validation = ( props ) => {
    let validationMessage = '';

    if(props.lineLength < 5) {
        validationMessage = 'Text too short';
    } else if(props.lineLength > 10){
        validationMessage = 'Text long enough';
    }

    return (
        <div className="App Validation">
            <p>The line length: {props.lineLength}</p>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation;
