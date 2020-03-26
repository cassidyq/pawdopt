import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

// import About from './About';
import '../styles/Navbar.scss';
import Logo from '../images/pawdopt_white_logo.png';

class Navbar extends Component {
  state = {
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null
  };

  checkForUser = () => {
    if (document.cookie) {
      const str = document.cookie.split('=')
      console.log('str: ', str)

      if (str[0] === 'user_cookie') {
        this.setState({ user_logged_in: true, user_id: Number(str[1]) })
      }
      if (str[0] === 'shelter_cookie') {
        this.setState({ shelter_logged_in: true, shelter_id: Number(str[1]) })
      }
    }
  }

  render() {
    let user = <Route component={LoggedOut} />;
    console.log(this.state.user_id)
    if (document.cookie) {
      user = <Route component={LoggedIn} />;
    }
    console.log('user: ', user)

    return (
      <div className="navbar">
        <Link to='/' className="navbar-logo"><img src={Logo} /></Link>
        <div className="navbar-items">
          <Link to='/about' className="navbar-about">about</Link>
          {user}
        </div>
      </div>
    )
  }
}

export default Navbar;
