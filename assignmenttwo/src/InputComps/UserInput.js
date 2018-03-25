import React from 'react';

const UserInput = (props) => {
    return (
            <div>
                <input className="textInput" type="text" onChange={props.changed} value={props.value} />
            </div>
    );
};

export default UserInput;