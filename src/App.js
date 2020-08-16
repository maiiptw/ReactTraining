import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import BookList from './BookList';
import Contact from './Contact';
import { Route } from 'react-router-dom';
import './style/main.css'

class App extends Component{
  render(){
    return (
      <div style={{height : "100%",padding:"71px 0px 0px 0px"}}>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/booklist" component={BookList} />
        <Route path="/contact" component={Contact} />
        <footer id="sticky-footer" class="py-1 bg-dark text-white-50">
                <Footer/>
        </footer>
        

      </div>
    );
  }
}

export default App;
