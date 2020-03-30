import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';


class LoggedOut extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/login' className="navbar-login">Login</NavLink>
        <span>/</span>
        <NavLink to='/register' className="navbar-login">Register</NavLink>
      </nav>
    )
  }
}

export default LoggedOut;