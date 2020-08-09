import React, { Component } from 'react';
import Header from 'Header';
import Content from 'Content';
import Footer from 'Footer';

class App extends Component{
  render(){
    var mystyle = {
      fontSize : '80px',
      color : '#FF0000'
    }
    return (
      // <div>
      //   <h1 style={mystyle}>React Tutorial</h1>
      //   <h2>{10000*10000}</h2>
      // </div>
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
