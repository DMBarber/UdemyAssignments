import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        return (
                <div className={classes.Person}>
                    <button className={classes.Closebutton} onClick={this.props.click}>&times;</button>
                    <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
        );
    }
};

export default Person;
