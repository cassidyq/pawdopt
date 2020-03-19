import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
// import About from './About';
import '../styles/Navbar.scss';
import Logo from '../images/pawdopt_white_logo.png';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
          <Link to='/' className="navbar-logo"><img  src={Logo}/></Link>
        <span className="navbar-items">
          <Link to='/about' className="navbar-about">about</Link>
          <Route component={LoggedOut}/>
      </span>
    </nav>
    )
  }
}

export default Navbar;
