import React from 'react';

const CharComponent = (props) => {
    return (
        <span className="character" onClick={props.click}>{props.inputChar}</span>
    );
};

export default CharComponent;