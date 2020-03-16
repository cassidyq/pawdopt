import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';


class LoggedIn extends Component {
  render() {
    return (
    <nav>
          <NavLink to='/' className="navbar-login">logout</NavLink>
    </nav>
    )
  }
}

export default LoggedIn;