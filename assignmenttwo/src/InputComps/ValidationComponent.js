import React from 'react';
import './Inputs.css';

const ValidationComponent = (props) => {
    const inputLength = props.inputText;
    let outputText  = inputLength < 5 ? "Text too short" : inputLength > 10 ? "Text too long" : 'Text is a good length';
    let outputClass = inputLength < 5 || inputLength > 10 ? "badLength" : "goodLength";
    return (
        <span className={outputClass}>{outputText}</span>
    );
};

export default ValidationComponent;