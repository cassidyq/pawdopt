import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';


class LoggedOut extends Component {
  render() {
    return (
    <nav>
        <NavLink to='/login' className="navbar-login">login</NavLink>
          <span>/</span>
          <NavLink to='/register' className="navbar-login">register</NavLink>
    </nav>
    )
  }
}

export default LoggedOut;