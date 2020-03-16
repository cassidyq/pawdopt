import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
      <div>
        <Link to='/' className="navbar-name">Pawdopt</Link>
      </div>
    </nav>
    )
  }
}

export default Navbar;
