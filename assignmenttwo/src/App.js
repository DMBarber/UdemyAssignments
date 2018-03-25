import React, { Component } from 'react';
import UserInput from './InputComps/UserInput';
import ValidationComponent from './InputComps/ValidationComponent';
import CharComponent from './InputComps/CharComponents';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        inputChars : [],
        inputLength: 0
    }

    valueChangedHandler = (event) => {
        const inputVal = event.target.value;
        this.setState({
            inputChars: inputVal,
            inputLength: inputVal.length
        });
    }

    deleteCharHandler = (charIndex) => {
        const chars = this.state.inputChars.split('');
        chars.splice(charIndex,1);
        this.setState({
            inputChars: chars.join(''),
            inputLength: chars.length
        });

    }

  render() {

    let chars = null;
    if(this.state.inputLength){
        chars = (
            <div className="text-block">
            {this.state.inputChars.split('').map((char, index) => {
                return <CharComponent
                click={() => this.deleteCharHandler(index)}
                inputChar={char}
                key={index}
                />
            })}
            </div>
        );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment Two</h1>
        </header>
        <div className="App-body">
            <label className="small">Enter a word whose length is between 5 and 10 characters:</label>
            <UserInput changed={(event) => this.valueChangedHandler(event)} value={this.state.inputChars} />
            <p>Input length: {this.state.inputLength} (<ValidationComponent inputText={this.state.inputLength} />)
            </p>
            {chars}
        </div>
        <footer>
            <ul>
                <ol><strong>Q: What did you find most challenging and how did you overcome the challenge?</strong></ol>
                <ol>A: The most challenging aspect of this assignment was remembering how to set up the two way binding. I went back and reviewed the item #45 under section 3. Once I figured that out the assignment came together quite smoothly.</ol>
                </ul>
        </footer>
      </div>
    );
  }
};

export default App;
