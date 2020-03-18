import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/register" component={Register}/>
      </BrowserRouter>
    );
  }
}

export default App;

