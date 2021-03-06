import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
            <div className={classes.Person}>
                <button className={classes.Closebutton} onClick={props.click}>&times;</button>
                <p>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                        <input type="text" onChange={props.changed} value={props.name} />
            </div>
    );
};

export default person;
