import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Register from './Register';
import Shelter from './Shelter';
import Login from './Login';
import RegisterUser from './RegisterUser';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/shelter' component={Shelter} />
        <Route exact path='/login' exact component={Login} />
        <Route exact path='/RegisterUser' exact component={RegisterUser} />
      </BrowserRouter>
    );
  }
}

export default App;
