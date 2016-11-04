import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComponent from './DisplayComponent.js'
import SecondDisplayComponent from './SecondDisplayComponent.js'
import ThirdDisplayComponent from './ThirdDisplayComponent.js'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const numberOfComponents = 3;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DisplayComponent />
        <SecondDisplayComponent props={this.props}/>
        <ThirdDisplayComponent numberOfComponents={numberOfComponents} />
      </div>
    );
  }
}

export default App;
