import React, { Component } from 'react';
import { NavLink, Redirect, Route, Link, NavItem } from 'react-router-dom';
import '../styles/Navbar.scss';
import Cookies from 'universal-cookie';

class LoggedIn extends Component {
  state = {
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null
  };

  logout = () => {
    if (document.cookie) {
      const str = document.cookie.split('=')
      console.log('str: ', str)

      let toRemove = str[0];
      const cookies = new Cookies();
      cookies.remove(toRemove);
      this.setState({
        user_logged_in: false,
        shelter_logged_in: false,
        user_id: null,
        shelter_id: null
      })
      window.location.reload(true);
    }
  }

  render() {
    // if (document.cookie) {
    //   const str = document.cookie.split('=')
    //   console.log('str: ', str)

    //   let toRemove = str[0];
    //   // const cookies = new Cookies();
    //   cookies.remove(toRemove);
    //   this.setState({
    //     user_logged_in: false,
    //     shelter_logged_in: false,
    //     user_id: null,
    //     shelter_id: null
    //   })
    // }

    return (
      <nav>
        <Link to='/login' onClick={this.logout}>Logout</Link>
      </nav>
    )
  }
}

export default LoggedIn;