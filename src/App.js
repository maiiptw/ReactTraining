import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import BookList from './BookList';
import { Route } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/booklist" component={BookList} />
        <Footer/>

      </div>
    );
  }
}

export default App;
