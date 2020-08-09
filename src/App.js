import React, { Component } from 'react';

class App extends Component{
  render(){
    var mystyle = {
      fontSize : '80px',
      color : '#FF0000'
    }
    return (
      <div>
        <h1 style={mystyle}>React Tutorial</h1>
        <h2>{100*100}</h2>
      </div>
    );
  }
}

export default App;
