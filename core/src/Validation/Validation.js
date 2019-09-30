import React from 'react';

const validation = ( props ) => {
    let message = '';

    if(props.lineLength < 5) {
        message = 'Text too short';
    } else if(props.lineLength > 10){
        message = 'Text long enough';
    }

    return (
        <div className="Validation">
            <p>{message}</p>
        </div>
    )
};

export default validation;
