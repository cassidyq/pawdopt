import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">

        <Link to='/' className="navbar-name">Pawdopt</Link>
        <div className="navbar-items">
          <Link to='/about' className="navbar-about">about</Link>
          <LoggedOut/>
      </div>
    </nav>
    )
  }
}

export default Navbar;
