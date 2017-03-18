import React, { Component } from 'react';
import banner from '../media/bizdoors.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "App-Title">
        <img className="App-img" src={banner}/>
        <div className="App-header">
          <h2>BIZ DOORS</h2>
        </div>
        <div className="App-subheader" top="40%">
          <h2>CREATING STARS OUT OF BRAND</h2>
        </div>
      </div>
        <div className="App-navigation">
          <h2><a href="#">HOME</a> | <a href="#">ABOUT US</a> | <a href="#">OUR SERVICES</a> | <a href="#">TEAM</a> | <a href="#">PORTFOLIO</a> | <a href="#">CONTACT</a></h2>
        </div>
      </div>
    );
  }
}

export default App;
