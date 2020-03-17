import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import About from './About';
import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
        <Link to='/' className="navbar-name">Pawdopt</Link>
        <span className="navbar-items">
          <Link to='/about' className="navbar-about">about</Link>
          <Route component={LoggedOut}/>
      </span>
    </nav>
    )
  }
}

export default Navbar;
